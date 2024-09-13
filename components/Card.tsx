/*
 * @Author: h-yw 1327603193@qq.com
 * @Date: 2024-08-29 17:53:07
 * @LastEditTime: 2024-09-13 22:35:54
 * @Github: https://github.com/h-yw
 * @Blog: https://hlovez.life
 * @Description:
 */
import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, tag }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <div className="block-inline relative">
              <Image
                alt={title}
                src={imgSrc}
                className="object-contain md:h-36 lg:h-48"
                width={544}
                height={306}
              />
              {tag ? (
                <div className="absolute bottom-4 right-2 rounded bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
                  {tag}
                </div>
              ) : null}
            </div>
          </Link>
        ) : (
          <div className="block-inline relative">
            <Image
              alt={title}
              src={imgSrc}
              className="object-contain md:h-36 lg:h-48"
              width={544}
              height={306}
            />
            {tag ? (
              <div className="absolute bottom-4 right-2 rounded bg-black bg-opacity-50 px-2 py-1 text-xs text-white">
                {tag}
              </div>
            ) : null}
          </div>
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
