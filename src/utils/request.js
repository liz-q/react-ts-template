import axios from 'axios'

const request = function (url, options) {
  const method = (options && options.method) || 'get'

  const mergeOptions = {
    ...options,
    url,
    baseURL: '/api',
    method
  }
  return axios(mergeOptions)
}

axios.interceptors.response.use(
  res => {
    if (res && res.status === 200) {
      return res.data
    }
  },
  err => {
    return Promise.reject(err)
  }
)

export default request
