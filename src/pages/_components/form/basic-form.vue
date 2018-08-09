<template>
  <div class="basic-form">
    <el-form ref="basicForm" :model="form.formData" label-width="80px">
      <component v-for="formItem in _formItems" :is="formItem.component||'basic-input'" :option="form.option" :formData="form.formData" :formItem="formItem" :key="formItem.name"></component>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">确定</el-button>
        <el-button @click="$emit('cancel')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import formItems from '../formItems'
export default {
  name: 'basic-form',
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
      msg: 'this is from basic-form.vue'
    }
  },
  computed: {
    _formItems () {
      return this.form.formItems.filter(formItem => {
        if (!formItem.options) return true
        return formItem.options.indexOf(this.form.option) !== -1
      })
    }
  },
  methods: {
    onSubmit () {
      this.$refs.basicForm.validate((valid) => {
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
.basic-form {
}
</style>
