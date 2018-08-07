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
    <div class="personal-row">
      <div class="left">密码</div>
      <div class="right">
        <i class="el-icon-edit" @click="modifyPassword"></i>
      </div>
    </div>
    <el-dialog v-if="dialogForm.show" :title="dialogForm.title" :visible.sync="dialogForm.show" width="500px">
      <component :is="dialogForm.formComponent" :form="dialogForm.form" @submit="submit" @cancel="cancel" />
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BasicForm from '@/pages/_components/form/basic-form'
import modifyPhoneForm from '@/pages/_components/form/modify-phone-form'
import modifyEmailForm from '@/pages/_components/form/modify-email-form'
import modifyPasswordForm from '@/pages/_components/form/modify-password-form'

import api from '@/api'
export default {
  name: 'personal',
  components: {
    BasicForm,
    modifyPhoneForm,
    modifyEmailForm,
    modifyPasswordForm
  },
  data () {
    return {
      msg: 'this is from personal.vue',
      dialogForm: {
        title: 'dialog 标题',
        show: false,
        formComponent: 'basic-form',
        form: {} // 表单所需数据
      },
      formItems: [
        {
          name: 'username',
          label: '昵称',
          scenes: ['display', 'edit'],
          rules: [
            { required: true, message: '昵称不能为空', trigger: 'blur' },
            { max: 16, message: '昵称长度不能超过16个字符', trigger: 'blur' }
          ]
        },
        {
          name: 'sign',
          label: '签名',
          scenes: ['display', 'edit'],
          rules: [
            { max: 200, message: '签名长度不能超过200个字符', trigger: 'blur' }
          ]
        },
        {
          name: 'email',
          label: '邮箱',
          scenes: ['display', 'edit'] // 调用 modify-email-form
        },
        {
          name: 'phone',
          label: '手机',
          scenes: ['display', 'edit'] // 调用 modify-phone-form
        },
        {
          name: 'role',
          label: '权限',
          scenes: ['display'] // 不可编辑
        }
      ]
    }
  },
  computed: {
    ...mapState(['myInfo'])
  },
  methods: {
    edit (name) {
      if (name === 'phone') {
        this.dialogForm.formComponent = 'modify-phone-form'
        this.dialogForm.title = '修改手机'
        this.dialogForm.form = { phone: this.myInfo[name] }
      } else if (name === 'email') {
        this.dialogForm.formComponent = 'modify-email-form'
        this.dialogForm.form = { email: this.myInfo[name] }
        this.dialogForm.title = '修改邮箱'
      } else {
        this.dialogForm.formComponent = 'basic-form'
        let formItems = this.formItems.filter(formItem => formItem.name === name)
        // console.log('formItems:', formItems)
        this.dialogForm.title = '修改' + formItems[0].label
        this.dialogForm.form = {
          formData: { id: this.myInfo.id, [name]: this.myInfo[name] },
          formItems
        }
      }
      this.dialogForm.show = true
    },
    modifyPassword () {
      this.dialogForm.formComponent = 'modify-password-form'
      this.dialogForm.show = true
      this.dialogForm.title = '修改密码'
    },
    cancel () {
      this.dialogForm.show = false
    },
    submit (params) {
      // api(更新请求+刷新请求)
      api.personal.put(params).then(this.cancel)
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
