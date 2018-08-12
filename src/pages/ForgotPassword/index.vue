<template>
  <div class="forgot-password-page">
    <div class="forgot-password-card">
      <div class="form-title">{{formTitle}}</div>
      <el-form :model="formData" class="forgot-password-form" :rules="rules" ref="formData">
        <el-form-item prop="email">
          <el-input v-model.trim="formData.email" placeholder="请输入注册时邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <img-captcha-input>
            <el-input class="img-captcha-input" v-model.trim="formData.captcha" placeholder="验证码"></el-input>
          </img-captcha-input>
        </el-form-item>

        <el-form-item class="forgot-password-btn-contianer">
          <el-button class="forgot-password-btn" type="primary" @click="onSubmit('formData')">发送邮件</el-button>
          <div class="other-option">
            <router-link class="to-forgot-password" to="/login">想起密码，去登录</router-link>
            <router-link class="to-register" to="/register">还没有账号，去注册</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import imgCaptchaInput from '@/pages/_components/formItems/input/img-captcha-input'

export default {
  name: 'forgot-password',
  components: {
    imgCaptchaInput
  },
  data () {
    return {
      msg: 'this is from forgot-password.vue',
      formTitle: '找回密码',
      formData: {
        email: '',
        captcha: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
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
          alert('submit! data: ' + JSON.stringify(this.formData))
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
.forgot-password-page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #ccc url($page-bg-image) no-repeat center/cover;
  .forgot-password-card {
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
    .forgot-password-captcha {
      display: flex;
      .captcha-img {
        width: 200px;
        margin-left: 8px;
        background: #fff;
        cursor: pointer;
      }
    }
    .forgot-password-btn {
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
