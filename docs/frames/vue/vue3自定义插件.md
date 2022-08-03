## 简介
vue插件就是导出一个`install`方法,当我们`use(xx插件)`的时候,vue会帮我们自动执行该方法。

```js
export default {
  install: (app, options) => {
    // app 是vue实例的全局环境
    // options 是app.use(xx, data)时传递的参数
  }
}
```

## options
我们可以在此获取组件文件的路径
![](/img/options.png)

## el
- 当template为空时,渲染为注释
- 当template无主标签时,直接渲染为内容
- 当template有主标签的,结构清晰


## 实战
因此我们可以实现在每个vue组件上添加一个标识显示当前文件的路径,这在项目比较大组件同名或者功能类似的时候可以快速的找到我们需要修好的文件。

为了方便我们创建注释的方式显示:
```js
// plugin.js
const domFileUrl = {
	install(Vue, {
		attributeName = '文件路径:',
	} = {}) {
		Vue.mixin({
			mounted() {
                let fileUrl = attributeName + this.$options.__file
				var contentDom = document.createComment(fileUrl); 
                this.$el.parentElement.insertBefore(contentDom, this.$el)
			}
		})
	}
}

export default domFileUrl
```
![](/img/plugin3.png)


