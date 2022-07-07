
## commanderJS
创建和解析类似git格式的命令行指令
:::tip
更多配置请看[官网](https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md#commanderjs)
:::

## 安装
```shell
npm install commander
```

## 简易使用
``` js
const { program } = require('commander')
program
      .version('0.0.1')
      // 默认传递的是process.argv
      .parse()
```

## 创建指令
形如`'短指令，长指令'， '指令的描述', '默认值'`

```js
program
  .option('-n, --name', 'this is a name')
```
![](/img/commander2.png)


## 解析输入
```js
program
  .option('-n, --name', 'this is a name')
  .option('-l, --love <value>', 'this is love')
  .option('-p, --pizza-type <type>', 'flavour of pizza', 'pizza')

program.parse(process.argv)
const options = program.opts()
console.log(options)
```
![](/img/commander2.png)

## 必填选项
通过`.requiredOption()`方法可以设置选项为必填。必填选项要么设有默认值，要么必须在命令行中输入，对应的属性字段在解析时必定会有赋值。该方法其余参数与`.option()`一致。
```js
program
  .option('-n, --number <numbers...>', 'specify numbers')
```

## 版本选项
`.version()`方法可以设置版本，其默认选项为`-V`和`--version`，设置了版本后，命令行会输出当前的版本号。
```js
// 简单
program.version('0.0.1')

// 自定义指令拓展，类似option()方法
program.version('0.0.1', '-v, --vers', 'output the current version');
```
