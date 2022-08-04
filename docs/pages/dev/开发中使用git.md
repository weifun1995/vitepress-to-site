## fork代码库
- 常用的开发模式是远程库不能直接提交,只能通过codehub等发起合并请求
- 我们需要自己fork一个仓库作为远程仓库

```sh {5,11,20}
# 本地初始化git仓库
git init

# 查看远程仓库配置信息
git remote -v

# 删除远程库origin
git remote rm origin 

# 添加fork库作为远程库origin
git remote add origin <your_Remote_Url>

# 直接修改远程库地址
git remote set-url origin newUrl

# 删除upstream上游库
git remote rm upstream 

# 添加upstream上游库
git remote add upstream <your_Remote_Url>

# 直接修改upstream上游库
git remote set-url upstream newUrl

# 从upstream更新fork
git fetch upstream
```

## 常用命令
```sh
# 查看文件状态
git status

# 所有文件提交到暂存区
git add .

# 提交
git commit -m '提交信息'

# 拉取
git pull <origin dev>

# 推送
git push <origin dev>

# 工作区修改的文件存起来
git stash
# 暂存列表
git stash list
# 取出第一个
git stash pop
# 取出指定项
git stash apply stash@{0}
# 清空所有
git stash clear
# 删除指定项
git stash drop stash@{0}

```

## 切换分支
```sh
git checkout -b <分支名>
```

## 本地回滚操作
- git log
显示最近三次提交

- git reflog
显示所有的操作记录

```sh
git reset [--soft | --mixed | --hard] [HEAD]
```

当我们撤回后强制推送到远程库分支,实现撤回错误提交到远程分支的代码
```sh
git push origin master --force
```
