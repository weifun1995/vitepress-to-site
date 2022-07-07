## globby
[globby](https://github.com/sindresorhus/globby)基于`fast-glob`,获取指定目录下得文件列表

## 安装和使用
```bash
npm i globby
```

```js
const globby = require('globby')

const paths = await globby(['**.md'], {
    ignore: ['node_modules'],
})
```