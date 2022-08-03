## 生命周期
```js
const MyDirective = {
  created(el, binding, vnode, prevVnode) {}, // 新增
  beforeMount() {},
  mounted() {},
  beforeUpdate() {}, // 新增
  updated() {},
  beforeUnmount() {}, // 新增
  unmounted() {}
}
```

:::tip 参数在binding中获取
```js
<div v-highlight:test.a.b="'测试数据'"></div>
```
![](/img/directive.png)
:::


## 全局注册
```js
import { createApp } from 'vue'
const app = createApp({})

app.directive('highlight', {
  beforeMount(el, binding, vnode) {
    el.style.background = binding.value
  }
})
```