## inquirer
实现在命令行终端与用户进行一些问答交互

### 安装和使用
```shell
npm install inquirer
```

```js
const inquirer = require('inquirer')

inquirer
  .prompt([
    /* 要询问的问题清单 */
  ])
  .then((answers) => {
    // 成功结果回调
  })
  .catch((error) => {
     // 失败回调
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })
```

## 基本配置
::: tip
更多配置请看[官网](https://github.com/SBoudrias/Inquirer.js)
:::
- `type`:类型（`input`, `number`, `confirm`, `list`, `rawlist`, `expand`, `checkbox`, `password`, `editor`）
- `name`:名称,用于解析参数时键值对应
- `message`:询问的信息
- `default`:默认值
- `choices`:定义一个选择数组
- `validate`:验证函数,当返回true时验证通过且继续执行
- `filter`:对输入的值进行过滤处理
- `transformer`:接收用户输入,并将转换后的值显示给用户
- `when`:当满足条件时展示这个问题
- `pageSize`: 分页数量，`list, rawList, expand or checkbox`可用
- `prefix`:前缀
- `suffix `:后缀
- `askAnswered `:如果答案已经存在，则强制提示问题
- `loop `:启用列表循环,默认值`true`

## 输入框
```js
const inquirer = require('inquirer')
let question = [{
  type: 'input',
  name: 'input',
  message: '请输入一些信息',
  default: 'hello every'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer1.png)

## 数字输入框
类似input，但是只接受数字

```js
const inquirer = require('inquirer')
let question = [{
  type: 'number',
  name: 'input',
  message: '请输入一些信息',
  // default: 'hello every'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer2.png)

## 单选
```js
const inquirer = require('inquirer')
let question = [{
  type: 'list',
  name: 'list',
  message: '这是一个列表',
  choices: ['vue', 'vite', 'react'],
  default: 'vite'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer3.png)

## 确认框
```js
const inquirer = require('inquirer')
let question = [{
  type: 'confirm',
  name: 'confirm',
  message: '你很帅'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer4.png)

## 多选
```js
const inquirer = require('inquirer')
let question = [{
  type: 'checkbox',
  name: 'checkbox',
  choices: ['vue', 'vite', 'react'],
  message: '请选择项目'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer5.png)

## 格式化的list
```js
const inquirer = require('inquirer')
let question = [{
  type: 'rawlist',
  name: 'rawlist',
  choices: ['vue', 'vite', 'react'],
  message: '请选择一个项目'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer6.png)

## 使用key定义的简称进行列表选择
```js
const inquirer = require('inquirer')
let question = [{
    type: 'expand',
    name: 'expand',
    choices: [
      {
        name: 'vue',
        value: 'vue',
        key: 'a'
      },
      {
        name: 'vite',
        value: 'vite',
        key: 'b'
      },
      {
        name: 'react',
        value: 'react',
        key: 'c'
      }
    ],
    message: '请选择一个项目'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer7.png)

## 密码框
```js
const inquirer = require('inquirer')
let question = [{
  type: 'password',
  name: 'password',
  message: '请输入密码'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer8.png)

## 多行文本框
> 注意：会打开命令行默认的编辑器
```js
const inquirer = require('inquirer')
let question = [{
  type: 'editor',
  name: 'editor',
  message: '请输入一些信息'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer9.png)

## 前缀和后缀
```js
const inquirer = require('inquirer')
let question = [{
  type: 'confirm',
  name: 'confirm',
  message: '你很帅',
  prefix: 'i think',
  suffix: 'really'
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer10.png)

## choices
```js
{
  name : "vue", // 名称
  value: 'vue', // 值
  key: 'v',     // expand时用到的值
  checked: true,// 是否勾选
},
new inquirer.Separator("--- 分隔符 ---"), // 自定义配置分隔符
```

## validate
```js
const inquirer = require('inquirer')
let question = [{
  type: 'input',
  name: 'input',
  message: '请输入一些信息',
  validate: (val)=> {
    return val === 'hello' ? '你不能输入hello' : true
  }
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer11.png)

## pagesize
```js
const inquirer = require('inquirer')
let question = [{
  type:"checkbox",
  message:"选择一至多种颜色：",
  name:"color",
  choices:[
      "red",
      "blue",
      "green",
      "pink",
      "orange"
  ],
  pageSize:2
}]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer12.png)

## when
```js
const inquirer = require('inquirer')
let question = [
  {
    type: 'confirm',
    name: 'one',
    message: '第一个问题'
  },
  {
    type: 'confirm',
    name: 'two',
    message: '第二个问题',
    when: (answers)=> {
      return answers.one
    }
  },
]

inquirer.prompt(question).then((answers) => {
  console.log(answers)
})
```
![](/img/inquirer13.png)


## 进行多次不同的问题清单
```js
var prompt1 =  inquirer.createPromptModule()
var prompt2 =  inquirer.createPromptModule()

prompt1(questions).then(/* ... */)
prompt2(questions).then(/* ... */)
```