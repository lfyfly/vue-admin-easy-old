<template>
  <div class="not-find">
    <img class="not-find-img" src="~@/assets/img/404/404_1.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'not-find',
  data () {
    return {
      msg: 'this is from not-find.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.not-find {
  padding-top: 40px;
  .not-find-img {
    display: block;
    margin: 0 auto;
  }

}
</style>
