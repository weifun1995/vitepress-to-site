
## 介绍
> vue路由切换时使用[nprogress](https://www.npmjs.com/package/nprogress)在网页顶部实现一个滚动条缓慢加载，当到达一定值时网页没有加载完成会停止移动。

## 安装
```bash
npm install -S nprogress
```

## 使用
详细用法

```js
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.start()       // 开始
NProgress.done()        // 完成
NProgress.inc(0.2)      // 每次递增 0.2 直到 0.994
NProgress.set(0.0)      // 手动设置进度，n是0-1的数字。场景：实现滚动网页时上面进度条显示滚动的进度
```


## vue配合路由钩子使用

```js
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.after(() => {
  NProgress. done()
})
```