<template>
  <div class="table-page users">
    <h2 class="table-title">用户表</h2>
    <el-button type="primary" @click="create">新增</el-button>
    <!-- 操作栏 -->
    <!-- 搜索 批量操作 导出 -->
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
      <el-table-column prop="state" label="状态" width="100" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.state" @change="switchState(scope.row)" :title="scope.row.state?'启用中':'禁用中'" :active-value="1" :inactive-value="0" active-color="#13ce66" inactive-color="#909399"></el-switch>
        </template>
      </el-table-column>
      <!-- 编辑栏 -->
      <el-table-column label="操作" align="center" width="160">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="edit(scope.row,scope.$index)">编辑</el-button>
          <el-button size="mini" type="danger" @click="del(scope.row,scope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-if="dialogForm.show" :title="dialogForm.title" :visible.sync="dialogForm.show" width="500px">
      <component :is="dialogForm.formComponent" :form="dialogForm.form" @submit="submit" @cancel="cancel" />
    </el-dialog>
  </div>
</template>

<script>
import basicForm from '@/pages/_components/form/basic-form'
import validators from '@/pages/_validators'
import api from '@/api'
export default {
  name: 'users',
  components: {
    basicForm
  },
  data () {
    return {
      msg: 'this is from users.vue',
      tableData: null,
      // 编辑，创建表单
      dialogForm: {
        title: 'dialog 标题',
        show: false,
        formComponent: 'basic-form',
        form: {
          option: '', // 'edit' | 'create'
          formData: {},
          formItems: [
            {
              name: 'username',
              label: '昵称',
              options: ['edit', 'create'],
              rules: [
                { required: true, message: '昵称不能为空', trigger: 'blur' },
                { max: 16, message: '昵称长度不能超过16个字符', trigger: 'blur' }
              ]
            },
            {
              name: 'sign',
              label: '签名',
              options: ['edit'],
              rules: [
                { max: 200, message: '昵称长度不能超过200个字符', trigger: 'blur' }
              ]
            },
            {
              name: 'email',
              label: '邮箱',
              options: ['edit', 'create'],
              rules: [
                { required: true, message: '邮箱不能为空', trigger: 'blur' },
                { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
              ]
            },
            {
              name: 'phone',
              label: '手机',
              options: ['edit', 'create'],
              rules: [
                { required: true, message: '手机不能为空', trigger: 'blur' },
                { validator: validators.isPhone, trigger: 'blur' }
              ]
            },
            {
              name: 'role',
              options: ['edit', 'create'],
              label: '权限',
              component: 'easy-select',
              componentData: [
                { value: 'admin' },
                { value: 'user' },
                { value: 'guest' }
              ]
              // readonly: true,
            }
          ]
        } // 表单所需数据
      },
      // 多状态
      states: [{ value: 0, label: '禁用' }, { value: 1, label: '审核' }, { value: 2, label: '启用' }]
    }
  },
  methods: {
    // 过滤出可编辑，或可创建字段
    getTableData () {
      api.users.get().then(res => {
        console.log(res.data.data)
        this.tableData = res.data.data.filter(item => item.state !== -1)
      })
    },
    switchState (row) {
      console.log(row)
      api.users.put(row)
    },
    edit (row) {
      this.dialogForm.title = '编辑'
      this.dialogForm.form.option = 'edit'
      this.dialogForm.show = true
      this.dialogForm.form.formData = JSON.parse(JSON.stringify(row))
    },
    create (row) {
      this.dialogForm.title = '新增'
      this.dialogForm.form.option = 'create'
      this.dialogForm.show = true
      this.dialogForm.form.formData = {role: 'user'}
    },
    del (row) {
      if (confirm('确认删除')) {
        row.state = -1
        api.users.put(row)
        this.getTableData()
      }
    },
    submit () {
      alert(JSON.stringify(this.dialogForm.form.formData))
      api.users[this.dialogForm.title === '编辑' ? 'put' : 'post'](this.dialogForm.form.formData).then((res) => {
        this.cancel()
        if (res.data.type === 'success') this.getTableData()
      })
    },
    cancel () {
      this.dialogForm.show = false
    }
  },
  created () {
    this.getTableData()
  }
}
</script>

<style lang='scss' scoped>
.users {
  .table-title {
    font-weight: normal;
    font-size: 20px;
  }

  padding: 20px;
}
</style>
