const groups = {
    pages: [
        {
            text: '开发环境配置',
            dir: 'dev',
            children: [
                '配置node环境',
                '配置项目axios',
                '配置github秘钥',
                'node支持esm模块',
                '开发中使用git'
            ],
        },
        {
            text: 'HTML',
            dir: 'html',
            children: [
                'svg实现流动的虚线',
                'svg实现饼图',
                'canvas实现饼图'
            ],
        },
        {
            text: 'CSS',
            dir: 'css',
            children: [
                '一些常用设置'
            ],
        },
        {
            text: 'javaScript',
            dir: 'javaScript',
            children: [
                '前端模块化',
                '获取location.search参数',
                '判断元素是否在视口内',
                '检测dom变化',
                '判定鼠标是否点击的元素本身'
            ],
        },
        {
            text: '善用工具',
            dir: 'plugin',
            children: [
                '插件列表',
                '生成可下载的二维码图片',
                'docxtemplater根据word的模板插值替换成新的文档',
                'vue路由跳转显示假进度条',
                'js-xlsx前端实现xlsx文件的导入导出',
                '内容步骤引导'
            ],
        },
        {
            text: '业务组件',
            dir: 'component',
            children: [
                'vue自定义插件原理及开发插件',
                'vue使用渲染函数实现局部组件',
                'vue实现单行文字过长时显示tooltip',
                'vue利用canvas实现水印组件'
            ],
        }
    ],
    views: [
        {
            "text": '项目工程化',
            dir: 'project',
            children: [
                '仿monorepe实现多工程管理',
                'pnpm工作空间实现monorepe'
            ],
        },
        {
            "text": '实现一个cli工具',
            dir: 'myCli',
            children: [
                '简单实现一个cli工具',
                'inquirer命令行交互',
                'cammander命令解析',
                '一些辅助美化工具',
                'shell执行命令行'
            ],
        },
        {
            "text": '实现markdown解析和拓展',
            dir: 'md',
            children: [
                '前期准备',
                'markdown-it解析md文档',
                '解析代码块',
                '获取目录',
                '自定义代码块',
                '解析yaml-matter格式块',
                'globby匹配目录文件'
            ],
        },
        {
            "text": 'chrome扩展',
            dir: 'chromeExtension',
            children: [
                '开始',
                'action相关api',
                'contextMenus相关api'
            ],
        }
    ],
    frames: [
        {
            "text": 'vue',
            dir: 'vue',
            children: [
                'vue2',
                'vue3之setup方案',
                'vue3自定义指令',
                'vue3自定义插件',
                '渲染函数'
            ],
        },
    ]
} 

export const getSidebar = function (classify) {
    let arr = []
    groups[classify].forEach(item => {
        let { text, dir } = item
        let items = item.children.map(child => {
            return {
                text: child,
                link: `/${classify}/${dir}/${child}`
            }
        })
        arr.push({ text, items })
    })
    return arr
}

export const createSidebar = function () {
    let toc = ['pages', 'views', 'frames']
    let obj = {}
    toc.forEach(item => {
        let key = `/${item}/`
        let arr = getSidebar(item)
        obj[key] = arr
    })
    // console.log(JSON.stringify(obj))
    return {...obj}
}