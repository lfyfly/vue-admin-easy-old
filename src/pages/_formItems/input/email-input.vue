<template>
  <div class="email-input">
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'email-input',
  data () {
    return {
      msg: 'this is from email-input.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.email-input{

}
</style>
