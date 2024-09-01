import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About',
  description:
    '一个前端工程师的个人博客，分享技术文章、摄影作品、等多领域爱好。专注于 Node.js、React、Vue、MUI、Element-UI、Ant Design 等前端技术，以及微信和支付宝应用开发。博客名称 ifcat 源于博主的宠物猫 if，记录了生活与技术的点滴。',
  keywords: ['ifcat', '技术博客', '摄影分享', 'react.js', 'javascript'],
  category: '关于 - About',
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
