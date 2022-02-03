export enum loginAPI {
  login = '/users/login'
}

export interface loginResult {
  token: string
}

export interface LoginData {
  username: string
  password: string
}
