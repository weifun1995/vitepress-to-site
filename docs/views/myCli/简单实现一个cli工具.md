## 功能
大致实现一个本地cli命令,执行时首先会询问我们要输入项目名称,然后在github上下载一份文件

## 初始化
先创建一个npm本地项目
```bash
npm init -y
```

自定义命令在`package.json`中添加`bin`字段指定各个内部命令对应的可执行文件的位置。
```json {}
{
  "name": "hello-cli",
  "version": "0.0.1",
  "description": "helloCli命令",
  "main": "index.js",
  "bin": {
    "helloCli": "bin/helloCli.js"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "weifun1995",
  "license": "ISC"
}

```

创建`bin/helloCli.js`文件,第一行指定运行环境为node

```bash
#!/usr/bin/env node
console.log('helloCli')
```

尝试执行`helloCli`命令会显示命令无效
![](/img/cli1.png)

此时我们需要执行`npm link`命令,使当前命令配置到全局环境中
![](/img/cli2.png)

## 命令
实现一些基本命令,如`helloCli -v`

```js
#!/usr/bin/env node
const program = require('commander')

program
    .option('-v, --version', 'output version')
    .option('-c, --create', 'create something')
    .parse()


const options = program.opts()

if (options.version) {
    console.log('this version is 1.0.0')
}

if (options.create) {
    console.log('进入创建')
}

```
![](/img/cli3.png)


## 交互
实现一个询问输入项目名称的交互

```js
const inquirer = require('inquirer')

if (options.create) {
    let question = [{
      type: 'input',
      name: 'projectName',
      message: '请输入项目名称',
      default: 'helloCli-project'
    }]
    
    inquirer.prompt(question).then((answers) => {
      console.log(answers)
    })
}

```
![](/img/cli4.png)

## 从github拉取代码
拉去的过程可能比较慢,`ora`可以在终端添加loading效果
```js
inquirer.prompt(question).then((answers) => {
      let projectName = answers.projectName
      downloadGitRepo('weifun1995/blog-by-vitepress', projectName, function (err) {
          console.log(err, err ? 'Error' : 'Success')
      })
  })
```
![](/img/cli5.png)