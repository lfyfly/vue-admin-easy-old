<template>
  <div class="personal">
    <h3>{{msg}}</h3>
    <h3>{{msg}}</h3>
    <h3>{{msg}}</h3>
    <h3>{{msg}}</h3>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data () {
    return {
      msg: 'this is from personal.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.personal{

}
</style>
