<template>
  <div class="personal">
    <img class="avatar" :src="myInfo.avatar" alt="">
    <div class="personal-row" v-for="v in showData" :key="v.key">
      <div class="left">{{v.text}}</div>
      <div class="right">
        <span class="value">
          {{myInfo[v.key]||'未设置'}}
        </span>
        <span class="modify" v-if="!v.disable">
          <i class="el-icon-edit"></i>
        </span>
      </div>
    </div>
    <div class="personal-row">
      <div class="left">密&#12288;码</div>
      <div class="right">
        <i class="el-icon-edit"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'personal',
  data () {
    return {
      msg: 'this is from personal.vue',
      showData: [
        { key: 'username', text: '用户名' },
        { key: 'email', text: '邮　箱' },
        { key: 'xxx', text: '签　名' },
        { key: 'phone', text: '手　机' },
        { key: 'role', text: '权　限', disable: true }
      ]
    }
  },
  computed: {
    ...mapState(['myInfo'])
  }
}
</script>

<style lang='scss' scoped>
.personal {
  padding-top: 40px;
  min-width: 800px;

  .avatar {
    display: block;
    margin: 0 auto;
    width: 120px;
    box-shadow: 0 0 4px 1px #ccc;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .personal-row {
    display: table;
    width: 40%;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    & > * {
      display: table-cell;
      padding-top: 20px;
      padding-bottom: 20px;
    }
    .left {
      width: 50%;
      text-align: right;
      padding-right: 20px;
      box-sizing: border-box;
      font-weight: bold;
    }
    .right {
      text-align: left;
      &:hover {
        .modify {
          display: inline-block;
        }
      }
      .modify {
        display: none;
      }
      .el-icon-edit {
          color: $header-color-active;
          cursor: pointer;
          font-size: 16px;
          padding: 0 5px;
        }
    }
  }
}
</style>
