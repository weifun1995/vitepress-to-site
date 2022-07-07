## chrome.action 
- onClicked:action被点击时触发
```js
chrome.action.onClicked.addListener(
  (tab)=> {}
)
```

- getUserSettings:返回与扩展的操作相关的用户指定的设置。
```js
chrome.action.getUserSettings(
  callback?: (userSettings) => {},
)
```

- openPopup:指定打开弹出窗口的选项。
```js
chrome.action.openPopup(
  options?: OpenPopupOptions,
  callback?: () => {},
)
```

- setIcon 设置静态图标

```js
chrome.action.setIcon(
  {
    imageData: '', // ImageData 对象
    path: '', // 相对图像路径
    tabId: ''
  },
  () => { /* ... */ })
```

- setTitle 设置标题
```js
chrome.action.getPopup(
  {
    tabId： '',
    title: ''
  },
  callback?: ()=> {},
)
```

- getTitle
```js
chrome.action.getPopup(
  details: TabDetails,
  callback?: (result)=> {},
)
```

```js
chrome.action.setTitle()
```

- setBadgeBackgroundColor 设置徽章颜色
```js
chrome.action.setBadgeBackgroundColor(
  {
    color: '', // 由范围[0,255]内的四个整数组成的数组，它们组成徽章的 RGBA 颜色。例如，不透明红色是[255,0,0,255]。也可以是具有 CSS 值的字符串，不透明红色为 # FF0000或 # F00。
    tabId: ''
  },
  callback?: function,
)
```

- getBadgeBackgroundColor 获取徽章颜色
``` js
chrome.action.getBadgeBackgroundColor(
  details: TabDetails,
  callback?: (color) => {},
)
```

- setBadgeText 设置徽章文本
```js
chrome.action.setBadgeText(
    {
        text: '文本',
        tabId: 'tabId',
    },
    () => { ... }
)
```

- getBadgeText 获取徽章文本
```js
chrome.action.getBadgeText(
  details: TabDetails,
  callback?: (text) => {},
)
```

- setPopup 更改popup弹框页面
```js
chrome.action.setPopup()
```

- getPopup
```js
chrome.action.getPopup(
  details: TabDetails,
  callback?: (result)=> {},
)
```

- 是否启用:影响弹出窗口（如果有）或action.onClicked事件是否被分派到您的扩展程序
```js
chrome.action.enable(
  tabId?: number,
  callback?: function,
)

chrome.action.disable(
  tabId?: number,
  callback?: function,
)
```

