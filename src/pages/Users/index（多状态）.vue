<template>
  <div class="table-page users">
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
      <!-- 启用关闭两状态 -->
      <el-table-column prop="state" label="状态" width="120" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <!-- 多状态 -->
      <!-- <el-table-column prop="state" label="状态" width="120" align="center">
        <template slot-scope="scope">
          <el-select v-model="scope.row.state" :class="`state state-${scope.row.state}`" size="mini" placeholder="请选择">
            <el-option v-for="item in states" size="mini" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </template>
      </el-table-column> -->

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
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
      tableData: null,
      // 多状态
      states: [{ value: 0, label: '禁用' }, { value: 1, label: '审核' }, { value: 2, label: '启用' }]
    }
  },
  beforeCreate () {
    api.users.get().then(res => {
      this.tableData = res.data.data
    })
  }
}
</script>
<style lang="scss">
// 多状态切换
.state {
  .el-input__inner {
    padding-right: 0;
    padding-left: 0;
    color: #fff;
    text-align: center;
    width: 70px;
  }
  .el-input__suffix {
    display: none !important;
  }
}

.state--1 .el-input__inner {
  color: #909399;
  background: #f4f4f5;
  border-color: #d3d4d6 !important;
}
.state-0 .el-input__inner {
  color: #f56c6c;
  background: #fef0f0;
  border-color: #fbc4c4 !important;
}
.state-1 .el-input__inner {
  color: #409eff;
  background: #ecf5ff;
  border-color: #b3d8ff !important;
}
.state-2 .el-input__inner {
  color: #67c23a;
  background: #f0f9eb;
  border-color: #c2e7b0 !important;
}
</style>

<style lang='scss' scoped>
.users {
  .table-title {
    font-weight: normal;
    font-size: 20px;
  }

  padding: 20px;
}
</style>
