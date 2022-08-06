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
<rl-child @update:show="isShow" />
<!-- 等同于 -->
<rl-child show.sync="isShow" />
```

```js
// 子组件
this.$emit('update:show', 'xx数据')
```

## props验证
```js
props: {
  type: ['String', 'Number'],   // 类型
  default: '',                  // 默认值
  validator: function (value) { // 返回true通过验证
    return ['success', 'warning', 'danger'].includes(value)
  }
}
```

## props传值简化
```js
<rl-child  v-bind="{name: 'xx', age: 'xx'}" />
// 等同于
<rl-child  :name="xx" :age='xx' />
```

## $forceUpdate()
迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。

## deep深度选择器
- `/deep/`
- `>>>`
- `::v-deep`
当 style 标签有 scoped 属性时，它的 CSS 只作用于当前组件中的元素，父组件的样式将不会渗透到子组件。 项目中经常使用在某个组件内修改第三方库的样式而不是全局生效。

```html
<!-- 写法1 使用::v-deep -->
<style lang="scss" scoped>
  ::v-deep .ant-card-head-title{
    background: yellowgreen;
  }
</style>

<!-- 写法2 使用>>> 操作符-->
<style scoped>
>>>.ant-card-head-title{
  background: yellowgreen;
}
</style>

<!-- 写法3 使用/deep/ -->
<style scoped>
 /deep/.ant-card-head-title{
  background: yellowgreen;
}
</style>

<!-- 写法4 使用:deep(<inner-selector>) -->
<style lang="scss" scoped>
  :deep(.ant-card-head-title){
    background: yellowgreen;
  }
</style>
```
:::warning
- `写法1` 和`写法4`，都支持sass预处理器。但是`vue3弃用了写法1`
- 推荐使用`写法4`语义化便于理解
:::

## watch 
- 深度监听
```js
watch: {
  name: {
    handler: function (newVal, oldVal) {

    },
    deep: true, // 深度监听
    immediate: true // 立即监听
  }
}
```

- 返回一个取消观察函数，用来停止触发回调
```js
var unwatch = vm.$watch('a', cb)
// 之后取消观察
unwatch()
```

## hook
- 我们在生命周期函数里面调用另一个生命周期函数钩子去执行一些事情
```js
mounted () {
  this.$once('hook:beforeDestroy', function () {
    // do something
  })
},
```


- 父组件监听子组件的生命周期函数钩子
```html
<!-- 父组件使用子组件 -->
<rl-child
  :value="40"
  @hook:mounted="handleChildMounted"
/>
```

## 组件懒加载
```js
components: {
    historyTab: resolve => {require([ '../../component/historyTab/historyTab.vue' ], resolve)}, //懒加载
    //historyTab: () => import('../../component/historyTab/historyTab.vue')
},
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
