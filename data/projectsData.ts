interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'BackArt',
    description: `BackArt 是一个基于 Flutter 开发的应用程序，帮助你轻松创建简约且时尚的图片，支持自定义背景色、文字和水印。无论你是想设计个性化的手机壁纸、或是为社交媒体创建内容， BackArt都能为你提供便捷的创作体验。`,
    imgSrc: '/static/images/project/backart.png',
    href: 'https://github.com/h-yw/back-art',
  },
]

export default projectsData
