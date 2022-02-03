import localCache from '@/util/localCache'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import HttpRequest from './request'

const api = new HttpRequest(
  {
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
  },
  {
    requestInterceptors(option: AxiosRequestConfig) {
      const token = localCache.getItem('token')
      if (token) {
        option.headers = {
          token
        }
      }
      return option
    },
    responseInterceptors(option: AxiosResponse) {
      return option.data
    }
  }
)

export { api }
