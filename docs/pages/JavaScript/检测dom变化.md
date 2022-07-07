---
name: MutationObserver
description: 现代浏览器提供的用来检测 DOM 变化的网页接口,来监听新增或者删除节点，属性更改，或者文本节点的内容更改
tag: JS
---

## 概述
[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)



实例对象拥有三个方法
- `observe`－开始进行监听。接收两个参数－要观察的 DOM 节点以及一个配置对象。
- `disconnect`－停止监听变化。
- `takeRecords`－触发回调前返回最新的批量 DOM 变化。


## 基本使用
```js
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback)

// 开始观察目标节点
observer.observe(documentElement, options)

// 完成操作后可手动停止观察
observer.disconnect()

observer.takeRecords()
```
`takeRecords`返回 其观察节点上的变化记录(MutationRecord)数组
其中MutationRecord数组也会作为，观察者初始化时的回调函数的第一个参数,其包含的属性如下：
> `type` 如果是属性发生变化,则返回attributes.如果是一个CharacterData节点发生变化,则返回characterData,如果是目标节点的某个子节点发生了变化,则返回childList.
> 
> `target` 返回此次变化影响到的节点,具体返回那种节点类型是根据type值的不同而不同的,如果type为attributes,则返回发生变化的属性节点所在的元素节点,如果type值为characterData,则返回发生变化的这个characterData节点.如果type为childList,则返回发生变化的子节点的父节点.
> 
> `addedNodes` 返回被添加的节点
> 
> `removedNodes` 返回被删除的节点
> 
> `previousSibling` 返回被添加或被删除的节点的前一个兄弟节点
> 
> `nextSibling` 返回被添加或被删除的节点的后一个兄弟节点
> 
> `attributeName` 返回变更属性的本地名称
> 
> `oldValue` 根据type值的不同,返回的值也会不同.如果type为attributes,则返回该属性变化之前的属性值.如果type为characterData,则返回该节点变化之前的文本数据.如果type为childList,则返回null


`options`, 观察器的配置（需要观察什么变动）
```js
{
  attributes: true, // 观察目标节点的属性节点(新增或删除了某个属性,以及某个属性的属性值发生了变化)。
  characterData: true, // 如果目标节点为characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)时,也要观察该节点的文本内容是否发生变化
  childList: true, // 观察目标节点的子节点的新增和删除
  subtree: true, // 观察目标节点的所有后代节点(观察目标节点所包含的整棵DOM树上的上述三种节点变化)
  attributeOldValue: true, // 在attributes属性已经设为true的前提下, 将发生变化的属性节点之前的属性值记录下来(记录到下面MutationRecord对象的oldValue属性中)
  characterDataOldValue：true,  // 在characterData属性已经设为true的前提下,将发生变化characterData节点之前的文本内容记录下来(记录到下面MutationRecord对象的oldValue属性中)
  attributeFilter: true // 个属性名数组(不需要指定命名空间),只有该数组中包含的属性名发生变化时才会被观察到,其他名称的属性发生变化后会被忽略想要设置那些删选参数的话，
}
```


## 实例
```html
<body>
  <div class="box" contenteditable>
    text
    <div>这是子元素</div>
  </div>
</body>
<script>
   const targetNode = document.querySelector('.box');

  let config = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
   }

  const callback = function(mutationsList, observer) {
    console.log('mutationsList', mutationsList)
  } 

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
</script>
```
