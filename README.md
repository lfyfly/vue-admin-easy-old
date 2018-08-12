# vue-admin-easy
> 致力于简单易用，可扩展的后台脚手架
# [线上DEMO](https://lfyfly.gitee.io/vue-admin-easy)
## 一、自定义布局
### 目录结构

```
--| lib
----| layouts
------| BlankLayout 空白布局，如登录注册页
------| HeaderSideLayout 由顶栏和侧边栏和内容区组成的布局
--------| 详细见github项目目录

```
### 在哪配置layout?
路由配置的`meta.layout`字段
```
  {
    path: '/index',
    component: () => import('@/pages/Index'),
    meta: {
      layout: 'HeaderSideLayout'
    }
  }
```

## 二、路由与导航
设计理念：扁平化路由，将路由拆分为模块，简单易配置

### 2.1目录结构
```
-| router
----| guestRouter.js 游客可访问路由
----| routerConfig.js 所有的权限列表中的路由
----| userCommonRouter.js 所有登陆用户都可访问路由
----| navConfig.js 路由导航配置，支持`顶部+侧边`三级导航
----| index.js 路由初始化
```
### 2.2 路由初始化`index.js`
1. 只对对guestRouter进行路由实例化
2. 当本地存有`tocken`时，发起请求，获得用户信息和权限路由列表。（本地无tocken时只能访问`guestRouter.js`中的路由，非其中路由会跳转登录）
3. 通过用户的权限路由列表，过滤出可访问路由的配置和导航菜单配置
4. 使用`addRoutes`进行动态挂载过滤出来的路由配置

### 2.3 导航配置`router/navConfig.js`
1. 支持两级导航和三级导航，详见`router/navConfig.js`
2. 支持[Font Awesome icon](http://fontawesome.dashgame.com/)

## 三、弹窗表单（dialogForm）
### 3.1 dialogForm分层
```
dialog 弹窗层
  form 表单层，包含提交表单等操作
    form-item 表单元素 单个字段对应得表单元素
```
### 3.2 dialogForm配置文件
```
{
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
          placeholder: '请输入昵称',
          rules: [
            { required: true, message: '昵称不能为空', trigger: 'blur' },
            { max: 16, message: '昵称长度不能超过16个字符', trigger: 'blur' }
          ]

          // disabled: true // edit 和 create状态下都会被禁用，如果只要禁用其中一个，看下面四个属性
          // 以下四个属性使用情景：当编辑状态与创建状态表单的 readonly 或 disable 状态不同时
          // create_readonly: true, // 或 edit_readonly: true
          // create_disabled: true // 或 edit_disabled: true

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
          placeholder: '请输入邮箱',
          options: ['edit', 'create'],
          rules: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
          ]
        },
        {
          name: 'phone',
          label: '手机',
          placeholder: '请输入手机',
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
          ],
          edit_disabled: true
        }
      ]
    } // 表单所需数据
  }
```

## 四、未来功能
- 在dialogForm上进一步封装页面级别组件，一个配置文件，即可生成增删改查的表格页面
- 丰富可视化组件库
