单文件组件,不使用组合式语法
```js
<script setup>
    console.log('hello script setup')
</script>
```

- 直接引入组件后无效注册可以在模板中使用
- 内部可以直接使用`await`语法,因为顶部已经有`async`环境

## 全局属性[慎用]
```js

// main.js中注册
const app = createApp()
app.config.globalProperties.xxx = xxx

// <script setup>组件内使用
import  { getCurrentInstance } from 'vue'
let appData = getCurrentInstance()

```

## 获取路由和vuex
```js
import {useRoute, useRouter} from 'vue-router'
import {useStore} from 'vuex'


const store = useStore()

const router = useRouter() // 路由跳转
const route = useRoute()   // 路由参数
```

## props
``` js
const props = defineProps({
  foo: {
    type: 'String',
    default: ''
  }
})
```

## emit
``` js
const emit = defineEmits(['change', 'delete'])
```

## attrs
```js
import { useAttrs } from 'vue'
const attrs = useAttrs()
```

## slots
```js
import { useSlots } from 'vue'
const slots = useSlots()
```

## watch
```js
watch(count, (newVal, oldVal) => {
  /* ... */
})
```

## computed
```js
const plusOne = computed(() => count.value + 1)

const plusTwo = computed({
  get: () => count.value + 1,
  set: val => {
    count.value = val - 1
  }
})

plusOne.value = 1
```

## defineExpose
默认情况下内部定义的数据不会被外部获取,及使用`$refs`获取到的组件实例不会显示数据,需要显式的暴露出去
```js
<script setup>
import { ref } from 'vue'

const a = 1
const b = ref(2)

defineExpose({
  a,
  b
})
</script>
```