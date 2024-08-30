console.log('imageExif.mjs')
import path from 'path'
import fs from 'fs'
import { exiftool } from 'exiftool-vendored'
const baseDir = path.resolve('./')
const publicDir = path.resolve('./public')
const photosDir = path.join(publicDir, 'static/photos')
const photosDataPath = path.join(baseDir, 'data/photosData.ts')

const fileList = readDirectoryRecursive(photosDir)
getExifData(fileList)
  .then((exifData) => {
    updatePhotosData(exifData)
  })
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    exiftool.end()
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
function getExif(file) {
  return new Promise((resolve, reject) => {
    return exiftool
      .readRaw(file.path)
      .then((exif) => {
        resolve({
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
        })
      })
      .catch(reject)
  })
}

function getExifData(fileList) {
  return Promise.all(fileList.map((file) => getExif(file)))
}
function updatePhotosData(photosData) {
  const data = fs.readFileSync(photosDataPath, { encoding: 'utf-8' })
  const replaceData = data.replace(
    /\/\/@start-data([\s\S]*?)\/\/@end-data/,
    '//@start-data \n' + JSON.stringify(photosData) + '\n //@end-data'
  )
  fs.writeFileSync(photosDataPath, replaceData, 'utf-8')
}
