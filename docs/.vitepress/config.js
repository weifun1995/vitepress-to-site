const {createNav}  = require('../utils/nav')
const {createSidebar} = require('../utils/sidebar')

module.exports = {
    title: 'wei-book',
    description: 'Just to record something',
    logo: '',
    themeConfig: {
        nav: createNav(),
        sidebar: createSidebar()
    },
    markdown: {
        lineNumbers: true
    }
}