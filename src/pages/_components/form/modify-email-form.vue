<template>
  <div class="modify-email-form">
    <el-steps class="steps" :active="step" align-center>
      <el-step title="验证旧邮箱"></el-step>
      <el-step title="验证新邮箱"></el-step>
      <el-step title="修改邮箱成功"></el-step>
    </el-steps>
    <el-form v-if="step===1" key="1" ref="step1" :model="step_1_data" label-width="80px">
      <el-form-item label="当前邮箱">
        <el-input spellcheck="false" :value="form.email" readonly></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="emailCaptcha" :rules="captchaRules">
        <el-input spellcheck="false" v-model="step_1_data.emailCaptcha"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getCaptcha">{{sendCaptchaBtnText}}</el-button>
        <el-button type="primary" @click="step1Submit">下一步</el-button>
      </el-form-item>
    </el-form>

    <el-form v-if="step===2" key="2" ref="step2" :model="step_2_data" label-width="80px">
      <el-form-item label="新邮箱" prop="email" :rules="emailRules">
        <el-input spellcheck="false" v-model="step_2_data.email"></el-input>
      </el-form-item>
      <el-form-item label="验证码" :rules="captchaRules" prop="emailCaptcha">
        <el-input spellcheck="false" v-model="step_2_data.emailCaptcha"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button  @click="getCaptcha(2)">{{sendCaptchaBtnText}}</el-button>
        <el-button type="primary" @click="step2Submit">确定</el-button>
      </el-form-item>
    </el-form>

    <div class="complete" v-if="step===3">
      <h3>邮箱修改成功</h3>
      <div>

        <el-button type="primary" @click="$emit('cancel')">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import validators from '@/pages/_validators'
import api from '@/api'
export default {
  name: 'modify-email-form',
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      msg: 'this is from modify-email-form.vue',
      step: 1,
      step_1_data: { emailCaptcha: '' },
      step_2_data: { email: '', emailCaptcha: '' },
      captchaRules: [
        { required: true, message: '验证码不能为空', trigger: 'blur' },
        { validator: validators.isEmailCaptcha, trigger: 'blur' }

      ],
      emailRules: [
        { required: true, message: '邮箱不能为空', trigger: 'blur' },
        { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
      ],
      sendCaptchaBtnText: '发送验证码',
      count: 60, // 验证码发送间隔，用于重置（单位：秒）
      currCount: 60, // 剩余可发送秒数（单位：秒）
      countDownTimer: null
    }
  },
  methods: {
    getCaptcha (step) {
      // 第二步且邮箱有效
      let emailIsValid
      if (step === 2) {
        this.$refs.step2.validateField('email', function (err) {
          emailIsValid = !(err.length > 0)
        })
      }
      if (emailIsValid === false) return
      if (this.countDownTimer !== null) return
      api.personal.getEmailCaptcha()
      this.countDown()
      this.countDownTimer = setInterval(this.countDown, 1000)
    },
    resetCountDown () {
      this.sendCaptchaBtnText = '发送验证码'
      clearInterval(this.countDownTimer)
      this.countDownTimer = null
      this.currCount = this.count
    },
    countDown () {
      console.log('定时器')
      this.currCount--
      if (this.currCount === 0) {
        this.resetCountDown()
        return
      }
      this.sendCaptchaBtnText = this.currCount + '秒后可重新发送'
    },
    step1Submit () {
      this.$refs.step1.validate((valid) => {
        if (valid) {
          api.personal.validateEmailCaptcha(this.step_1_data).then(res => {
            console.log('res.data', res)
            if (res.data.type === 'success') {
              this.step = 2
              this.resetCountDown()
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    step2Submit () {
      this.$refs.step2.validate((valid) => {
        if (valid) {
          api.personal.modifyEmail(this.step_2_data).then(res => {
            if (res.data.type === 'success') {
              this.resetCountDown()
              this.step = 3
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  destroyed () {
    this.resetCountDown()
  }
}
</script>

<style lang='scss' scoped>
.modify-email-form {
  & > .steps {
    margin-bottom: 20px;
  }
  & > .complete {
    h3 {
      margin-bottom: 20px;
    }
    text-align: center;
  }
}
</style>
