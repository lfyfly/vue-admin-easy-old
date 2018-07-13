<template>
  <div class="my-header">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'my-header',
  data () {
    return {
      msg: 'this is from my-header.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.my-header{

}
</style>
