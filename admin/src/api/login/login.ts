import { baseResult } from '@/service/request/types'
import { api } from '@/service/index'
import { loginAPI, LoginData } from './types'
import { Response } from '@/service/request/types'
import { loginResult } from '@/api/login/types'

export function login(
  loginData: LoginData
): Promise<Response<baseResult<loginResult>>> {
  return api.post<Response<baseResult<loginResult>>>({
    url: loginAPI.login,
    data: {
      username: loginData.username,
      password: loginData.password
    }
  })
}
