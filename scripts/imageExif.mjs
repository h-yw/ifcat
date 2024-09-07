import path from 'path'
import fs from 'fs'
import { exiftool } from 'exiftool-vendored'
import { decode, encode } from 'blurhash'
import cliProgress from 'cli-progress'
import sharp from 'sharp'
const baseDir = path.resolve('./')
const publicDir = path.resolve('./public')
const photosDir = path.join(publicDir, 'static/photos')
const photosDataPath = path.join(baseDir, 'data/photosData.ts')
const blurSize = {
  width: 32,
  height: 32,
}
const fileList = readDirectoryRecursive(photosDir)
// Create a new progress bar instance and use shades_classic theme
const progressBar = new cliProgress.SingleBar({
  format: 'Processing | {bar} | {percentage}% || {value}/{total} Files',
  barCompleteChar: '\u2588',
  barIncompleteChar: '\u2591',
  hideCursor: true,
})
getExifData(fileList)
  .then((exifData) => {
    updatePhotosData(exifData)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    exiftool.end()
    progressBar.stop()
    process.exit(0)
  })
// updatePhotosData([])
function readDirectoryRecursive(dir, fileList = []) {
  // 读取目录中的所有内容
  const items = fs.readdirSync(dir)

  items.forEach((item) => {
    const fullPath = path.join(dir, item)
    // 检查当前项是文件还是文件夹
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // 如果是目录，递归调用自身
      readDirectoryRecursive(fullPath, fileList)
    } else {
      // 如果是文件，将其添加到列表
      fileList.push({
        path: fullPath,
        relativePath: ('\\' + path.relative(publicDir, fullPath)).replace(/\\/g, '/'),
        date: fullPath.match(/\\(\d{4}-\d{2}-\d{2})\\/)?.[1],
      })
    }
  })

  return fileList
}

async function getExifData(fileList) {
  let result = []
  progressBar.start(fileList.length, 0)
  for (let i = 0; i < fileList.length; i++) {
    result[i] = await getExif(fileList[i])
    progressBar.increment()
  }
  return result
}
function updatePhotosData(photosData) {
  const data = fs.readFileSync(photosDataPath, { encoding: 'utf-8' })
  const replaceData = data.replace(
    /\/\/@start-data([\s\S]*?)\/\/@end-data/,
    '//@start-data \n' + JSON.stringify(photosData) + '\n //@end-data'
  )
  fs.writeFileSync(photosDataPath, replaceData, 'utf-8')
}

async function encodeImageToBlurhash(imageUrl) {
  let { data, info } = await sharp(imageUrl).resize(blurSize.width).ensureAlpha().raw().toBuffer({
    resolveWithObject: true,
  }) //await loadImage(imageUrl)
  // const imageData = getImageData(image)
  const ratio = blurSize.width / Math.max(info.width, info.height)
  return encode(new Uint8ClampedArray(data), info.width, info.height, 4, 4)
}
async function getImageData(blur) {
  const pixels = decode(blur, blurSize.width, blurSize.height)
  const imageBuffer = await sharp(Buffer.from(pixels), {
    raw: { width: blurSize.width, height: blurSize.height, channels: 4 },
  })
    .png() // 转换为 PNG 格式
    .toBuffer()
  return `data:image/png;base64,${imageBuffer.toString('base64')}`
}

async function getExif(file) {
  try {
    const exif = await exiftool.readRaw(file.path)
    const blur = await encodeImageToBlurhash(file.path)
    const base64 = await getImageData(blur)
    return {
      blur: base64,
      title: exif.FileName,
      description: '',
      filePath: file.relativePath,
      fileName: exif.FileName,
      fileSize: exif.FileSize,
      fileCreateDate: exif.FileCreateDate,
      fileType: exif.FileType,
      mimeType: exif.MIMEType,
      model: exif.Model,
      software: exif.Software,
      exposureTime: exif.ExposureTime,
      fNumber: exif.FNumber,
      exposureProgram: exif.ExposureProgram,
      iso: exif.ISO,
      dateTimeOriginal: exif.DateTimeOriginal, //拍摄原始时间
      shutterSpeedValue: exif.ShutterSpeedValue, // 快门速度
      apertureValue: exif.ApertureValue, //光圈
      focalLength: exif.FocalLength,
      exposureMode: exif.ExposureMode,
      whiteBalance: exif.WhiteBalance,
      lensModel: exif.LensModel,
      lensMake: exif.LensMake,
      lensInfo: exif.LensInfo,
      imageWidth: exif.ImageWidth,
      imageHeight: exif.ImageHeight,
      imageSize: exif.ImageSize,
    }
  } catch (e) {
    console.log(e)
    return {}
  }
}
