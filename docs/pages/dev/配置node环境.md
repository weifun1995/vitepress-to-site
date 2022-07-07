## nvm
::: tip
可以在本地安装多个node环境，并随时切换，[官方库](https://github.com/coreybutler/nvm-windows/releases)
:::

常用命令
```bash
# 查看本地已安装node列表
nvm list

# 查看可下载列表
nvm list available

# 安装
nvm uninstall <version>

# 卸载
nvm uninstall <version>
```

问题
::: warning
- 当本地使用nvm use命令出错时,需要注意给终端工具管理员权限
- 当使用命令行下载失败时,可以在node官网下载可解压版本放到nvm安装根目录下,注意解压后的文件夹名字格式为`v+版本号`
:::
![](/img/nvm.webp)


## pnpm
:::tip
速度快、节省磁盘空间的软件包管理器,[官网](https://www.pnpm.cn/)
:::

```bash
npm install -g pnpm
```

## 淘宝镜像
```bash
## 配置镜像源
npm config set registry https://registry.npm.taobao.org

## 或者安装阿里定制的cnpm命令行工具
npm install -g cnpm --registry=https://registry.npm.taobao.org
```