webpackJsonp([9],{"10f0":function(t,e){},"1QYB":function(t,e){},"3FNu":function(t,e){},"4c2Z":function(t,e){},"5HS3":function(t,e){},"5W1q":function(t,e){},"880T":function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),o={name:"basic-input",props:{option:{type:String,required:!0},formData:{type:Object,required:!0},formItem:{type:Object}},data:function(){return{msg:"this is from basic-input.vue"}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{rules:t.formItem.rules,prop:t.formItem.name,label:t.formItem.label}},[a("el-input",t._b({attrs:{spellcheck:"false",readonly:t.formItem[t.option+"_readonly"]||t.formItem.readonly,disabled:t.formItem[t.option+"_disabled"]||t.formItem.disabled},model:{value:t.formData[t.formItem.name],callback:function(e){t.$set(t.formData,t.formItem.name,e)},expression:"formData[formItem.name]"}},"el-input",t.formItem,!1))],1)},staticRenderFns:[]};var i=a("VU/8")(o,r,!1,function(t){a("qqsA")},"data-v-2e496843",null).exports,l={name:"easy-select",props:{option:{type:String,required:!0},formData:{type:Object,required:!0},formItem:{type:Object}},data:function(){return{msg:"this is from easy-select.vue"}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form-item",{attrs:{rules:t.formItem.rules,prop:t.formItem.name,label:t.formItem.label}},[a("el-select",t._b({attrs:{placeholder:"请选择",disabled:t.formItem[t.option+"_disabled"]||t.formItem.disabled},model:{value:t.formData[t.formItem.name],callback:function(e){t.$set(t.formData,t.formItem.name,e)},expression:"formData[formItem.name]"}},"el-select",t.formItem,!1),t._l(t.formItem.componentData,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1)},staticRenderFns:[]};var c={basicInput:i,easySelect:a("VU/8")(l,u,!1,function(t){a("88LP")},"data-v-5916c0d3",null).exports},p={name:"basic-form",components:s()({},c),props:{form:{type:Object,required:!0}},data:function(){return{msg:"this is from basic-form.vue"}},computed:{_formItems:function(){var t=this;return this.form.formItems.filter(function(e){return!e.options||-1!==e.options.indexOf(t.form.option)})}},methods:{onSubmit:function(){var t=this;this.$refs.basicForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.$emit("submit",t.form.formData)})}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"basic-form"},[a("el-form",{ref:"basicForm",attrs:{model:t.form.formData,"label-width":"80px"}},[t._l(t._formItems,function(e){return a(e.component||"basic-input",{key:e.name,tag:"component",attrs:{option:t.form.option,formData:t.form.formData,formItem:e}})}),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.$emit("cancel")}}},[t._v("取消")])],1)],2)],1)},staticRenderFns:[]};var m=a("VU/8")(p,d,!1,function(t){a("X+Ci")},"data-v-51533e01",null);e.a=m.exports},"88LP":function(t,e){},"8CwX":function(t,e){},"8aRc":function(t,e){},"9d1I":function(t,e,a){"use strict";e.a={isEmailCaptcha:function(t,e,a){/^\w{6}$/.test(e)?a():a(new Error("邮箱验证码格式不正确"))},isPhoneCaptcha:function(t,e,a){/^\w{6}$/.test(e)?a():a(new Error("手机验证码格式不正确"))},isPhone:function(t,e,a){/^1\d{10}$/.test(e)?a():a(new Error("手机格式不正确"))},isPassword:function(t,e,a){/^(\w|[~`!@#$%^&()\[\]:;"'|\?/><.,{}=*\\+-])+$/.test(e)?a():a(new Error("密码只能由非空格，字母，数字和常用字符组成"))},equalTo:function(t){return function(e,a,n){a!==document.querySelector(t).value.trim()?n(new Error("与目标值不相等")):n()}},mustBeTrue:function(t,e,a){!0!==e?a(new Error("此项必须勾选")):a()}}},C3wJ:function(t,e){},HQMt:function(t,e){},IcnI:function(t,e,a){"use strict";var n=a("7+uW"),s=a("NYxO"),o=a("QmSG");a("hKoQ").polyfill(),n.default.use(s.a);var r=new s.a.Store({state:{myInfo:null,isMobile:/(iPhone|iPod|iPad|Android|ios)/.test(navigator.userAgent),layout:null,sideNavAcitveIndex:NaN,navConfig:null,headerNav:null,navCollapse:!1,msg:"msg from vuex",config:o.a},mutations:{setLayout:function(t,e){t.layout=e},setMyInfo:function(t,e){t.myInfo=e},setHeaderNav:function(t,e){t.headerNav=e},setNavConfig:function(t,e){t.navConfig=e},setSideNav:function(t,e){t.sideNav=e},toggleSideNav:function(t,e){t.sideNav=t.navConfig[e].sideNav},toggleNavCollapse:function(t){t.navCollapse=!t.navCollapse},setNavGroupActiveIndex:function(t,e){t.sideNavAcitveIndex=e}}});e.a=r},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={name:"blank-layout",data:function(){return{msg:"this is from blank-layout.vue"}},created:function(){console.log("BlankLayout")}},o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"blank-layout"},[this._t("default")],2)},staticRenderFns:[]};var r=a("VU/8")(s,o,!1,function(t){a("PGU+")},"data-v-71fe58db",null).exports,i=a("Dd8w"),l=a.n(i),u=a("QmSG"),c=a("NYxO"),p={name:"me",data:function(){return{msg:"this is from me.vue"}},computed:l()({},Object(c.b)(["config","myInfo"])),methods:{logout:function(){localStorage.removeItem(u.a.tockenKey),window.location.reload()}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"me"},[a("el-dropdown",{staticClass:"me-dropdown",attrs:{size:"small"}},[a("div",{staticClass:"user-drop-container"},[t.config.avatar?a("div",{staticClass:"avatar",style:{backgroundImage:"url("+t.myInfo.avatar+")"}}):a("div",{staticClass:"username"},[t._v("\n        "+t._s(t.myInfo.username)+"\n      ")])]),t._v(" "),a("el-dropdown-menu",{staticClass:"me-dropdown-menu",attrs:{slot:"dropdown"},slot:"dropdown"},[a("router-link",{attrs:{to:"/personal"}},[a("el-dropdown-item",[t._v("个人中心")])],1),t._v(" "),a("div",{staticClass:"logout",on:{click:t.logout}},[a("el-dropdown-item",[t._v("登出")])],1)],1)],1)],1)},staticRenderFns:[]};var m=a("VU/8")(p,d,!1,function(t){a("NJhd"),a("5HS3")},"data-v-16ac001c",null).exports,h=a("I95x"),f=a.n(h),v={name:"fullscreen-button",data:function(){return{msg:"this is from fullscreen-button.vue",isIE:!!window.ActiveXObject||"ActiveXObject"in window,screenfullEnabled:f.a.enabled,isFullScreen:!1}},methods:{toggleFullscreen:function(){f.a.toggle&&(f.a.toggle(),this.isFullScreen=!this.isFullScreen)}}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return!this.isIE&&this.screenfullEnabled?e("div",{staticClass:"fullscreen-button"},[e("div",{staticClass:"fullscreen-icon",on:{click:this.toggleFullscreen}},[this.isFullScreen?e("span",{staticClass:"fa fa-compress"}):e("span",{staticClass:"fa fa-arrows-alt"})])]):this._e()},staticRenderFns:[]};var g={name:"header-right",components:{me:m,FullscreenButton:a("VU/8")(v,_,!1,function(t){a("QTpq")},"data-v-746dc8cc",null).exports},data:function(){return{msg:"this is from header-right.vue"}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-right"},[e("fullscreen-button"),this._v(" "),e("me")],1)},staticRenderFns:[]};var y=a("VU/8")(g,b,!1,function(t){a("1QYB")},"data-v-1d0d1bbe",null).exports,C={name:"header-nav",data:function(){return{msg:"this is from header-nav.vue"}},computed:l()({},Object(c.b)(["headerNav","sideNavAcitveIndex"])),methods:{toggleSideNav:function(t){this.$store.commit("toggleSideNav",t)}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-nav"},[a("ul",t._l(t.headerNav,function(e,n){return a("li",{key:e.title,class:{isActive:t.sideNavAcitveIndex===n},on:{click:function(e){t.toggleSideNav(n)}}},[a("router-link",{attrs:{to:e.path}},[a("i",{class:[e.icon,{fa:e.icon&&-1!==e.icon.indexOf("fa-")}]}),t._v(" "+t._s(e.title))])],1)}))])},staticRenderFns:[]};var $=a("VU/8")(C,w,!1,function(t){a("kpve")},"data-v-64f877b9",null).exports,k={name:"side-nav",data:function(){return{msg:"this is from side-nav.vue"}},computed:l()({},Object(c.b)(["navConfig","navCollapse","sideNavAcitveIndex"]))},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"side-nav",class:{collapse:t.navCollapse}},t._l(t.navConfig[0].sideNav?t.navConfig:[{sideNav:t.navConfig}],function(e,n){return t.sideNavAcitveIndex===n?a("div",{key:e.title,staticClass:"template"},[a("el-menu",{staticClass:"el-side-nav",attrs:{router:!0,"default-active":t.$route.path,collapse:t.navCollapse}},[t._l(e.sideNav,function(e){return[1===e.children.length?a("el-menu-item",{key:e.title,class:{"is-active":t.$route.path===e.children[0].path},attrs:{index:e.children[0].path}},[a("i",{staticClass:"side-nav-icon",class:[e.icon,{fa:e.icon&&-1!==e.icon.indexOf("fa-")}]}),t._v(" "),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.children[0].title))])]):a("el-submenu",{key:e.title,attrs:{index:e.title,"show-timeout":200,"hide-timeout":200}},[e.title?a("template",{slot:"title"},[a("i",{staticClass:"side-nav-icon",class:[e.icon,{fa:e.icon&&-1!==e.icon.indexOf("fa-")}]}),t._v(" "),a("span",[t._v(t._s(e.title))])]):t._e(),t._v(" "),t._l(e.children,function(e){return a("el-menu-item",{key:e.title,attrs:{index:e.path}},[t._v("\n            "+t._s(e.title)+"\n          ")])})],2)]})],2)],1):t._e()}))},staticRenderFns:[]};var I=a("VU/8")(k,x,!1,function(t){a("4c2Z"),a("qDDG"),a("sHfk")},"data-v-2092caae",null).exports,S={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"long-logo"})},staticRenderFns:[]};var N=a("VU/8")({name:"long-logo",data:function(){return{msg:"this is from long-logo.vue"}}},S,!1,function(t){a("C3wJ")},"data-v-5f502be8",null).exports,P={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"short-logo"})},staticRenderFns:[]};var D=a("VU/8")({name:"short-logo",data:function(){return{msg:"this is from short-logo.vue"}}},P,!1,function(t){a("8CwX")},"data-v-14089fd2",null).exports,F={name:"toggle-btn",data:function(){return{msg:"this is from toggle-btn.vue"}},computed:l()({},Object(c.b)(["navCollapse"]))},E={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"toggle-btn",class:{collapse:t.navCollapse},on:{click:function(e){t.$store.commit("toggleNavCollapse")}}})},staticRenderFns:[]};var q={name:"header-side-layout",components:{HeaderRight:y,HeaderNav:$,SideNav:I,LongLogo:N,ShortLogo:D,ToggleBtn:a("VU/8")(F,E,!1,function(t){a("8aRc")},"data-v-b437404c",null).exports},data:function(){return{msg:"this is from header-side-layout.vue"}},computed:l()({},Object(c.b)(["navCollapse","navConfig"])),created:function(){}},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-side-layout"},[a("div",{staticClass:"my-header"},[a("div",{staticClass:"header-left-container"},[a("div",{staticClass:"logo-container",class:{collapse:t.navCollapse}},[t.navCollapse?a("short-logo"):a("long-logo")],1),t._v(" "),a("div",{staticClass:"toggle-btn-container"},[a("toggle-btn")],1),t._v(" "),t.navConfig[0].sideNav?a("div",{staticClass:"header-nav-container"},[a("header-nav")],1):t._e()]),t._v(" "),a("div",{staticClass:"header-right-container"},[a("header-right")],1)]),t._v(" "),a("el-scrollbar",{staticClass:"side-container"},[a("side-nav")],1),t._v(" "),a("el-scrollbar",{staticClass:"page-scroll-container",class:{collapse:t.navCollapse}},[a("div",{staticClass:"page-container"},[t._t("default",[t._v("page-container")])],2)])],1)},staticRenderFns:[]};var R={name:"App",components:{BlankLayout:r,HeaderSideLayout:a("VU/8")(q,O,!1,function(t){a("V2ep"),a("HQMt")},"data-v-e1814542",null).exports}},L={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e(this.$route.meta.layout,{tag:"component"},[e("router-view")],1)],1)},staticRenderFns:[]};var T=a("VU/8")(R,L,!1,function(t){a("oZBj")},null,null).exports,j=a("YaEn"),H=a("IcnI"),B=a("zL8q"),U=a.n(B);a("5W1q"),a("tvR6"),a("ulDn");n.default.config.productionTip=!1,n.default.use(U.a),n.default.prototype.$BUS=new n.default,a("qs/E"),new n.default({el:"#app",router:j.a,store:H.a,components:{App:T},template:"<App/>"})},NJhd:function(t,e){},"PGU+":function(t,e){},QTpq:function(t,e){},QmSG:function(t,e,a){"use strict";e.a={avatar:!0,tockenKey:"tocken"}},V2ep:function(t,e){},"X+Ci":function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("Xxa5"),s=a.n(n),o=a("exGp"),r=a.n(o),i=a("7+uW"),l=a("/ocq"),u=[{path:"/login",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"r99a"))},meta:{layout:"BlankLayout"}},{path:"/",redirect:{path:"/index"}},{path:"/register",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"kprW"))},meta:{layout:"BlankLayout"}},{path:"/forgot-password",component:function(){return Promise.all([a.e(0),a.e(6)]).then(a.bind(null,"PUnv"))},meta:{layout:"BlankLayout"}},{path:"/reset-password",component:function(){return a.e(7).then(a.bind(null,"roEI"))},meta:{layout:"BlankLayout"}}],c=a("bOdI"),p=a.n(c),d=a("Dd8w"),m=a.n(d),h=a("NYxO"),f=a("880T"),v=a("9d1I"),_=a("gyMJ"),g={name:"modify-phone-form",props:{form:{type:Object,required:!0}},data:function(){return{msg:"this is from modify-phone-form.vue",step:1,step_1_data:{phoneCaptcha:""},step_2_data:{phone:"",phoneCaptcha:""},captchaRules:[{required:!0,message:"验证码不能为空",trigger:"blur"},{validator:v.a.isPhoneCaptcha,trigger:"blur"}],phoneRules:[{required:!0,message:"手机号不能为空",trigger:"blur"},{validator:v.a.isPhone,trigger:"blur"}],sendCaptchaBtnText:"发送验证码",count:60,currCount:60,countDownTimer:null}},methods:{getCaptcha:function(t){var e=void 0;2===t&&this.$refs.step2.validateField("phone",function(t){e=!(t.length>0)}),!1!==e&&null===this.countDownTimer&&(_.a.personal.getPhoneCaptcha(),this.countDown(),this.countDownTimer=setInterval(this.countDown,1e3))},resetCountDown:function(){this.sendCaptchaBtnText="发送验证码",clearInterval(this.countDownTimer),this.countDownTimer=null,this.currCount=this.count},countDown:function(){console.log("定时器"),this.currCount--,0!==this.currCount?this.sendCaptchaBtnText=this.currCount+"秒后可重新发送":this.resetCountDown()},step1Submit:function(){var t=this;this.$refs.step1.validate(function(e){if(!e)return console.log("error submit!!"),!1;_.a.personal.validatePhoneCaptcha(t.step_1_data).then(function(e){console.log("res.data",e),"success"===e.data.type&&(t.step=2,t.resetCountDown())})})},step2Submit:function(){var t=this;this.$refs.step2.validate(function(e){if(!e)return console.log("error submit!!"),!1;_.a.personal.modifyPhone(t.step_2_data).then(function(e){"success"===e.data.type&&(t.resetCountDown(),t.step=3)})})}},destroyed:function(){this.resetCountDown()}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modify-phone-form"},[a("el-steps",{staticClass:"steps",attrs:{active:t.step,"align-center":""}},[a("el-step",{attrs:{title:"验证旧手机"}}),t._v(" "),a("el-step",{attrs:{title:"验证新手机"}}),t._v(" "),a("el-step",{attrs:{title:"修改手机成功"}})],1),t._v(" "),1===t.step?a("el-form",{key:"1",ref:"step1",attrs:{model:t.step_1_data,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"当前手机"}},[a("el-input",{attrs:{spellcheck:"false",value:t.form.phone,readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",prop:"phoneCaptcha",rules:t.captchaRules}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_1_data.phoneCaptcha,callback:function(e){t.$set(t.step_1_data,"phoneCaptcha",e)},expression:"step_1_data.phoneCaptcha"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:t.getCaptcha}},[t._v(t._s(t.sendCaptchaBtnText))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.step1Submit}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),2===t.step?a("el-form",{key:"2",ref:"step2",attrs:{model:t.step_2_data,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"新手机",prop:"phone",rules:t.phoneRules}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_2_data.phone,callback:function(e){t.$set(t.step_2_data,"phone",e)},expression:"step_2_data.phone"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",rules:t.captchaRules,prop:"phoneCaptcha"}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_2_data.phoneCaptcha,callback:function(e){t.$set(t.step_2_data,"phoneCaptcha",e)},expression:"step_2_data.phoneCaptcha"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getCaptcha(2)}}},[t._v(t._s(t.sendCaptchaBtnText))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.step2Submit}},[t._v("确定")])],1)],1):t._e(),t._v(" "),3===t.step?a("div",{staticClass:"complete"},[a("h3",[t._v("手机修改成功")]),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$emit("cancel")}}},[t._v("完成")])],1)]):t._e()],1)},staticRenderFns:[]};var y=a("VU/8")(g,b,!1,function(t){a("3FNu")},"data-v-03d57b20",null).exports,C={name:"modify-email-form",props:{form:{type:Object,required:!0}},data:function(){return{msg:"this is from modify-email-form.vue",step:1,step_1_data:{emailCaptcha:""},step_2_data:{email:"",emailCaptcha:""},captchaRules:[{required:!0,message:"验证码不能为空",trigger:"blur"},{validator:v.a.isEmailCaptcha,trigger:"blur"}],emailRules:[{required:!0,message:"邮箱不能为空",trigger:"blur"},{type:"email",message:"邮箱格式错误",trigger:"blur"}],sendCaptchaBtnText:"发送验证码",count:60,currCount:60,countDownTimer:null}},methods:{getCaptcha:function(t){var e=void 0;2===t&&this.$refs.step2.validateField("email",function(t){e=!(t.length>0)}),!1!==e&&null===this.countDownTimer&&(_.a.personal.getEmailCaptcha(),this.countDown(),this.countDownTimer=setInterval(this.countDown,1e3))},resetCountDown:function(){this.sendCaptchaBtnText="发送验证码",clearInterval(this.countDownTimer),this.countDownTimer=null,this.currCount=this.count},countDown:function(){console.log("定时器"),this.currCount--,0!==this.currCount?this.sendCaptchaBtnText=this.currCount+"秒后可重新发送":this.resetCountDown()},step1Submit:function(){var t=this;this.$refs.step1.validate(function(e){if(!e)return console.log("error submit!!"),!1;_.a.personal.validateEmailCaptcha(t.step_1_data).then(function(e){console.log("res.data",e),"success"===e.data.type&&(t.step=2,t.resetCountDown())})})},step2Submit:function(){var t=this;this.$refs.step2.validate(function(e){if(!e)return console.log("error submit!!"),!1;_.a.personal.modifyEmail(t.step_2_data).then(function(e){"success"===e.data.type&&(t.resetCountDown(),t.step=3)})})}},destroyed:function(){this.resetCountDown()}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modify-email-form"},[a("el-steps",{staticClass:"steps",attrs:{active:t.step,"align-center":""}},[a("el-step",{attrs:{title:"验证旧邮箱"}}),t._v(" "),a("el-step",{attrs:{title:"验证新邮箱"}}),t._v(" "),a("el-step",{attrs:{title:"修改邮箱成功"}})],1),t._v(" "),1===t.step?a("el-form",{key:"1",ref:"step1",attrs:{model:t.step_1_data,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"当前邮箱"}},[a("el-input",{attrs:{spellcheck:"false",value:t.form.email,readonly:""}})],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",prop:"emailCaptcha",rules:t.captchaRules}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_1_data.emailCaptcha,callback:function(e){t.$set(t.step_1_data,"emailCaptcha",e)},expression:"step_1_data.emailCaptcha"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:t.getCaptcha}},[t._v(t._s(t.sendCaptchaBtnText))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.step1Submit}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),2===t.step?a("el-form",{key:"2",ref:"step2",attrs:{model:t.step_2_data,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"新邮箱",prop:"email",rules:t.emailRules}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_2_data.email,callback:function(e){t.$set(t.step_2_data,"email",e)},expression:"step_2_data.email"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"验证码",rules:t.captchaRules,prop:"emailCaptcha"}},[a("el-input",{attrs:{spellcheck:"false"},model:{value:t.step_2_data.emailCaptcha,callback:function(e){t.$set(t.step_2_data,"emailCaptcha",e)},expression:"step_2_data.emailCaptcha"}})],1),t._v(" "),a("el-form-item",[a("el-button",{on:{click:function(e){t.getCaptcha(2)}}},[t._v(t._s(t.sendCaptchaBtnText))]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.step2Submit}},[t._v("确定")])],1)],1):t._e(),t._v(" "),3===t.step?a("div",{staticClass:"complete"},[a("h3",[t._v("邮箱修改成功")]),t._v(" "),a("div",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$emit("cancel")}}},[t._v("完成")])],1)]):t._e()],1)},staticRenderFns:[]};var $=a("VU/8")(C,w,!1,function(t){a("Z/eg")},"data-v-d5af769e",null).exports,k={name:"modify-password-form",data:function(){return{msg:"this is from modify-password-form.vue",formData:{password:"",newPassword:"",repeatNewPassword:""},rules:{password:[{required:!0,message:"当前密码不能为空",trigger:"blur"}],newPassword:[{required:!0,message:"新密码不能为空",trigger:"blur"},{validator:v.a.isPassword,trigger:"blur"}],repeatNewPassword:[{required:!0,message:"确认新密码不能为空",trigger:"blur"},{validator:v.a.equalTo("#newPassword"),message:"密码输入不一致",trigger:"blur"}]}}},methods:{onSubmit:function(){var t=this;this.$refs.modifyPasswordForm.validate(function(e){if(!e)return console.log("error submit!!"),!1;_.a.personal.modifyPassword(t.formData).then(function(){t.$emit("cancel")})})}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-form",{ref:"modifyPasswordForm",staticClass:"modify-password-form",attrs:{model:t.formData,rules:t.rules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"当前密码",prop:"password"}},[a("el-input",{attrs:{spellcheck:"false",type:"password","auto-complete":"off"},model:{value:t.formData.password,callback:function(e){t.$set(t.formData,"password",e)},expression:"formData.password"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"新密码",prop:"newPassword"}},[a("el-input",{attrs:{id:"newPassword",spellcheck:"false",type:"password","auto-complete":"off"},model:{value:t.formData.newPassword,callback:function(e){t.$set(t.formData,"newPassword",e)},expression:"formData.newPassword"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"确认新密码",prop:"repeatNewPassword"}},[a("el-input",{attrs:{spellcheck:"false",type:"password","auto-complete":"off"},model:{value:t.formData.repeatNewPassword,callback:function(e){t.$set(t.formData,"repeatNewPassword",e)},expression:"formData.repeatNewPassword"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("确定")]),t._v(" "),a("el-button",{on:{click:function(e){t.$emit("cancel")}}},[t._v("取消")])],1)],1)},staticRenderFns:[]};var I=a("VU/8")(k,x,!1,function(t){a("10f0")},"data-v-32e01c1f",null).exports,S={name:"personal",components:{BasicForm:f.a,modifyPhoneForm:y,modifyEmailForm:$,modifyPasswordForm:I},data:function(){return{msg:"this is from personal.vue",dialogForm:{title:"dialog 标题",show:!1,formComponent:"basic-form",form:{}},formItems:[{name:"username",label:"昵称",scenes:["display","edit"],rules:[{required:!0,message:"昵称不能为空",trigger:"blur"},{max:16,message:"昵称长度不能超过16个字符",trigger:"blur"}]},{name:"sign",label:"签名",scenes:["display","edit"],rules:[{max:200,message:"签名长度不能超过200个字符",trigger:"blur"}]},{name:"email",label:"邮箱",scenes:["display","edit"]},{name:"phone",label:"手机",scenes:["display","edit"]},{name:"role",label:"权限",scenes:["display"]}]}},computed:m()({},Object(h.b)(["myInfo"])),methods:{edit:function(t){if("phone"===t)this.dialogForm.formComponent="modify-phone-form",this.dialogForm.title="修改手机",this.dialogForm.form={phone:this.myInfo[t]};else if("email"===t)this.dialogForm.formComponent="modify-email-form",this.dialogForm.form={email:this.myInfo[t]},this.dialogForm.title="修改邮箱";else{this.dialogForm.formComponent="basic-form";var e=this.formItems.filter(function(e){return e.name===t});this.dialogForm.title="修改"+e[0].label,this.dialogForm.form={formData:p()({id:this.myInfo.id},t,this.myInfo[t]),formItems:e}}this.dialogForm.show=!0},modifyPassword:function(){this.dialogForm.formComponent="modify-password-form",this.dialogForm.show=!0,this.dialogForm.title="修改密码"},cancel:function(){this.dialogForm.show=!1},submit:function(t){_.a.personal.put(t).then(this.cancel)}}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"personal"},[a("img",{staticClass:"avatar",attrs:{src:t.myInfo.avatar,alt:""},on:{click:function(e){t.edit("avatar")}}}),t._v(" "),t._l(t.formItems,function(e){return a("div",{key:e.name,staticClass:"personal-row"},[a("div",{staticClass:"left"},[t._v(t._s(e.label))]),t._v(" "),a("div",{staticClass:"right"},[a("span",{staticClass:"value"},[t._v("\n        "+t._s(t.myInfo[e.name])+"\n      ")]),t._v(" "),-1!==e.scenes.indexOf("edit")?a("span",{staticClass:"modify",class:{"always-show":!t.myInfo[e.name]}},[a("i",{staticClass:"el-icon-edit",on:{click:function(a){t.edit(e.name)}}})]):t._e()])])}),t._v(" "),a("div",{staticClass:"personal-row"},[a("div",{staticClass:"left"},[t._v("密码")]),t._v(" "),a("div",{staticClass:"right"},[a("i",{staticClass:"el-icon-edit",on:{click:t.modifyPassword}})])]),t._v(" "),t.dialogForm.show?a("el-dialog",{attrs:{title:t.dialogForm.title,visible:t.dialogForm.show,width:"500px"},on:{"update:visible":function(e){t.$set(t.dialogForm,"show",e)}}},[a(t.dialogForm.formComponent,{tag:"component",attrs:{form:t.dialogForm.form},on:{submit:t.submit,cancel:t.cancel}})],1):t._e()],2)},staticRenderFns:[]};var P=[{path:"/personal",component:a("VU/8")(S,N,!1,function(t){a("j0hP")},"data-v-6914cf40",null).exports,meta:{layout:"HeaderSideLayout"}},{path:"/404",component:function(){return a.e(1).then(a.bind(null,"dLja"))},meta:{layout:"HeaderSideLayout"}},{path:"*",redirect:"/404"}],D={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"test"},[a("h3",[t._v(t._s(t.msg))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("h3",[t._v(t._s(t.$route.path))]),t._v(" "),a("el-button",{on:{click:t.toggle}},[t._v("toggle dialog")]),t._v(" "),a("el-dialog",{attrs:{visible:t.show},on:{"update:visible":function(e){t.show=e}}},[a("div",{ref:"test"},[t._v("test")])])],1)},staticRenderFns:[]};var F=a("VU/8")({name:"test",data:function(){return{msg:"this is from test.vue",show:!1}},methods:{toggle:function(){this.show=!0,this.$nextTick(function(){})}}},D,!1,function(t){a("fRIX")},"data-v-a4cf2abe",null).exports,E=[{path:"/index",component:function(){return a.e(2).then(a.bind(null,"2REn"))},meta:{layout:"HeaderSideLayout"}},{path:"/users",component:function(){return a.e(4).then(a.bind(null,"Gu2p"))},meta:{layout:"HeaderSideLayout"}},{path:"/a1/1",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/a1/2",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/a1/3",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/a2/1",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/a2/2",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/a2/3",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b1/1",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b1/2",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b1/3",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b2/1",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b2/2",component:F,meta:{layout:"HeaderSideLayout"}},{path:"/b3/3",component:F,meta:{layout:"HeaderSideLayout"}}],q=[{title:"AAA",sideNav:[{title:"首页",icon:"fa-home",children:[{title:"首页",path:"/index"}]},{title:"用户管理",icon:"fa-users",children:[{title:"用户表",path:"/users"}]},{title:"a1",icon:"fa-bitcoin",children:[{title:"a1-1",path:"/a1/1"},{title:"a1-2",path:"/a1/2"},{title:"a1-3",path:"/a1/3"}]},{title:"a2",icon:"fa-cny",children:[{title:"a2-1",path:"/a2/1"},{title:"a2-2",path:"/a2/2"},{title:"a2-3",path:"/a2/3"}]}]},{title:"BBB",sideNav:[{title:"b1",icon:"fa-dollar",children:[{title:"b1-1",path:"/b1/1"},{title:"b1-2",path:"/b1/2"},{title:"b1-3",path:"/b1/3"}]},{title:"b2",icon:"fa-eur",children:[{title:"b2-1",path:"/b2/1"},{title:"b2-2",path:"/b2/2"},{title:"b2-3",path:"/b2/3"}]}]}],O=function(t,e){return t.filter(function(t){return t.children=t.children.filter(function(t){return-1!==e.indexOf(t.path)}),0!==t.children.length})},R=function(t,e){var a=[];return t[0].sideNav?(t.forEach(function(t){t.sideNav=O(t.sideNav,e)}),t.forEach(function(t){a.push({title:t.title,icon:t.icon,path:t.sideNav[0].children[0].path})}),console.log("headerNav",a)):t=O(t,e),{navConfig:t,headerNav:a}},L=function(t,e){var a=0;return e[0].sideNav&&e.forEach(function(e,n){e.sideNav.forEach(function(e){e.children.forEach(function(e){e.path===t&&(a=n)})})}),a},T=a("IcnI"),j=a("QmSG"),H=this;i.default.use(l.a);var B,U=new l.a({routes:u});U.beforeEach((B=r()(s.a.mark(function t(e,a,n){var o,r,i,l,c;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o=localStorage[j.a.tockenKey],T.a.state.navConfig&&(r=L(e.path,T.a.state.navConfig))!==T.a.state.sideNavAcitveIndex&&T.a.commit("setNavGroupActiveIndex",r),!T.a.state.myInfo||"/login"===e.path){t.next=5;break}return n(),t.abrupt("return");case 5:if(o){t.next=12;break}if(0===u.filter(function(t){return e.path===t.path}).length){t.next=9;break}return n(),t.abrupt("return");case 9:n("/login"),t.next=30;break;case 12:if("/login"!==e.path){t.next=15;break}return n("/"),t.abrupt("return");case 15:return t.next=17,_.a.personal.get();case 17:if(T.a.state.myInfo){t.next=21;break}return localStorage.removeItem(j.a.tockenKey),n("/login"),t.abrupt("return");case 21:i=T.a.state.myInfo&&T.a.state.myInfo.routers,console.log("用户权限路由",i),l=E.filter(function(t){return-1!==i.indexOf(t.path)}),c=R(q,i),T.a.commit("setHeaderNav",c.headerNav),T.a.commit("setNavConfig",c.navConfig),U.addRoutes(l.concat(P)),U.push(e.path),n(!1);case 30:case"end":return t.stop()}},t,H)})),function(t,e,a){return B.apply(this,arguments)}));e.a=U},"Z/eg":function(t,e){},fRIX:function(t,e){},gyMJ:function(t,e,a){"use strict";var n=a("//Fk"),s=a.n(n),o=a("mtWM"),r=a.n(o),i=a("QmSG"),l=function(t){},u=function(t,e){},c=a("zL8q");r.a.interceptors.request.use(function(t){return localStorage[i.a.tockenKey]&&(t.headers[i.a.tockenKey]=localStorage[i.a.tockenKey]),setTimeout(function(){l(t)}),t},function(t){return alert("请求错误\n"+t),s.a.reject(t)}),r.a.interceptors.response.use(function(t){return t.data&&t.data.message&&Object(c.Message)({type:t.data.type||"success",showClose:!0,message:t.data.message}),u(t.config,t),t},function(t){return Object(c.Message)({type:"error",message:t.message}),s.a.reject(t)});var p=r.a,d=a("IcnI"),m={get:function(t,e){return p.get("/me").then(function(t){return e?t:(d.a.commit("setMyInfo",t.data.data),t)})},put:function(t){var e=this;return p.put("/me",t).then(function(t){return"success"===t.data.type&&e.get(),t})},getPhoneCaptcha:function(){return p.get("/getPhoneCaptcha")},validatePhoneCaptcha:function(t){return p.post("/validatePhoneCaptcha",t)},modifyPhone:function(t){var e=this;return p.post("/modifyPhone",t).then(function(t){return"success"===t.data.type&&e.get(),t})},getEmailCaptcha:function(){return p.get("/getEmailCaptcha")},validateEmailCaptcha:function(t){return p.post("/validateEmailCaptcha",t)},modifyEmail:function(t){var e=this;return p.post("/modifyEmail",t).then(function(t){return"success"===t.data.type&&e.get(),t})},modifyPassword:function(t){return p.put("/modifyPassword",t)}},h={get:function(){return p.get("/users")},put:function(t){return p.put("/users",t)},post:function(t){return p.post("/users",t)},delete:function(t){return p.put("/users",t)}},f=a("YaEn");e.a={personal:m,users:h,login:function(t,e){p.post("/login",t).then(function(t){var e=t.data[i.a.tockenKey];e&&(localStorage[i.a.tockenKey]=e,f.a.push("/"))})}}},j0hP:function(t,e){},kpve:function(t,e){},oZBj:function(t,e){},qDDG:function(t,e){},qqsA:function(t,e){},"qs/E":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("mtWM"),s=a.n(n),o=a("KorX"),r=new(a.n(o).a)(s.a,{delayResponse:100}),i=a("Dd8w"),l=a.n(i),u=a("fZjL"),c=a.n(u),p=a("mvHQ"),d=a.n(p),m=void 0;localStorage.removeItem("tables"),localStorage.tables?m=JSON.parse(localStorage.tables):(m={users:[{id:"0",email:"0@qq.com",username:"aaa",avatar:"static/img/test-avartar.jpg",phone:"13011111111",role:"admin",password:"111111",state:0,routers:["/index","/users","/a1/1","/a1/2","/a2/1","/a2/2","/b1/1","/b1/2","/b2/1"]},{id:"1",email:"1@qq.com",username:"bbb",avatar:"static/img/test-avartar.jpg",phone:"13022222222",role:"admin",password:"111111",state:0,routers:["/index","/users","/a1/1","/a1/2","/a2/1","/a2/2","/b1/1","/b1/2","/b2/1"]},{id:"2",email:"2@qq.com",username:"ccc",avatar:"static/img/test-avartar.jpg",phone:"13033333333",role:"admin",password:"111111",state:0,routers:["/index","/users","/a1/1","/a1/2","/a2/1","/a2/2","/b1/1","/b1/2","/b2/1"]}]},localStorage.tables=d()(m));var h={find:function(t,e){var a=this.tables[t];return e?a.filter(function(t){return c()(e).every(function(a){return e[a]===t[a]})}):a},get:function(t,e){return this.find(t,e)},post:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.tables[t].unshift(l()({},a,e)),this.save()},put:function(t,e,a){this.find(t,e).forEach(function(t){c()(a).forEach(function(e){t[e]=a[e]})}),this.save()},save:function(){localStorage.tables=d()(this.tables)},delete:function(){this.save()},tables:m},f=a("QmSG");r.onGet("/me").reply(function(t){var e=t.headers[f.a.tockenKey];return[200,{type:"susscess",data:h.get("users",{id:e})[0]}]}),r.onPut("/me").reply(function(t){var e=JSON.parse(t.data),a=t.headers[f.a.tockenKey];return h.put("users",{id:a},e),[200,{type:"success",message:"信息更新成功"}]}),r.onGet("/getPhoneCaptcha").reply(function(t){return[200,{type:"success",message:"手机验证发送成功, 666666"}]}),r.onPost("/validatePhoneCaptcha").reply(function(t){return"666666"===JSON.parse(t.data).phoneCaptcha?[200,{type:"success"}]:[200,{type:"warning",message:"手机验证码错误"}]}),r.onPost("/modifyPhone").reply(function(t){var e=t.headers[f.a.tockenKey],a=JSON.parse(t.data);return"666666"===a.phoneCaptcha?(h.put("users",{id:e},{phone:a.phone}),[200,{type:"success",message:"手机修改成功"}]):[200,{type:"warning",message:"手机验证码错误"}]}),r.onGet("/getEmailCaptcha").reply(function(t){return[200,{type:"success",message:"邮箱验证发送成功, 888888"}]}),r.onPost("/validateEmailCaptcha").reply(function(t){return"888888"===JSON.parse(t.data).emailCaptcha?[200,{type:"success"}]:[200,{type:"warning",message:"邮箱验证码错误"}]}),r.onPost("/modifyEmail").reply(function(t){var e=t.headers[f.a.tockenKey],a=JSON.parse(t.data);return"888888"===a.emailCaptcha?(h.put("users",{id:e},{email:a.email}),[200,{type:"success",message:"邮箱修改成功"}]):[200,{type:"warning",message:"邮箱验证码错误"}]}),r.onPut("/modifyPassword").reply(function(t){var e=JSON.parse(t.data),a=t.headers[f.a.tockenKey],n=h.get("users",{id:a})[0];return e.password!==n.password?[401,{type:"error",message:"原密码错误，修改失败"}]:(h.put("users",{id:a},{password:e.newPassword}),[200,{type:"success",message:"密码修改成功"}])}),r.onGet("/users").reply(function(t){return[200,{type:"susscess",data:h.get("users")}]}),r.onPut("/users").reply(function(t){var e=JSON.parse(t.data);return h.put("users",{id:e.id},e),[200,{type:"success",message:"信息更新成功"}]}),r.onPost("/users").reply(function(t){var e=JSON.parse(t.data);return h.post("users",e,{id:h.tables.users.length+""}),[200,{type:"success",message:"信息更新成功"}]});var v=a("bOdI"),_=a.n(v);r.onPost("/login").reply(function(t){var e=JSON.parse(t.data),a=e.email,n=e.password;if("bqaoa"!==e.captcha)return[200,{type:"error",message:"验证码输入错误"}];var s=h.get("users",{email:a,password:n});return(0!==s.length?s[0].id:"")?[200,_()({type:"susscess"},f.a.tockenKey,h.get("users",{email:a,password:n})[0].id)]:[200,{type:"error",message:"邮箱或者密码输入错误"}]})},sHfk:function(t,e){},tvR6:function(t,e){},ulDn:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.712cec0af68e0d872ded.js.map