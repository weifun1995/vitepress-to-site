## 原理
svg描边动画,通过更改虚线的起始偏移量从0到虚线的一个长度的倍数,可以实现虚线流动的效果

## 使用到的属性

`stroke-dasharray`: 设置虚线的间隔

`stroke-dashoffset`: 设置虚线起点偏移量


```html
<svg width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
  <polyline
    points="50,50 200,150 300,150 400,50"
    class="line"
    style="fill: none; stroke: black; stroke-width: 1"
  ></polyline>
</svg>
```

```css
.line {
  stroke-dasharray: 5;
  animation: move linear 2s infinite;
}

@keyframes move {
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 50;
  }
}
```

## 展示
<iframe height="300" style="width: 100%;" scrolling="no" title="svg流动的虚线" src="https://codepen.io/weifun1995/embed/yLKLWjO?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/weifun1995/pen/yLKLWjO">
  svg流动的虚线</a> by weifun1995 (<a href="https://codepen.io/weifun1995">@weifun1995</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

加大虚线距离我们可以实现更酷炫的动画
![](/img/miaobian.gif)
