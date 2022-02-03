<template>
  <div class="container">
    <div style="padding: 30px">
      <a-card title="登录" :bordered="true">
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
          <a-form-item>
            <a-button type="primary" html-type="submit"> 登录 </a-button>
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
import { defineComponent, reactive, ref, UnwrapRef } from 'vue'
import rules from '@/config/rules/login'
import localCache from '@/util/localCache'
import { LoginData } from '@/api/login/types'
import { login } from '@/api/login/login'

export default defineComponent({
  setup() {
    const formRef = ref()
    const formState: UnwrapRef<LoginData> = reactive({
      username: '',
      password: ''
    })
    // 登录的回调
    const handleFinish = () => {
      formRef.value
        .validate()
        .then(async () => {
          const res = await login(formState)
          localCache.setItem('token', res.data.token)
          message.success('登录成功')
        })
        .catch((error: ValidateErrorEntity<LoginData>) => {
          console.log('error', error)
          message.error('登录失败')
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
