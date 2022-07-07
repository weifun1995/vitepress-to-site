
在实际开发中，对文字的展示存在情况，当文字过长时显示省略号，鼠标移上去有提示信息显示全部文字，文字短时不做处理

## 思路
> 显示文字的宽度，当超过时显示`...`，配合第三方UI库，以elementUI为例
```css
width: 200px;
display: inline-block;
height: 30px;
white-space:nowrap;
overflow: hidden;
text-overflow: ellipsis;
```

```html
<el-tooltip
    class="box-item"
    :disabled="false"
    placement="top"
    effect="dark"
    content="这是一段文字信息"
  >
  <span class="tooltip_box">这是一段文字信息</span>
</el-tooltip>

<el-tooltip
    class="box-item"
    :disabled="false"
    placement="top"
    effect="dark"
    content="这是一段超超超超超超超超超长的文字信息"
  >
  <span class="tooltip_box">这是一段超超超超超超超超超长的文字信息</span>
</el-tooltip>
```
![](/img/tooltip1.png)

> 判定文字是否过长
```js
// 当滚动宽度 > 容器宽度时判定文字过长
dom.scrollWidth - dom.clientWidth > 0
```


## 分装成VUE组件
```html
<template>
  <el-tooltip :placement="placement"
              :disabled="disabled"
              :effect="effect"
              :content="content">
    <span class="tooltip_box"
          ref="tooltip_box"
          :style="{width: width + 'px'}"
          :class="className">{{content}}</span>
  </el-tooltip>
</template>
<script>
export default {
  props: {
    placement: {
      type: String,
      default: 'top'
    },
    effect: {
      type: String,
      default: 'dark'
    },
    className: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      disabled: true
    }
  },
  watch: {
    content: {
      handler: function () {
        this.$nextTick(()=> {
          let dom = this.$refs.tooltip_box
          console.log(dom.scrollWidth, dom.clientWidth)
          this.disabled = dom.scrollWidth === dom.clientWidth
        })
      }
    }
  },
  mounted() {
    let dom = this.$refs.tooltip_box
    console.log(dom.scrollWidth, dom.clientWidth)
    this.disabled = dom.scrollWidth === dom.clientWidth
  }
}
</script>
<style scoped>
.tooltip_box {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
```
