我们创建一个`common.scss`文件，在vue中使用它
## 单文件引入
```css
@import "./common.scss"
```


## 全局引入

在vite.config.ts,添加下边代码，并重启服务
```js
module.exports = {
  cssPreprocessOptions: {
    scss: {
      additionalData: '@import "./common.scss";'
    }
  }
}
```