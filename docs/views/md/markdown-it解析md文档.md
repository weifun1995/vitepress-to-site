## markdown-it
用于解析markdown格式的文档,更多配置查看[中文文档](https://markdown-it.docschina.org/)

[官网解析](https://markdown-it.github.io/),在debug模式下可以查看解析流

![](/img/markdownIt.png)

## 安装和使用
```bash 
npm install markdown-it --save
```

```js
var md = require('markdown-it')({
    // 可选的option参数
    html:         false,        // 在源码中启用 HTML 标签
    xhtmlOut:     false,        // 使用 '/' 来闭合单标签 （比如 <br />）。
                              // 这个选项只对完全的 CommonMark 模式兼容。
    breaks:       false,        // 转换段落里的 '\n' 到 <br>。
    langPrefix:   'language-',  // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
    linkify:      false,        // 将类似 URL 的文本自动转换为链接。

    // 启用一些语言中立的替换 + 引号美化
    typographer:  false,

    // 双 + 单引号替换对，当 typographer 启用时。
    // 或者智能引号等，可以是 String 或 Array。
    //
    // 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
    // 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
    quotes: '“”‘’',

    // 高亮函数，会返回转义的HTML。
    // 或 '' 如果源字符串未更改，则应在外部进行转义。
    // 如果结果以 <pre ... 开头，内部包装器则会跳过。
    highlight: function (/*str, lang*/) { return ''; }
})
// 解析md格式字符串
var result = md.render('# markdown-it rulezz!')
```

## 插件加载
```js
var md = require('markdown-it')()
            .use(plugin1)
            .use(plugin2, opts, ...)
            .use(plugin3);
```