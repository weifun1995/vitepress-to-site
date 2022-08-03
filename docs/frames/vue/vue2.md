## v-model
`v-model`默认把`value`用作`prop`且把`input`用作`event`

在组件内我们可以通过`model`选项更改
```js
model: {
    prop: 'checked',
    event: 'change'
}
```

## .sync修饰符
默认情况下子组件需要更改父组件的某个状态需要显式的在子组件提交事件,父组件监听事件,显得繁琐。因此vue提供了`.sync`这种优雅的,可以省掉父组件的监听事。

```html
<child @update:show="isShow" />
<!-- 等同于 -->
<child show.sync="isShow" />
```

```js
// 子组件
this.$emit('update:show', 'xx数据')
```

## eventBus
::: warning 慎用
虽然为不是父子关系的组件提供了事件交互,但是数据状态不易管理和跟踪。
:::
- 创建event-bus.js
```js
import Vue from 'vue'
export const EventBus = new Vue()
```

- 在main.js中挂载eventBus到全局
```js
Vue.prototype.$EventBus = new Vue()
```

- 使用
```js
// 触发事件
$EventBus.$emit("aMsg", '来自A页面的消息')

// 监听事件
$EventBus.$on("aMsg", (msg) => {

})
```
