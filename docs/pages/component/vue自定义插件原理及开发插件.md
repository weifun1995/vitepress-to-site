
## 概述
vue提供`vue.use()`方法是我们可以使用插件功能
插件通常用来为 Vue 添加全局功能,基本在main.js文件中能实施的操作插件内。插件的功能范围没有严格的限制,一般有下面几种：
- 添加全局方法或者 property。如：`vue-custom-element`
- 添加全局资源：指令/过滤器/过渡等。如 `vue-touch`
- 通过全局混入来添加一些组件选项。如 `vue-router`
- 添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。
- 一个库，提供自己的 API，同时提供上面提到的一个或多个功能。如 `vue-router`


## 原理解析
我们在`vue.use(插件名称, 插件配置)`时实际调用的是插件的`install`,因此插件js需要暴露出一个install方法

:::tip 提示
`vue.use`会自动阻止多次注册相同插件，届时即使多次调用也只会注册一次该插件。
:::

plugin 
```js
export default {
  install: (app, options) => {
    console.log('app', app, options)
  }
}
```

main.js
```js
import wPlugin from './plugin'

const app = createApp(App)
app.use(wPlugin, {haha: 123})
```

![](/img/plugin.png)