## 开始
- 使用`pnpm init`初始化一个项目
- 创建`pnpm-workspace.yaml`文件
```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

## 安装依赖
此时子项目安装的依赖会安装在monorepe项目的`node_modules`下,工作区间项目的`node_modules`存放的是软链接指向monorepe
![](/img/monorepe1.png)

## 工作区间项目互相引用
```js
{
    "dependencies": {
        "foo": "workspace:*",
        "bar": "workspace:~",
        "qar": "workspace:^",
        "zoo": "workspace:^1.5.0"
    }
}

// 假定当前版本为1.5.0,转换如下
{
    "dependencies": {
        "foo": "1.5.0",
        "bar": "~1.5.0",
        "qar": "^1.5.0",
        "zoo": "^1.5.0"
    }
}
```

:::warning 注意
如果app2引入了app1,此时需要在app2项目执行 ```pnpm i``` 引入依赖,且此时使用的软链接的方式指向app1的打包产物,如果被删除会导致app2依赖运行报错
:::
![](/img/monorepe2.png)


## 常用命令
```shell

# -r 工作区的每个项目都安装特定包, -D 表示开发依赖
pnpm add 依赖包 -r -D
如:
pnpm add axios -r -D

# --filter (or -F) 在根目录执行工作区间子项目的命令
pnpm -F 项目名 命令
如:
pnpm -F app1 dev

```