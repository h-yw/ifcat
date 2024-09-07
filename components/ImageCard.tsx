import { Photo } from '@/data/photosData'
import Image from './Image'
const ImageCard = (props: { photo: Photo }) => {
  const {
    filePath,
    dateTimeOriginal,
    title,
    description,
    imageWidth,
    imageHeight,
    iso,
    exposureTime,
    fNumber,
    model,
    lensInfo,
    lensMake,
    imageSize,
    blur,
  } = props.photo

  const maker = model?.replace(lensMake, '')
  return (
    // className="md max-w-[544px] p-4"
    <div className="relative z-10 w-full transform cursor-pointer object-contain transition-transform duration-300 ease-in-out hover:z-[100] hover:scale-105">
      <div
        className={`${
          filePath && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 bg-white dark:border-gray-700`}
      >
        <div className="relative inline-block">
          <Image
            alt={title}
            title={description}
            src={filePath}
            //   className="object-cover object-center md:h-36 lg:h-48"
            className="mb-2  cursor-pointer object-contain"
            width={imageWidth}
            height={imageHeight}
            blurDataURL={blur}
            placeholder="blur"
            quality={50}
          />
          <div className="absolute bottom-4 right-2 rounded bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
            {imageSize}
          </div>
        </div>
        <div className="pb-2 pl-2 pr-2">
          {/* <h3 className="mb-3 text-2xl font-bold leading-8 tracking-tight">{title}</h3> */}
          {/* <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p> */}
          <div className="flex">
            <div>
              {/* 光圈等信息 */}
              <p className=" text-[12px] font-medium text-gray-500 dark:text-gray-400">
                ISO
                {iso} f{fNumber} {exposureTime}s
              </p>
              <p className=" text-[12px] font-medium  text-gray-500 dark:text-gray-400">
                {dateTimeOriginal}
              </p>
            </div>
            <div className="flex-1"></div>
            <div className="flex flex-row items-center">
              <div className="font-medium">{lensMake}</div>
              <div className="ml-2 mr-2 h-full border-r border-gray-300 "></div>
              <div>
                <p className=" text-black-500 text-[12px] font-medium dark:text-gray-400">
                  {maker}
                </p>
                <p className=" text-[12px] font-medium text-gray-500 dark:text-gray-400">
                  {lensInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ImageCard
