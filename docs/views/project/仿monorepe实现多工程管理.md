## monorepe
monorepe通俗的理解是将多个工程代码放到同一个代码库进行管理。
- 利于同一项目的不同工程同一管理
- 公共代码更易于复用

## 目标

使用一个简单的vite脚手架项目实现monorepe
- 实现子项目统一存放在`packages`目录下
- 项目使用统一的`node_modules`
- 通过npm指令统一运行和打包项目
- 打包的输出文件统一存放到根目录下得`output`下

## 创建目录
viteapp1和viteapp1是一个完整的vite项目的src目录,此时去除了`package.json`和`vite.config.js`,并且复制`index.html`放到每个子项目下,修改`<script type="module" src="./main.js"></script>`指向子项目的`main.js`
```js
.
├── public
├── output
├── packages
│   ├── viteapp1
│   └── viteapp2
│ 
├── package.json
└── vite.config.js

```

## 定制npm命令
我们需要创建`npm run dev/build 子项目名称`实现项目的子运行和打包

```js
{
    "scripts": {
        "dev": "vite --",
        "build": "vite build --",
        "preview": "vite preview"
    },
}

```

## 修改vite配置
- 需要接收npm命令指定的子项目名称,并动态设置当前一些配置路径
- 需要判断子项目是否存在,给出友好提示

```js
{
    root: '', // 项目根目录（index.html 文件所在的位置）
    build: {
        outDir: '' // 打包后的路径
    }
}
```

## 完整配置
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs'

export default defineConfig(({mode}) => {
  
  let name = ''
  if (mode === 'development') { // npm run dev viteapp1
    name =  process.argv[3]
  } else if (mode === 'production') { // npm run build viteapp1
    name =  process.argv[4]
  }

  // 判断是否给点子项目名称
  if (!name) {
    console.log('请指定项目名称!!!')
    process.exit(0)
  }

  let root = process.cwd()
  let inputDir = `${root}/packages/${name}`
  let outputDir = `${root}/output/${name}`

   // 判断文件夹是否存在
  fs.exists(inputDir, (flag) => {
    if (!flag) {
      console.log('指定项目不存在!!!')
      process.exit(0)
    }
  })

  return {
    root: inputDir,
    build: {
      outDir: outputDir
    },
    plugins: [vue()]
  }
})

```

## 发现问题
- 多个项目使用同一个依赖库,存在项目依赖不同版本的情况

> 使用npm的别名依赖安装可是实现安装不同版本依赖
```bash
npm install <alias>@npm:<name>

# 如
npm install lodash@^4.0.0
npm install lodash-private@npm:lodash@3.0.0
```

- 一个配置文件驱动程序同一种项目类型

> 理论上我们可以配置npm命令实现驱动不同的配置文件,可以适配多个类型的脚手架项目
