// 表单验证器
export default {
  isEmailCaptcha (rule, value, callback) {
    if (!/^\w{6}$/.test(value)) {
      callback(new Error('邮箱验证码格式不正确'))
    } else {
      callback()
    }
  },
  isPhoneCaptcha (rule, value, callback) {
    if (!/^\w{6}$/.test(value)) {
      callback(new Error('手机验证码格式不正确'))
    } else {
      callback()
    }
  },
  isPhone (rule, value, callback) {
    if (!/^1\d{10}$/.test(value)) {
      callback(new Error('手机格式不正确'))
    } else {
      callback()
    }
  },
  isPassword (rule, value, callback) {
    /* eslint-disable */
    if (!/^(\w|[~`!@#$%^&()\[\]:;"'|\?/><.,{}=*\\+-])+$/.test(value)) {
      callback(new Error('密码只能由非空格，字母，数字和常用字符组成'))
    } else {
      callback()
    }
    /* eslint-enable */
  },
  equalTo (targetInput) {
    return function (rule, value, callback) {
      if (value !== document.querySelector(targetInput).value.trim()) {
        callback(new Error('与目标值不相等'))
      } else {
        callback()
      }
    }
  },
  mustBeTrue (rule, value, callback) {
    if (value !== true) {
      callback(new Error('此项必须勾选'))
    } else {
      callback()
    }
  }
}
