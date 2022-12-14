export const createNav = function () {
    return [
        {
            text: '博客',
            link: '/pages/dev/配置node环境'
        },
        {
            text: '框架',
            link: '/frames/vue/vue2.md'
        },
        {
            text: '其他',
            items: [
                { text: '项目工程化管理', link: '/views/project/仿monorepe实现多工程管理' },
                { text: '打造自己的cli工具', link: '/views/myCli/简单实现一个cli工具' },
                { text: '打造自己的静态博客', link: '/views/md/前期准备' },
                { text: 'chrome扩展开发', link: '/views/chromeExtension/开始' }
            ]
        }
    ]
}