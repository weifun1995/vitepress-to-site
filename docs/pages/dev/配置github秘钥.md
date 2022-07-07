## 配置用户名和邮箱

```bash
# 引号内输入自己的信息
git config --global user.name "用户名"
git config --global user.email "邮箱"
```


## 查看配置项是否成功

```bash
git config --list
```


## 命令生成公钥和私钥

```bash
ssh-keygen -t rsa -C "your_email@youremail.com"
```



## 在github网站配置ssh

![](/img/github_ssh.png)