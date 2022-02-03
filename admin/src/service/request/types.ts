import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface baseResult<T = any> {
  data: T
  message: string
  statusCode: number
}

export type Response<baseResult> = AxiosResponse<baseResult, any>['data']

interface IInterceptors {
  requestInterceptors: (option: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors: (option: AxiosResponse) => Response<any>
  responseInterceptorsCatch?: (err: any) => any
}

export { IInterceptors }
