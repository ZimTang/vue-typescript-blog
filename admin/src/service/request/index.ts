import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IInterceptors, Response } from '@/service/request/types'

class HttpRequest {
  instance: AxiosInstance
  interceptors?: IInterceptors
  constructor(config: AxiosRequestConfig, interceptors: IInterceptors) {
    this.instance = axios.create(config)
    this.interceptors = interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )
  }

  request<T>(option: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    return new Promise((resolve, reject) => {
      this.instance
        .request({ ...option })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(option: AxiosRequestConfig): Promise<Response<T>> {
    return this.instance.request({ ...option, method: 'GET' })
  }

  post<T>(option: AxiosRequestConfig): Promise<Response<T>> {
    return this.instance.request({ ...option, method: 'POST' })
  }

  delete(option: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request({ ...option, method: 'DELETE' })
  }

  patch(option: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request({ ...option, method: 'PATCH' })
  }
}

export default HttpRequest
