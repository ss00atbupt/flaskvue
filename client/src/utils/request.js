import axios from 'axios'
import { Message } from 'element-ui'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: process.env.NODE_ENV === 'development' ? 200000 : 60000 // 请求超时时间
})

// const requests = axios.create({
//     // 配置对象
//     // 基础路径，发请求的时候
//     baseURL: 'http://myurl.com',
//     // 代表请求超时的时间5s
//     timeput:5000,
// })
//
// // 对外暴露
// export default requests;

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      return res
    } else {
      Message({
        message: res.msg || 'Error',
        type: 'error',
        duration: 5 * 1000
      })
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
