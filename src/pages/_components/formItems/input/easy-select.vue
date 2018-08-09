<template>
  <el-form-item :rules="formItem.rules" :prop="formItem.name" :label="formItem.label">
    <el-select v-model="formData[formItem.name]" v-bind="formItem" placeholder="请选择" :disabled="formItem[option+'_disabled']||formItem.disabled" >
      <el-option v-for="item in formItem.componentData" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  name: 'easy-select',
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
      msg: 'this is from easy-select.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.easy-select {
}
</style>
