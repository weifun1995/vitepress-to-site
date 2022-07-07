## 实现

- `cx,cy`原点坐标
- `r`半径
- `fill`填充背景色
- `stroke`描边颜色
- `stroke-width`描边宽度
- `stroke-dasharray`以虚线的形式将描边分成多段。
 `stroke-dasharray:20 10`的意思是，每段的宽度是`20`，段与段之间的间隔是`10`。
- `stroke-dashoffset`线段起始位置的偏移量

:::tip
实现环形图第一步设置圆环的路径为虚线段,虚假之间的间隔大于圆环的周长,0%时刻起始偏移量为周长长度，100%时刻起始偏移量为0
:::

```html
<svg xmlns="http://www.w3.org/2000/svg"  width="100" height="100" >
    <circle
        id="svgBar"
        cx="50" 
        cy="50"
        r="40"
        fill="none"
        stroke="#fcb718"
        stroke-width="5px"
     ></circle>
</svg>
```

```js
function initChart (num) {
  let dom = document.querySelector('#svgBar')
  let r = 40
  let length = 2 * Math.PI * r
  // 圆形绘画的起点不是上顶点，因此需要进行旋转
  dom.style['transform-origin'] = 'center center'
  dom.style['transform'] = 'rotate(-90deg)'
  dom.style['stroke-dasharray'] = length
  dom.style['stroke-dashoffset'] = length *((100 - num)/100)
}

initChart(80)
```
<iframe height="300" style="width: 100%;" scrolling="no" title="svg实现饼图" src="https://codepen.io/weifun1995/embed/MWVWdPb?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/weifun1995/pen/MWVWdPb">
  svg实现饼图</a> by weifun1995 (<a href="https://codepen.io/weifun1995">@weifun1995</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

## 完善tips
- 再次绘画一个浅色的圆形作为底图对比比较直观
- 使用`defs`定义一个渐变色路径,设置一个id值,环形图的`stroke`通过`use`引入id
