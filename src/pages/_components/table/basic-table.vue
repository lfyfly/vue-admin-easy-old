<template>
  <div class="basic-table">
    <h3>{{msg}}</h3>
    <p>{{data}}</p>
  </div>
</template>

<script>
// 纯展示
export default {
  name: 'basic-table',
  props: {
    data: {
      require: true
    }
  },
  data () {
    return {
      msg: 'this is from basic-table.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.basic-table{

}
</style>
