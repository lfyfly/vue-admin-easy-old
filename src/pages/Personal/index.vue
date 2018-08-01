<template>
  <div class="personal">
    <img class="avatar" :src="myInfo.avatar" alt="" @click="edit('avatar')">
    <div class="personal-row" v-for="v in formItems" :key="v.name">
      <div class="left">{{v.label}}</div>
      <div class="right">
        <span class="value">
          {{myInfo[v.name]}}
        </span>
        <span class="modify" :class="{'always-show':!myInfo[v.name]}" v-if="v.scenes.indexOf('edit')!==-1">
          <i class="el-icon-edit" @click="edit(v.name)"></i>
        </span>
      </div>
    </div>

    <el-dialog v-if="dialogForm.show" :title="dialogForm.title" :visible.sync="dialogForm.show" width="40%">
      <my-form :form="dialogForm.form" @submit="submit" @cancel="cancel" />
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'personal',
  data () {
    return {
      msg: 'this is from personal.vue',
      dialogForm: {
        title: 'dialog 标题',
        show: false,
        optionType: 'update', // ''
        form: {} // 表单所需数据
      },
      formItems: [
        {
          component: 'base-input',
          name: 'username',
          label: '昵称',
          scenes: ['display', 'edit'],
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        },
        {
          component: 'base-input',
          name: 'email',
          label: '邮箱',
          scenes: ['display', 'edit'],
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        },
        {
          component: 'base-input',
          name: 'phone',
          label: '手机',
          scenes: ['display', 'edit'],
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        },
        {
          name: 'role',
          label: '权限',
          scenes: ['display']
        },
        {
          component: 'base-input',
          name: 'password',
          label: '密码',
          scenes: ['edit'],
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapState(['myInfo'])
  },
  methods: {
    edit (name) {
      let form = {
        scenes: 'edit',
        formData: { id: this.myInfo.id, [name]: this.myInfo[name] },
        formItems: [this.formItems.filter(formItem => formItem.name === name)[0]]
      }
      console.log('待编辑数据', form.formData)
      this.dialogForm.title = '修改' + form.formItems[0].label
      this.dialogForm.show = true
      this.dialogForm.form = form
    },
    cancel () {
      this.dialogForm.show = false
    },
    submit (submitData) {
      // api(更新请求+刷新请求)
      console.log('请求数据', submitData)
    }
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
      .modify.always-show {
        display: block;
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
