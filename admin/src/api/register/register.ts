import { api } from '@/service'
import { RegisterData, RegisterResult, registerAPI } from '@/api/register/types'
import { baseResult, Response } from '@/service/request/types'

export function register(
  registerData: RegisterData
): Promise<Response<baseResult<RegisterResult>>> {
  return api.post({
    url: registerAPI.register,
    data: { ...registerData }
  })
}
