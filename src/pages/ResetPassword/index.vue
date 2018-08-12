<template>
  <div class="reset-password-page">
    <div class="reset-password-card">
      <div class="form-title">{{formTitle}}</div>
      <el-form class="reset-password-form" :model="formData" :rules="rules" ref="resetPassword">
        <el-form-item prop="password">
          <el-input id="#reset-password" v-model.trim="formData.password" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item prop="repeatPassword">
          <el-input v-model.trim="formData.repeatPassword" type="password" placeholder="请确认新密码"></el-input>
        </el-form-item>
        <el-form-item class="reset-password-btn-contianer">
          <el-button class="reset-password-btn" type="primary" @click="onSubmit('resetPassword')">确认</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import validators from '../_validators'

export default {
  name: 'reset-password',
  data () {
    return {
      msg: 'this is from reset-password.vue',
      formTitle: '重置密码',
      formData: {
        password: '',
        repeatPassword: ''
      },
      rules: {
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '密码长度在 6 到 16 个字符', trigger: 'blur' },
          { validator: validators.isPassword, trigger: 'blur' }
        ],
        repeatPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { validator: validators.equalTo('#reset-password', '密码输入不一致'), trigger: 'blur' }
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
.reset-password-page {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: #ccc url($page-bg-image) no-repeat center/cover;
  .reset-password-card {
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
    .reset-password-captcha {
      display: flex;
      .captcha-img {
        width: 200px;
        margin-left: 8px;
        background: #fff;
        cursor: pointer;
      }
    }
    .reset-password-btn {
      width: 100%;
    }
  }
}
</style>
