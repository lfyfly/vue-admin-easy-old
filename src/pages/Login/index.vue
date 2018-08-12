<template>
  <div class="login-page">
    <div class="login-card">
      <div class="form-title">{{formTitle}}</div>
      <el-form class="login-form" :model="formData" :rules="rules" ref="login">
        <el-form-item prop="email">
          <el-input v-model.trim="formData.email" placeholder="测试邮箱：0@qq.com" spellcheck="false"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model.trim="formData.password" type="password" placeholder="测试密码：111111" spellcheck="false"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <img-captcha-input>
            <el-input class="captcha-input" v-model.trim="formData.captcha" placeholder="验证码" spellcheck="false"></el-input>
          </img-captcha-input>
        </el-form-item>

        <el-form-item class="login-btn-contianer">
          <el-button class="login-btn" type="primary" @click="onSubmit('login')">登录</el-button>
          <div class="other-option">
            <router-link class="to-register" to="register">还没有账号，去注册</router-link>
            <router-link class="to-forgot" to="forgot-password">忘记密码</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import imgCaptchaInput from '@/pages/_components/formItems/input/img-captcha-input'
import api from '@/api'
export default {
  name: 'login',
  components: {
    imgCaptchaInput
  },
  data () {
    return {
      msg: 'this is from login.vue',
      formTitle: '用户登录',
      formData: {
        email: '',
        password: '',
        captcha: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          api.login(this.formData)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style lang='scss' scoped>
.login-page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #ccc url($page-bg-image) no-repeat center/cover;
  .login-card {
    width: 310px;
    margin: 100px auto 0;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
    padding: 22px 22px 0;
    border-radius: 4px;
    overflow: hidden;
    .form-title {
      text-align: center;
      margin-bottom: 25px;
      font-size: 20px;
    }

    .login-btn {
      width: 100%;
    }
    .other-option {
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      margin: 0 2px;
      & > * {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
