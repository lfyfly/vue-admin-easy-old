<template>
  <el-form-item  :rules="formItem.rules" :prop="formItem.name" :label="formItem.label">
    <el-input spellcheck="false" v-model="formData[formItem.name]"></el-input>
  </el-form-item>
</template>

<script>
export default {
  name: 'basic-input',
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
      msg: 'this is from basic-input.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.basic-input {
}
</style>
