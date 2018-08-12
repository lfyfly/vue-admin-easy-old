<template>
  <div class="img-captcha-input">
    <div class="img-captcha-input-container" :style="{ right: captchaWidth + 10 + 'px' }">
      <slot/>
    </div>
    <div class="captcha-img-container" title="点击刷新验证码" :style="{ width: captchaWidth + 'px' }">
      <img class="captcha-img" :src="captchaUrl+'?'+radom" @click="refreshCaptcha">
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-captcha-input',
  props: {
    captchaWidth: {
      type: Number,
      default: 120
    }
  },
  data () {
    return {
      msg: 'this is from img-captcha-input.vue',
      captchaUrl: 'static/img/mock-cptcha.gif',
      radom: ''
    }
  },
  methods: {
    refreshCaptcha () {
      this.radom = Date.now()
    }
  }
}
</script>

<style lang='scss' scoped>
  .img-captcha-input {
  position: relative;
  height: 40px;
  width: 100%;
  .img-captcha-input-container {
    width: auto;
    position: absolute;
    left: 0;
  }
  .captcha-img-container {

    height: 40px;
    position: absolute;
    right: 0;
    top: 0;
    .captcha-img {
      height: 40px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      cursor: pointer;
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
