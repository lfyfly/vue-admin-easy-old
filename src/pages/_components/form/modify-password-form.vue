<template>
  <el-form class="modify-password-form" :model="formData" ref="modifyPasswordForm" label-width="100px">
    <el-form-item label="当前密码" prop="pass">
      <el-input spellcheck="false" type="password" v-model="formData.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="新密码" prop="newPass">
      <el-input spellcheck="false" type="password" v-model="formData.newPass" auto-complete="off"></el-input>
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
export default {
  name: 'modify-password-form',
  data () {
    return {
      msg: 'this is from modify-password-form.vue',
      formData: {
        pass: '',
        newPass: '',
        repeatNewPass: ''
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
