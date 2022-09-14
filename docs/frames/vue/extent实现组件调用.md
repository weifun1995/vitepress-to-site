## 介绍
通过Vue.extend我们可以实现对组件的js方式调用,如alert组件可以实现this.$alert形式

## 使用
```js
import Vue from 'vue'
import Toast from './Toast.vue'

// 
const ToastInstall = Vue.extend(Toast)

export function showToast (con) {
    // 创建实例并挂载
    const ToastTemp = new ToastInstall().$mount()
    document.body.appendChild(ToastTemp.el)
}
```