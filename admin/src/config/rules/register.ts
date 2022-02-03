const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    { min: 3, max: 10, message: '用户名长度在3到10位', trigger: 'blur' }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ],
  passwordRepeat: [
    {
      required: true,
      message: '请重复输入密码',
      trigger: 'blur'
    }
  ]
}

export default rules
