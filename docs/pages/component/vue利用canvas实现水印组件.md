## 概述
前端水印方案对某个容器内的元素上面添加水印标识常用的方式有两种
- 1.使用多个div铺满整个容器，每个div内加载一段水印文字
- 2.使用图片的`background-repeat`属性时单张水印图片铺满全屏

![](/img/waterMask.png)

## 准备阶段
利用canvas生成图片的base64字符串
```js
canvas.toDataURL('image/png')
```

canvas绘制水印文字
```js
// 把传进来的配置项与默认配置合并
const { width, height, text, font, color, rotate } = Object(this.vmOptions, this.option)

const canvas = document.createElement('canvas')
canvas.width = width
canvas.height = height
const ctx = canvas.getContext('2d')

// 由于canvas的选择是以(0,0)为旋转中心,因此这里需要
// 1.先把(0,0)平移到画布中心位置
// 2.进行旋转
// 3.反向平移使原来的中心还是在中心位置
ctx.translate(width / 2, height / 2)
ctx.rotate(-rotate * Math.PI / 180)
ctx.translate(-width / 2, -height / 2)

// 绘制文字
ctx.textAlign = 'center'
ctx.textBaseline = 'middle'
ctx.fillStyle = color
ctx.font = font
ctx.fillText(text, width / 2, height / 2)

// 获取base64字符串
this.src = this.canvasToBase64(canvas)
```

水印容器的宽高需要设置成自适应大小
```css
width: max-content;
height: max-content;
```

水印图片需要设置鼠标事件穿透
```css
pointer-events: none;
```

## 完整的vue组件
```html
<template>
  <div class="waterMask">
    <slot></slot>
    <div class="mask" :style="{'background-image': `url(${src})`}"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      vmOptions: {
        // 单个水印文字块的字体颜色、宽、高、旋转角度
        width: 100,
        height: 100,
        color: 'red',
        rotate: 30,
        text: '测试水印',
        font: '12px serif'
      },
      src: ''
    }
  },
  props: {
    option: {
      type: Object,
      default: () => { }
    }
  },
  mounted () {
    this.initCanvas()
  },
  methods: {
    initCanvas () {
      const { width, height, text, font, color, rotate } = Object(this.vmOptions, this.option)
      console.log({ width, height, text, font, color, rotate })
      const canvas = document.createElement('canvas')
      canvas.width = width
      canvas.height = height

      const ctx = canvas.getContext('2d')
      ctx.translate(width / 2, height / 2)
      ctx.rotate(-rotate * Math.PI / 180)
      ctx.translate(-width / 2, -height / 2)

      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = color
      ctx.font = font
      ctx.fillText(text, width / 2, height / 2)

      this.src = this.canvasToBase64(canvas)
    },
    canvasToBase64 (canvas) {
      return canvas.toDataURL('image/png')
    }
  }
}
</script>
<style scoped>
.waterMask {
  position: relative;
  width: max-content;
  height: max-content;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  pointer-events: none;
  background-repeat: repeat;
}
</style>
```