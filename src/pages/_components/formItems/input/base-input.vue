<template>
  <el-form-item  :rules="formItem.rules" :prop="formItem.name" :label="formItem.label">
    <el-input spellcheck="false" v-model="formData[formItem.name]"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'base-input',
  props: {
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
      msg: 'this is from base-input.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.base-input {
}
</style>
