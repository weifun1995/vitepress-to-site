## yaml-matter
[yaml-matter](https://www.npmjs.com/package/gray-matter),node环境下运行,解析md文件头部`---`包裹的字符块

## 安装和使用
```bash
npm i gray-matter
```

node环境下
```js
const matter = require('gray-matter')

console.log(matter('---\ntitle: Front Matter\n---\nThis is content.'))
```

结果
```js
{
  content: 'This is content.',
  data: { title: 'Front Matter' },
  isEmpty: false,
  excerpt: ''
}
```