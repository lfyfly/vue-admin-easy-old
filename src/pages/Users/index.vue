<template>
  <div class="users">
    <h2 class="table-title">用户表</h2>
    <el-table v-if="tableData" :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180">
      </el-table-column>
      <el-table-column prop="username" label="用户名">
      </el-table-column>
      <el-table-column prop="phone" label="手机">
      </el-table-column>
      <el-table-column prop="email" label="邮箱">
      </el-table-column>
      <el-table-column prop="role" label="权限">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import basicTable from '@/pages/_components/table/basic-table'

import api from '@/api'
export default {
  name: 'users',
  components: {
    basicTable
  },
  data () {
    return {
      msg: 'this is from users.vue',
      tableComponent: 'basic-table',
      tableData: null
    }
  },
  beforeCreate () {
    api.users.get().then(res => {
      this.tableData = res.data.data
    })
  }
}
</script>

<style lang='scss' scoped>
.users {
  .table-title{
    font-weight: normal;
    font-size: 20px;
  }
  padding: 20px;
}
</style>
