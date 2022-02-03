<template>
  <div class="container">
    <div style="padding: 30px">
      <a-card title="注册" :bordered="true">
        <a-form
          ref="formRef"
          class="login"
          layout="horizontal"
          :model="formState"
          @finish="handleFinish"
          :rules="rules"
        >
          <a-form-item name="username">
            <a-input v-model:value="formState.username" placeholder="用户名">
              <template #prefix
                ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item name="password">
            <a-input
              v-model:value="formState.password"
              type="password"
              placeholder="密码"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item name="passwordRepeat">
            <a-input
              v-model:value="formState.passwordRepeat"
              type="password"
              placeholder="重复输入密码"
            >
              <template #prefix
                ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
              /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> 注册 </a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </div>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface'
import { message } from 'ant-design-vue'
import { defineComponent, reactive, ref, toRaw, UnwrapRef } from 'vue'
import rules from '@/config/rules/login'
import { useRouter } from 'vue-router'
import { RegisterData } from '@/api/register/types'
import { register } from '@/api/register/register'
export default defineComponent({
  setup() {
    const router = useRouter()
    const formRef = ref()
    const formState: UnwrapRef<RegisterData> = reactive({
      username: '',
      password: '',
      passwordRepeat: ''
    })
    // 登录的回调
    const handleFinish = () => {
      formRef.value
        .validate()
        .then(async () => {
          if (formState.password !== formState.passwordRepeat) {
            message.error('两次密码不一致')
            return
          }
          console.log('values', formState, toRaw(formState))
          await register(toRaw(formState))
          message.success('注册成功')
          router.replace({ path: '/login' })
        })
        .catch((error: ValidateErrorEntity<RegisterData>) => {
          console.log('error', error)
          message.error('注册失败')
        })
    }

    return {
      formRef,
      formState,
      handleFinish,
      rules
    }
  },
  components: {
    UserOutlined,
    LockOutlined
  }
})
</script>

<style lang="less" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.login {
  width: 400px;
  height: 200px;
}
</style>
