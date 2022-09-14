## 配置
设置 -> 配置用户代码片段 -> 新建全局代码片段文件

## vue代码片段
```json
"vue3 template": {
    // 指令
    "prefix": "vue3",
    // 生效文件
    "scope": "javascript,vue",
    // 代码片段
    "body": [
      "<template>",
      "    <div>",

      "    </div>",
      "</template>\n",
      "<script setup>",
      "import { ref } from \"vue\" ",

      "</script>\n",
      "<style lang=\"scss\" scoped>",
      
      "</style>"
    ],
    "description": "vue3 template"
  }
```