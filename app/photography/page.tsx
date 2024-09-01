import { genPageMetadata } from 'app/seo'
import photosData from '@/data/photosData'
import ImageCard from '@/components/ImageCard'

export const metadata = genPageMetadata({
  title: 'Photography',
  keywords: ['ifcat 摄影', '摄影作品', 'photography', '意识流摄影', 'Nikon', 'SONY'],
  description:
    'ifcat 摄影作品：分享自己的摄影作品，包括详细的拍摄信息如摄影工具、镜头焦距、快门速度、ISO 设置和照片分辨率等。欢迎浏览博主的摄影作品，和博主交流摄影。',
  category: '摄影-Photography',
})

export default function Photography() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Photography
          </h1>
          {/* <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Showcase your projects with a hero image (16 x 9)
          </p> */}
        </div>
        <div className="container py-12">
          <div className="columns-1 gap-4 sm:columns-2 ">
            {photosData.map((d) => (
              <ImageCard key={d.title} photo={d} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
