<template>
  <el-form-item  :rules="formItem.rules" :prop="formItem.name" :label="formItem.label">
    <el-input spellcheck="false" v-model="formData[formItem.name]" v-bind="formItem" :readonly="formItem[option+'_readonly']||formItem.readonly" :disabled="formItem[option+'_disabled']||formItem.disabled"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'basic-input',
  props: {
    option: {
      type: String,
      required: true
    },
    formData: {
      type: Object,
      required: true
    },
    formItem: {
      type: Object
    }
  },
  data () {
    return {
      msg: 'this is from basic-input.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.basic-input {
}
</style>
