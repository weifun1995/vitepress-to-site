## 安装
```bash
npm install axios -S
npm install qs -S
```

- qs
``` js
qs.stringify(params)
// { id: 12345, age: 18 } 序列化为 id=12345&age=18
```

## 常用配置
```js
import axios from 'axios'

// 设置超时时间（ms）
axios.defaults.timeout = 50000
axios.defaults.baseURL = ''

// http request 拦截器
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response) {
      
    }
    return response
  },
  error => {
    if (error.response) {
      //   对请求失败做统一处理
      switch (error.response.status) {
        case 400:
          Message.error(error.response.data)
          break
        case 500:
          Message.error(error.response.data)
          break      
      }
    }
    return Promise.reject(error)
  }
)

export default axios
```