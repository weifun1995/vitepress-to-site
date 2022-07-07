## shell
在node环境中执行脚本语句

:::tip
更多配置请看[官网](https://github.com/shelljs/shelljs)
:::

## 安装和使用
```shell
npm install shelljs
```
``` js
const shell = require(shell)

shell.exec('npm install')
```

## 是否有指定环境
 在环境变量PATH中寻找指定命令的地址，判断该命令是否可执行，返回该命令的绝对地址

```js
if (!shell.which('git')) {
  shell.echo('Sorry, this script requires git');
  shell.exit(1);
}
```

## 输出
 在终端输出信息
```js
shell.echo('hello world')

// 把信息写到index.txt，会覆盖原信息，无则创建文件
shell.echo('hello world').to(index.txt)
```

## 退出当前进程
 `.exit(code?)`退出码为code退出当前进程


## 删除文件
 `.rm(options?, file?...)`删除一个目录中一个或多个文件或目录，一旦删除，无法恢复。

- `-f`: 强制删除文件;
- `-i`: 删除之前先询问用户;
- `-r`: 递归处理目录;
- `-v`: 显示处理过程;

```js
shell.rm('-rf', index.txt)
```

## 复制文件
 `.cp(options, source_array, source_target)`用来将一个或多个源文件或目录复制到指定的文件或目录

- `-f`: 强制（默认行为）
- `-L`: 跟随符号链接
- `-r, -R`,: 递归的
- `-n`: 无撞击
- `-u`: 仅当源文件比目标文件更新时才进行复制
- `-P`: 不要跟随符号链接

```js
shell.cp('-f', [`index.txt`], './docs')
```


## 切换工作目录
`.cd(url)`切换工作目录至指定的相对路径或绝对路径。cd..为返回上一级，cd-回到前一目录。

```js
shell.cd('..')
```

## 返回文件ShellString
 返回一个包含给定文件的`ShellString`，如果给出多个文件，则返回一个包含文件的串联字符串（在每个文件之间引入一个换行符）
 
- `-n`: 显示行号
```js
var str = shell.cat('-n', ['demo.html', 'package.json'])
shell.echo(str)
```
![](/md/shell-cat.png)

## 内容替换
`.sed([options,] search_regex, replacement, file_array)` 将file_array中符合search_regex的内容替换为replacement，支持正则的捕获组自引用。一次处理一行内容，处理完成后把缓冲区内容送往屏幕，然后处理下一行，循环直至结束。

- `-i`:直接作用源文件

## 显示目标列表
- `-a`: 显示所有文件;
- `-C`: 多列显示查询结果;
- `-l`: 单列长格式显示查询结果(与-C相反);
- `-R`: 递归处理目录;
- `-A`：所有文件（包括开头的文件.，除了.和..）
- `-d`：列出目录本身，而不是其内容
- 
```js
ls = shell.ls('-A', 'docs')

shell.echo(ls)
```

## 设置文件权限
 设置文件调用权限,`u`表示该文件拥有者，`g`表示同一群体者，`o`表示其他，`a`表示所有`+`表示增加权限，`-`表示取消权限，`=`表示唯一设定权限`r`表示可读，`w`表示可写，`x`表示可执行，`X`表示当该文件是个子目录

- `-c`：为处理的每个文件输出一个诊断为处理的每个文件输出一个诊断
- `-v`: 类似于冗长，但仅在进行更改时报告
- `-R`: 递归地更改文件和目录

```js
shell.chmod(755, '/Users/brandon');
shell.chmod('755', '/Users/brandon'); // same as above
shell.chmod('u+x', '/Users/brandon');
shell.chmod('-R', 'a-w', '/Users/brandon');
```

## 向堆栈添加目录
`.pushd([options，] [dir |'-N'|'+ N'])`

- `-n`：在向堆栈添加目录时禁止正常更改目录，以便仅操作堆栈
- `-q`: 禁止输出到控制台。

- `dir`: 将当前工作目录设置为栈顶，然后执行cd dir.
- `+N`：通过旋转堆栈将第 N 个目录（从 dirs 打印的列表的左侧开始计数，从零开始）到列表顶部。
- `-N`：通过旋转堆栈将第 N 个目录（从 dirs 打印的列表的右侧开始计数，从零开始）到列表顶部。
- 
```js
// process.cwd() === '/usr'
shell.pushd('/etc'); // Returns /etc /usr
shell.pushd('+1');   // Returns /usr /etc
```

## 从堆栈中删除目录
`.popd([options，] [' - N'|'+ N'])`

- `-n`：从堆栈中删除目录时禁止正常更改目录，以便仅操作堆栈
- `-q`: 禁止输出到控制台。

```js
shell.echo(process.cwd()); // '/usr'
shell.pushd('/etc');       // '/etc /usr'
shell.echo(process.cwd()); // '/etc'
shell.popd();              // '/usr'
shell.echo(process.cwd()); // '/usr'
```

## 清除目录堆栈
`.dirs([options |'+ N'|'-N'])`

- `-c`：通过删除所有元素清除目录堆栈
- `-q`: 禁止输出到控制台。

- `+N`：显示第N个目录（从没有选项调用时由dirs打印的列表左侧开始计数），从零开始
- `-N`：显示第N个目录（从没有选项调用时由dirs打印的列表右侧开始计数），从零开始


## 查找文件
`.find(path [，path ...]) `查找文件,返回文件列表

```js
a = shell.find('docs')
shell.echo(a)
```

## 查找内容
`.grep([options，] regex_filter，file [，file ...])`不同于fing查找文件，grep用于查找内容

- `-v`：反转regex_filter（仅打印不匹配的行）。
- `-l`：仅打印匹配文件的文件名。
- `-i`: 忽略大小写。
- `-n`：打印行号。

```js
grep ( '-v' ,  'GLOBAL_VARIABLE' ,  '*.js' ) ; 
grep ( 'GLOBAL_VARIABLE' ,  '*.js' ) ;
```

## 读取文件的开头
`.head([{' - n'：}，] file [，file ...])`

- `-n` ：显示文件的开头几行

```js
var str = shell.head({'-n': 1}, 'file*.txt')
```

## 读取文件的结尾
`.tail([{' - n'：}，] file [，file ...])`

- `-n` ：显示文件的最后几行

```js
var str = shell.tail({'-n': 1}, 'file*.txt')
```

## 创建链接
`ln([options,] source, dest)`

- `-s`: 符号链接
- `-f`: 强制

```js
shell.ln('file', 'newlink');
shell.ln('-sf', 'file', 'existing');
```

##  创建文件夹
`.mkdir([options，] dir [，dir ...])`

- `-p`：完整路径(如有必要，将创建中间目录)

```js
shell.mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
```

## 创建文件
`.touch([options，] dir [，dir ...])`

- `-a`：仅更改访问时间
- `-c`：不要创建任何文件
- `-m`：仅更改修改时间
- `{'-d': someDate}` DATE:指定时间
- `{'-r': file}` FILE:用FILE的时间替代新文件时间

```js
shell.touch('source.js');
shell.touch('-c', 'path/to/file.js');
shell.touch({ '-r': 'referenceFile.txt' }, 'path/to/file.js');
shell.touch({ date: new Date('December 17, 1995 03:24:00') }, 'path/to/file.js');
```

## 移动文件
`.mv([options ,] source_array, dest')`

- `-f`：force（默认行为）
- `-n`：no-clobber

```js
shell.mv('-n', 'file', 'dir/');
shell.mv('file1', 'file2', 'dir/');
shell.mv(['file1', 'file2'], 'dir/'); // same as above
```

## 查看当前路径
`shell.pwd()`

## 设置全局配置变量
`.set(options?)`

- `+/-e`：出错时退出（config.fatal）
- `+/-v`：verbose：show all commands（config.verbose）
- `+/-f`：禁用文件名扩展（globbing）
```js
shell.set('-e'); // exit upon first error
shell.set('+e'); // this undoes a "set('-e')"
```

## 内容排序
`.sort([options,] file_array)`内容排序，返回文件的内容，逐行排序。排序多个

- `-r`：反转比较结果
- `-n`：根据数值比较

```js
shell.sort('foo.txt', 'bar.txt');
shell.sort('-r', 'foo.txt');
```

## 文件类型判断
`.test(expression) `

- `'-b', 'path'`：如果path是块设备，则为true
- `'-c', 'path'`：如果path是字符设备，则为true
- `'-d', 'path'`：如果path是目录，则为true
- `'-e', 'path'`：如果路径存在，则为true
- `'-f', 'path'`：如果path是常规文件，则为true
- `'-L', 'path'`：如果path是符号链接，则为true
- `'-p', 'path'`：如果path是管道（FIFO），则为true
- `'-S', 'path'`：如果path是套接字，则为true

```js
if (shell.test('-d', path)) { /* do something with dir */ };
if (!shell.test('-f', path)) continue; // skip if it's not a regular file
```

## 执行命令
`.exec(command [, options] [, callback])`

参数为对象形式：
- `async`: 是否异步执行,默认false，传入callback时自动开启
- `fatal`: 出错时退出（默认值：false）
- `slient`: 不输出信息到console,默认false
- `encoding`: 字符编码,默认utf8

```js
var child = exec('npm install', {async:true, slient: true})
```
