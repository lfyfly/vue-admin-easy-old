<template>
  <div class="me">
    <el-dropdown class="me-dropdown" size="small">
      <span class="username">
        我是谁我是谁我是谁我是谁
      </span>
      <el-dropdown-menu class="me-dropdown-menu" slot="dropdown">
        <el-dropdown-item>
          <router-link to="/logout">登出</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/personal">个人中心</router-link>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'this is from me.vue'
    }
  }
}
</script>
<style  lang='scss'>
.me-dropdown-menu .el-dropdown-menu__item {
  text-align: center;
}
</style>

<style lang='scss' scoped>
.me {
  .me-dropdown {
    text-align: center;
  }
  .username {
    max-width: 84px;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
