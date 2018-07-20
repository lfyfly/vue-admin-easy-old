<template>
  <div class="toggle-btn">
    <i class="el-icon-menu" @click="$store.commit('toggleNavCollapse')"></i>
  </div>
</template>

<script>
export default {
  name: 'toggle-btn',
  data () {
    return {
      msg: 'this is from toggle-btn.vue'
    }
  }
}
</script>

<style lang='scss' scoped>
.toggle-btn {
  $size: 20px;
  width: $size;
  height: $size;
  text-align: center;
  line-height: $size;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

}
</style>
