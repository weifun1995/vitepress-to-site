## 准备
`beginPath`开始一段绘制,`closePath`结束一段绘制;配合多次使用可以使每次绘制都是独立的

`strokeStyle`描边颜色,`lineWidth`描边宽度,`stroke-linecap`设置描边线段的圆角类型,最后调用`stroke()`使描边线段显示出来

`arc(x,y,r,start,length)`绘制环形参数分别为圆点坐标、 半径 、起点偏移弧度、 绘制弧度

`font`设置字体样式,`textAlign`文字左右居中样式,`textBaseline`文字上下居中样式,`fillStyle`文字填充颜色,`fillText(text,x,y)`文字和起点坐标

`translate(x,y)`平移画布的中心位置,`rotate(deg)`旋转的幅度

:::warning
绘制第二段弧形时,由于已经平移了画布圆点到圆形的中心位置,所以此时绘制圆形的中心坐标已经变为了`(0,0)`
:::

## 实现

```js {27-29}
var myCanvas = document.querySelector("canvas")
var ctx = myCanvas.getContext("2d")
let num = 50
let R = 100
let { width, height } = myCanvas
// 开始一段绘制
ctx.beginPath()
// 圆点坐标 半径 起点偏移弧度(这里设置为0) 绘制弧度
ctx.strokeStyle = "#ccc"
ctx.lineWidth = 8
ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2)
ctx.stroke()

ctx.font = "40px 微软雅黑"
ctx.textAlign = "center"
ctx.textBaseline = "middle"
ctx.fillStyle = "#000"
let str = `${num} %`
ctx.fillText(str, width / 2, height / 2)
ctx.closePath()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.lineWidth = 8

// 保证起点在圆环顶点位置
ctx.translate(width / 2, height / 2)
ctx.rotate(-Math.PI / 2)
ctx.arc(0, 0, 100, 0, Math.PI * 2 * (num / 100))

ctx.stroke()
ctx.closePath()

```
<iframe height="300" style="width: 100%;" scrolling="no" title="canvas实现饼图" src="https://codepen.io/weifun1995/embed/rNdNgQm?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/weifun1995/pen/rNdNgQm">
  canvas实现饼图</a> by weifun1995 (<a href="https://codepen.io/weifun1995">@weifun1995</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>