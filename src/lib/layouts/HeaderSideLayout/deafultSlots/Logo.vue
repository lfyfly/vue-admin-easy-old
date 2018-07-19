<template>
  <div class="logo">
  </div>
</template>

<script>
export default {
  name: 'logo',
  data () {
    return {
      msg: 'this is from logo.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../config.scss";

.logo {
  width: $side-width;
  height: $header-height * .8;
  background: url($logo-url) no-repeat center/contain;
}
</style>
