<template>
  <div class="password-input">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'password-input',
  data () {
    return {
      msg: 'this is from password-input.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.password-input{

}
</style>
