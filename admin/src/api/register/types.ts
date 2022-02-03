export enum registerAPI {
  register = '/users/register'
}

export interface RegisterData {
  username: string
  password: string
  passwordRepeat: string
}

export interface RegisterResult {
  id: number
  username: string
}
