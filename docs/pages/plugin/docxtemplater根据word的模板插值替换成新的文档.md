## 介绍
提供一个word模板,使用docxtemplater插件可以把模板中的约定变量进行替换得到新的word文件

![](/img/docxtemplater1.png)

## 使用

```js
import Docxtemplater from "docxtemplater"
import PizZip from "pizzip"
import PizZipUtils from "pizzip/utils/index.js"
import { saveAs } from "file-saver"

function loadFile (url, callback) {
  PizZipUtils.getBinaryContent(url, callback);
}

const doDownload = () => {
  loadFile(
    "./demo.docx",
    function (error, content) {
      if (error) {
        throw error
      }

      const zip = new PizZip(content)
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      })

      // 渲染插槽
      doc.render({
        name: "wei",
        sex: "男孩子",
        age: "18",
        hobby: "女孩子"
      });

      const out = doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      });
      // Output the document using Data-URI
      saveAs(out, "out.docx");
    }
  )
}
```



## 结果

![](/img/docxtemplater2.png)

