<template>
  <div class="register-page">
    <div class="register-card">
      <div class="form-title">{{formTitle}}</div>
      <el-form class="register-form" :rules="rules" ref="register" :model="formData">
        <el-form-item prop="email">
          <el-input v-model.trim="formData.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input id="register-password" v-model.trim="formData.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item prop="repeatPassword">
          <el-input v-model.trim="formData.repeatPassword" type="password" placeholder="请确认密码"></el-input>
        </el-form-item>
        <el-form-item prop="captcha">
          <img-captcha-input>
            <el-input class="img-captcha-input" v-model.trim="formData.captcha" placeholder="验证码"></el-input>
          </img-captcha-input>
        </el-form-item>

        <el-form-item class="register-btn-contianer">
          <el-button class="register-btn" type="primary" @click="onSubmit('register')">注册</el-button>
          <div class="other-option">
            <router-link class="to-register" to="/login">已有账号，去登录</router-link>
            <router-link class="to-forgot" to="/forgot-password">忘记密码</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import validators from '../_validators'
import imgCaptchaInput from '@/pages/_components/formItems/input/img-captcha-input'

export default {
  name: 'register',
  components: {
    imgCaptchaInput
  },
  data () {
    return {
      msg: 'this is from register.vue',
      formTitle: '用户注册',
      formData: {
        email: '',
        password: '',
        repeatPassword: '',
        captcha: ''
      },
      rules: {
        email: [
          { required: true, message: '请输入邮箱', trigger: 'blur' },
          { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
          { validator: validators.isPassword, trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: validators.equalTo('#register-password'), message: '密码输入不一致', trigger: 'blur' }
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
.register-page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #ccc url(/static/wallpaper/wallpaper-1.jpg) no-repeat center/cover;
  .register-card {
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
    .register-captcha {
      display: flex;
      .captcha-img {
        width: 200px;
        margin-left: 8px;
        background: #fff;
        cursor: pointer;
      }
    }
    .register-btn {
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
