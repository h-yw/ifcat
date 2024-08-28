export interface Photo {
  title: string
  description: string
  filePath: string
  fileName: string
  fileSize: string
  fileCreateDate: string
  fileType: string
  mimeType: string
  model: string
  software: string
  exposureTime: string
  fNumber: number
  exposureProgram: string
  iso: number
  dateTimeOriginal: string
  shutterSpeedValue: string
  apertureValue: number
  focalLength: string
  exposureMode: string
  whiteBalance: string
  lensModel: string
  lensMake: string
  lensInfo: string
  imageWidth: number
  imageHeight: number
  imageSize: string
}

const photosData: Photo[] =
  //@start-data
  [
    {
      title: '20210921-DSC_1021.jpg',
      description: '',
      filePath: '/static/photos/2021-09-21/20210921-DSC_1021.jpg',
      fileName: '20210921-DSC_1021.jpg',
      fileSize: '14 MB',
      fileCreateDate: '2024:08:28 15:25:01+08:00',
      fileType: 'JPEG',
      mimeType: 'image/jpeg',
      model: 'NIKON Z 5',
      software: 'Adobe Photoshop Lightroom Classic 10.4 (Windows)',
      exposureTime: '1/500',
      fNumber: 8,
      exposureProgram: 'Not Defined',
      iso: 100,
      dateTimeOriginal: '2021:09:21 15:11:44',
      shutterSpeedValue: '1/500',
      apertureValue: 8,
      focalLength: '50.0 mm',
      exposureMode: 'Auto',
      whiteBalance: 'Auto',
      lensModel: 'NIKKOR Z 24-50mm f/4-6.3',
      lensMake: 'NIKON',
      lensInfo: '24-50mm f/4-6.3',
      imageWidth: 6016,
      imageHeight: 4016,
      imageSize: '6016x4016',
    },
    {
      title: '20211016-DSC_1653.jpg',
      description: '',
      filePath: '/static/photos/2021-10-16/20211016-DSC_1653.jpg',
      fileName: '20211016-DSC_1653.jpg',
      fileSize: '17 MB',
      fileCreateDate: '2024:08:28 17:29:10+08:00',
      fileType: 'JPEG',
      mimeType: 'image/jpeg',
      model: 'NIKON Z 5',
      software: 'Adobe Photoshop Lightroom Classic 10.4 (Windows)',
      exposureTime: '1/2500',
      fNumber: 25,
      exposureProgram: 'Program AE',
      iso: 6400,
      dateTimeOriginal: '2021:10:16 13:24:39',
      shutterSpeedValue: '1/2500',
      apertureValue: 25,
      focalLength: '50.0 mm',
      exposureMode: 'Auto',
      whiteBalance: 'Manual',
      lensModel: 'NIKKOR Z 24-50mm f/4-6.3',
      lensMake: 'NIKON',
      lensInfo: '24-50mm f/4-6.3',
      imageWidth: 6016,
      imageHeight: 4016,
      imageSize: '6016x4016',
    },
    {
      title: 'DSC_0720-1.jpg',
      description: '',
      filePath: '/static/photos/DSC_0720-1.jpg',
      fileName: 'DSC_0720-1.jpg',
      fileSize: '3.5 MB',
      fileCreateDate: '2024:08:28 17:31:04+08:00',
      fileType: 'JPEG',
      mimeType: 'image/jpeg',
      model: 'NIKON Z 5',
      software: 'Adobe Photoshop Lightroom Classic 10.4 (Windows)',
      exposureTime: '1/400',
      fNumber: 10,
      exposureProgram: 'Program AE',
      iso: 6400,
      dateTimeOriginal: '2021:09:12 11:06:09',
      shutterSpeedValue: '1/400',
      apertureValue: 10,
      focalLength: '50.0 mm',
      exposureMode: 'Auto',
      whiteBalance: 'Auto',
      lensModel: 'NIKKOR Z 24-50mm f/4-6.3',
      lensMake: 'NIKON',
      lensInfo: '24-50mm f/4-6.3',
      imageWidth: 4016,
      imageHeight: 6016,
      imageSize: '4016x6016',
    },
  ]
//@end-data
export default photosData
