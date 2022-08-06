## [URL](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/URL)
解析url所包含的一系列主机名、端口、域名等参数

url如果是相对路径,会拼接base定义的路径, 如果是绝对路径会忽略base参数
```js
const url = new URL(url [, base])
```
获取search上的值
```js
new URL('https://www.zhangxinxu.com/wordpress/?s=url').searchParams.get('s')
```

## [URLSearchParams](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)
URLSearchParams 接口定义了一些实用的方法来处理 URL 的查询字符串

```js
// 参数是url的search部分,可以没有?
let urlSearch = '?name=xx'
var searchParams = new URLSearchParams(urlSearch)
```

常用方法
``` js
// 向urlSearcht添加新的字符串
searchParams.append(name, value)

// 删除指定名称的所有搜索参数
searchParams.delete(name)

// 返回第一个与搜索参数对应的值
searchParams.get(name)

// 以数组的形式返回与指定搜索参数对应的所有值
searchParams.getAll(name)

// 指定的键名对应的值是否存在
searchParams.has(name)

// 如果设置前已经存在匹配的值，该方法会删除多余的，如果将要设置的值不存在，则创建它
searchParams.set(name)

// 返回适用在 URL 中的查询字符串
URLSearchParams.toString()
```
