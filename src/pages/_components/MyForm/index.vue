<template>
  <div class="my-form">
    <el-form ref="form" :model="form.formData" label-width="80px">
      <component v-for="formItem in form.formItems" :is="formItem.component" :formData="form.formData" :formItem="formItem" :key="formItem.name"></component>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="$emit('cancel')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'my-form',
  props: {
    form: {
      type: Object
    }
  },
  data () {
    return {
      msg: 'this is from my-form.vue'
    }
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.$emit('submit', this.form.formData)
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
.my-form {
}
</style>
