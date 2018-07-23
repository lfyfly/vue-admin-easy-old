<template>
  <div class="me">
    <el-dropdown class="me-dropdown" size="small">
      <div class="user-drop-container">
        <div v-if="!config.avatar" class="username">
          {{myInfo.username}}
        </div>
        <div v-else class="avatar" :style="{backgroundImage:`url(${myInfo.avatar})`}"></div>
      </div>
      <el-dropdown-menu class="me-dropdown-menu" slot="dropdown">
        <el-dropdown-item>
          <router-link to="/personal">个人中心</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <span @click="logout" class="logout">登出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import config from '@/config'
import { mapState } from 'vuex'
export default {
  name: 'me',
  data () {
    return {
      msg: 'this is from me.vue'
    }
  },
  computed: {
    ...mapState(['config', 'myInfo'])
  },
  methods: {
    logout () {
      localStorage.removeItem(config.tockenKey)
      window.location.reload()
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
  .username,
  .avatar {
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
  }
  .username {
    max-width: 84px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .avatar {
    $size: $header-height * 0.7;
    height: $size;
    width: $size;
    background: #ccc url($default-avatar) center/contain;
    border-radius: $size;
  }
}
</style>
