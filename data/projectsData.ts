/*
 * @Author: h-yw 1327603193@qq.com
 * @Date: 2024-08-29 17:53:07
 * @LastEditTime: 2024-09-13 22:36:50
 * @Github: https://github.com/h-yw
 * @Blog: https://hlovez.life
 * @Description:
 */
interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tag?: string
}

const projectsData: Project[] = [
  {
    title: 'BackArt',
    description: `BackArt 是一个基于 Flutter 开发的应用程序，帮助你轻松创建简约且时尚的图片，支持自定义背景色、文字和水印。无论你是想设计个性化的手机壁纸、或是为社交媒体创建内容， BackArt都能为你提供便捷的创作体验。`,
    imgSrc: '/static/images/project/backart.png',
    href: 'https://github.com/h-yw/back-art',
    tag: 'Github',
  },
  {
    title: 'MP Editor',
    description: `自己在编辑公众号文章的时候，感觉编辑文章的体验非常不友好。对于写技术文章来说，不追求花里胡哨的话，Markdown应该足够了。因此我希望能够在公众号文章编辑的时候，使用Markdown进行编辑，于是就有了这个项目。`,
    imgSrc: '/static/images/project/mp_wd.png',
    href: 'https://github.com/h-yw/mp-editor',
    tag: 'Github',
  },
]

export default projectsData
