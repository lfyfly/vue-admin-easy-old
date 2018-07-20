<template>
  <div class="header-right">
    <ul>
      <li>aaaa</li>
      <li>bbbb</li>
      <li>cccc</li>
      <li>eeee</li>
      <li>dddd</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header-right',
  data () {
    return {
      msg: 'this is from header-right.vue'
    }
  }
}
</script>
<style lang='scss' scoped>
@import "../config.scss";
.header-right{
  ul{
    display: table;
    height: $header-height;
    &>*{
      display: table-cell;
      vertical-align: middle;
      padding: 0 10px;
    }
  }
}
</style>
