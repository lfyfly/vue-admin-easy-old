<template>
  <div class="modify-phone-form">
    <el-steps class="steps" :active="step" align-center>
      <el-step title="验证旧手机"></el-step>
      <el-step title="验证新手机"></el-step>
      <el-step title="修改手机成功"></el-step>
    </el-steps>
    <el-form v-if="step===1" key="1" ref="step1" :model="step_1_data" label-width="80px">
      <el-form-item label="当前手机">
        <el-input spellcheck="false" :value="form.phone" readonly></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="phoneCaptcha" :rules="captchaRules">
        <el-input spellcheck="false" v-model="step_1_data.phoneCaptcha"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="getCaptcha">发送验证码</el-button>
        <el-button type="primary" @click="step1Submit">下一步</el-button>
      </el-form-item>
    </el-form>

    <el-form v-if="step===2" key="2" ref="step2" :model="step_2_data" label-width="80px">
      <el-form-item label="新手机" prop="phone" :rules="phoneRules">
        <el-input spellcheck="false" v-model="step_2_data.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" :rules="captchaRules" prop="phoneCaptcha">
        <el-input spellcheck="false" v-model="step_2_data.phoneCaptcha"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="step2Submit">确定</el-button>
      </el-form-item>
    </el-form>

    <div class="complete" v-if="step===3">
      <h3>手机修改成功</h3>
      <div>

        <el-button type="primary" @click="$emit('cancel')">完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import formItems from '@/pages/_formItems'
import validators from '@/pages/_validators'
import api from '@/api'
export default {
  name: 'modify-phone-form',
  components: {
    ...formItems
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      msg: 'this is from modify-phone-form.vue',
      step: 1,
      step_1_data: { phoneCaptcha: '' },
      step_2_data: { phone: '', phoneCaptcha: '' },
      captchaRules: [
        { required: true, message: '验证码不能为空', trigger: 'blur' },
        { validator: validators.isPhoneCaptcha, trigger: 'blur' }

      ],
      phoneRules: [
        { required: true, message: '手机号不能为空', trigger: 'blur' },
        { validator: validators.isPhone, trigger: 'blur' }
      ]
    }
  },
  methods: {
    getCaptcha () {
      api.personal.getPhoneCaptcha()
    },
    step1Submit () {
      this.$refs.step1.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.step_1_data)
          this.step = 2
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    step2Submit () {
      this.$refs.step2.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.step_2_data)
          this.step = 3
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
.modify-phone-form {
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
