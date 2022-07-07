## xlsx
[js-xlsx](https://github.com/SheetJS/sheetjs)是shelljs提出的社区版开源解决方案,用于excel文件的读取和生成。

## 安装和使用
``` bash
npm i xlsx
```

```js
import * as XLSX from 'xlsx'
```
![](/img/xlsx1.png)

## 读取本地excel

使用如下数据模板
![](/img/xlsx2.png)

- 网页定义一个上传按钮
- 使用`fileReader`类获取文件的二进制数据
- XLSX.read(二进制数据, { type: 'binary'}) xlsx读取数据,`binary`指定类型为二进制
- XLSX.utils.sheet_to_json 使用工具内把读取的表格数据转换成json格式
```js
function doUpload (e) {
  let dom = document.querySelector('#file')
  let fileList = dom.files
  let file = fileList[0]

  let fileReader = new FileReader()

  fileReader.onload = function (e) {
    let text = e.target.result

    let excelData = XLSX.read(text, { type: 'binary'})

    let data = XLSX.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[0]])
  }

  // 以二进制方式读取文件
  fileReader.readAsBinaryString(file) 
}
```

![](/img/xlsx3.png)

:::tip
XLSX.utils.sheet_to_json有第二个可选参数,其中有五个配置项
```js
{
    header: 1, // 转换输出格式,此时数组第一项为表头
    defval: '' // 数据为空的是显示的默认字符串
}
```
:::

- XLSX.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[0]], {header: 1})

![](/img/xlsx4.png)

- XLSX.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[0]], {header: 1, defval: ''})

![](/img/xlsx5.png)

## 读取远程excel

网络请求时`responseType`指定数据的返回类型,xlsx解析数据的时候也给定指定类型
```js
axios.get('/src/assets/demo.xlsx', {responseType: 'arraybuffer'})
  .then(res =>{
    console.log(res)

    let excelData = XLSX.read(res.data, { type: 'array'})

    console.log({excelData})


    let data = XLSX.utils.sheet_to_json(excelData.Sheets[excelData.SheetNames[0]],  {header: 1, defval: ''})
     })
```

## 导出excel

```js
let jsonData = [
  {
    '角色': '法师',
    '武器': '法杖'
  },
  {
    '角色': '战士',
    '武器': '拳套'
  }
]

function doExport () {
  // json转成每页sheet格式
  let sheet = XLSX.utils.json_to_sheet(jsonData)

  // 创建一个excel文件对象
  let allSheets = XLSX.utils.book_new()

  // 把创建的单个sheet添加到工作蒲中
  XLSX.utils.book_append_sheet(allSheets, sheet)

  // 调用写文件函数
  XLSX.writeFile(allSheets, 'export.xlsx')
}
```
![](/img/xlsx6.png)

<iframe height="300" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/weifun1995/embed/bGLPXOG?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/weifun1995/pen/bGLPXOG">
  Untitled</a> by weifun1995 (<a href="https://codepen.io/weifun1995">@weifun1995</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>