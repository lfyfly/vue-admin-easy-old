<template>
  <div class="logo" ></div>
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
  width: $header-height * 0.5;
  height: $header-height * 0.5;
  background: url($logo-url) no-repeat center/contain;
}
</style>
