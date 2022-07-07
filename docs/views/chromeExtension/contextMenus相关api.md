## contextMenus
使用前需要打开`contextMenus`权限,在网页鼠标右键或者网页的一些图像视频等添加一下上下文操作

- ContextType:鼠标右键自定义菜单触发dom元素
"all","page","frame","selection","link","editable","image","video","audio","launcher","browser_action","page_action", or"action"

- ItemType:鼠标右键自定义菜单选项的类型
"normal","checkbox","radio", or"separator"

- OnClickDat:单击上下文菜单项时发送的信息

```js
chrome.contextMenus.onClicked.addListener(
  (info: OnClickData, tab?: tabs.Tab)=> {}
)
```

## 方法

- create
```js
chrome.contextMenus.create(
  {
    // 可选参数
    checked: true, // 复选框或单选按钮的初始状态: 选中时为 true，未选中时为 false。
    contexts: ['page'], //此菜单项将出现在的上下文列表。默认为['page']
    documentUrlPatterns: [], // 限制指定url页面才会触发
    targetUrlPatterns: [],// 与 documentUrlPattern 类似，基于 img、 Audio 和 video 标记的 src 属性和标记的 href 属性的过滤器。
    enabled: true, //是否启用或禁用此上下文菜单项。默认为 true。
    id: '', // 给每一项菜单添加不同的id
    parentId: '', // 绑定到父级菜单,实现多级菜单
    title:'', // 菜单文案
    type: '', // 菜单项类型,同ItemType
    visible: '', // 该项是否在菜单中可见
    onclick: (info: OnClickData, tab: Tab) => {

    }
  },
  (id) => {

  }
)
```

- remove
```js
chrome.contextMenus.remove(
  menuItemId: string | number, // 指定菜单项id
  callback?: function,
)
```

- removeAll
```js
chrome.contextMenus.remove(
  callback?: function,
)
```

- update
```js
chrome.contextMenus.update(
  id: string | number,
  updateProperties: object,
  callback?: function,
)
```