---
name: 在线渲染一个markdown
description: 常用的论坛文章基本使用markdwon格式编写,编写自己的静态博客网站解析和渲染markdown成为了首要要素
tag: 插件
---


## 前期准备



## 引入依赖




## 解析markdown

```js
async function renderMarkdown () {
  let mdBlob = await axios.get('./demo.md')
  
  let md = new MarkdownIt({
    highlight: function (str, lang, params) {
      let numArr = getLineNums(params)
      if (lang && hljs.getLanguage(lang)) {
        try {
          // 得到经过highlight.js之后的html代码
          const preCode = hljs.highlight(lang, str, true).value
          // 以换行进行分割
          const lines = preCode.split(/\n/).slice(0, -1)
          let html = ''
          // 行号
          let lineBlock = lines.map((item, index) => {
            return '<span class="line-number">' + (index + 1) + '</span>'
          }).join('')
          lineBlock = '<div class="line-numbers">' + lineBlock + ' </div>'
          html += lineBlock
          // 高亮行
          let lightLine = lines.map((item, index) => {
            return `<span class="light-line ${numArr.includes(index + 1) ? 'light-line-active' : ''}"> </span>`
          }).join('')
          lightLine = '<div class="light-lines">' + lightLine + ' </div>'
          html += lightLine
          //  代码
          let linesTemp = lines.map((item, index) => {
            return `<span class="line">${item}</span></br>`
          }).join('')
          linesTemp = '<span class="lines">' + linesTemp + '</span>'
          html += linesTemp
          // 添加代码语言
          if (lines.length) {
            html += '<b class="language-name">' + lang + '</b>'
          }
          return '<pre class="hljs"><code>' +
            html +
            '</code></pre>'
        } catch (__) { }
      }
      // 未添加代码语言，此处与上面同理
      const preCode = md.utils.escapeHtml(str)
      const lines = preCode.split(/\n/).slice(0, -1)
      let html = lines.map((item, index) => {
        return '<li><span class="line-num" data-line="' + (index + 1) + '"></span>' + item + '</li>'
      }).join('')
      html = '<ol>' + html + '</ol>'
      return '<pre class="hljs"><code>' +
        html +
        '</code></pre>'
    }
  }).use(markdownItTocAndAnchor, {
    tocCallback (tocMarkdown, tocArray, tocHtml) {
      // data.renderTitle = tocArray
      formatSlider(tocArray)
    }
  }).use(MarkdownItContainer, 'tip', {
    validate: function (params) {
      return params.trim().match(/^tip\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^tip\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<div class="custom-block tip"><p class="custom-block-title title-tip">' + md.utils.escapeHtml(m[1]) + '</p>\n';
      } else {
        // closing tag
        return '</div>\n';
      }
    }
  }).use(MarkdownItContainer, 'warning', {
    validate: function (params) {
      return params.trim().match(/^warning\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^warning\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<div class="custom-block warning"><p class="custom-block-title title-warning">' + md.utils.escapeHtml(m[1]) + '</p>\n';
      } else {
        // closing tag
        return '</div>\n';
      }
    }
  }).use(MarkdownItContainer, 'danger', {
    validate: function (params) {
      return params.trim().match(/^danger\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^danger\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<div class="custom-block danger"><p class="custom-block-title title-danger">' + md.utils.escapeHtml(m[1]) + '</p>\n';
      } else {
        // closing tag
        return '</div>\n';
      }
    }
  }).use(MarkdownItContainer, 'details', {
    validate: function (params) {
      return params.trim().match(/^details\s+(.*)$/);
    },
    render: function (tokens, idx) {
      var m = tokens[idx].info.trim().match(/^details\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        // opening tag
        return '<details class="custom-block details"><summary>' + md.utils.escapeHtml(m[1]) + '</summary>\n';
      } else {
        // closing tag
        return '</details>\n';
      }
    }
  })

```

```JS
// 高亮某一行
const getLineNums = (params) => {
  // 需要高亮的行号  [1, 4-5]
  if (!params) {
    return []
  }
  if (!params.includes('[') && !params.includes(']')) {
    return []
  }
  params = params.slice(1, -1)
  let arr = params.split(',')
  let result = []
  arr.forEach(item => {
    if (!item.includes('-')) {
      result.push(Number(item))
    } else {
      let start = Number(item.split('-')[0])
      let end = Number(item.split('-')[1])
      if (start && end) {
        if (start > end) {
          return
        } else {
          for (let i = start; i <= end; i++) {
            result.push(Number(i))
          }
        }
      }
      if (start && !end) {
        result.push(Number(start))
      }
      if (!start && end) {
        result.push(Number(end))
      }
    }
  })
  return result
}
```

