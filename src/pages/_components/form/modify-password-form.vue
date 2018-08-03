<template>
  <el-form class="modify-password-form" :model="formData" :rules="rules" ref="modifyPasswordForm" label-width="100px">
    <el-form-item label="当前密码" prop="pass">
      <el-input spellcheck="false" type="password" v-model="formData.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newPass">
      <el-input id="newPass" spellcheck="false" type="password" v-model="formData.newPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" prop="repeatNewPass">
      <el-input spellcheck="false" type="password" v-model="formData.repeatNewPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="$emit('cancel')">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import validators from '@/pages/_validators'
import api from '@/api'
export default {
  name: 'modify-password-form',
  data () {
    return {
      msg: 'this is from modify-password-form.vue',
      formData: {
        pass: '',
        newPass: '',
        repeatNewPass: ''
      },
      rules: {
        pass: [
          { required: true, message: '当前密码不能为空', trigger: 'blur' }
        ],
        newPass: [
          { required: true, message: '新密码不能为空', trigger: 'blur' },
          { validator: validators.isPassword, trigger: 'blur' }

        ],
        repeatNewPass: [
          { required: true, message: '确认新密码不能为空', trigger: 'blur' },
          { validator: validators.equalTo('#newPass'), message: '密码输入不一致', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    onSubmit () {
      this.$refs.modifyPasswordForm.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.formData)
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
.modify-password-form {
}
</style>
