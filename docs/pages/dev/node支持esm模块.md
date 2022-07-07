---
name: node中使用esm模块
description: 
tag: 配置
---

## 简述
node发布`13.2.0`版本时宣布可以支持ES modules模块,但是仍有很多历史依赖使用的commandjs规范,在日常项目中使用的话,可能两种规范的包混合使用,会存在语法不支持的情况

## 使用

- 方法一

  创建`.mjs`的文件,可以写esm语法



- 方法二

  在项目的`package.json`中添加`type`字段

  ```json
  "type": "module"
  ```

  



## 注意

- 无法识别`require`
- 无法使用`__dirname`、`__filename`等关键字，可以使用`import.mate`获取文件元信息





## 项目中混用CommonJS 和ES Module

在node中

- `.mjs`文件使用的是ES Module规范
- `.cjs`文件使用的是CommonJS 规范



但是某些情况下面我们使用的依赖包有些是ES Module规范有些是CommonJS 规范，某种情况下我们需要去找同一个规范的版本包有些麻烦，甚至根本没有。在这个时候就需要混用两种模块

:::warning 注意

在esm下才能混用CommonJS 规范

:::

创建一个`plugin.cjs`

```js
const chalk = require('chalk') // 当前chalk包是CommonJS规范的

module.exports = { // 导出
  chalk: chalk
}
```



在`index.js`引入

```js
import plugin from "./plugin.cjs"

const {chalk} = plugin

console.log(chalk.blue.bgRed.bold('Hello world!'))
```

![](/img/cjs.png)