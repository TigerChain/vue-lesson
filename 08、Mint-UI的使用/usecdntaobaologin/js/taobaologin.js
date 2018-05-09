var vm = new Vue({
  el:"#mydiv",
  data:{
    // 默认的用户名
    uname:"",
    // 默认的用户密码
    upass:"",
    // 是否显示忘记密码
    forgetPassShowroNot:true,
    // 默认的用户名默认值
    accountPlaceholder:"手机号/邮箱/会员名",
    // 是否是用户账户登录，默认是 true
    isUserAccount:true,
    // 默认短信验证码的值
    getCode:'',
    // 切换登录方式按钮默认显示的文本
    defaultAccountText:'短信验证码登录' ,
  },
  methods:{
    // 登录显示模态框 调用 mint-ui 的 messagebox
    login() {
      if(!this.uname){
        this.$messagebox('','请输入用户名');
      } else if(!this.upass){
          this.$messagebox('','请输入密码');
      }

    },
    // 切换登录方式
    changeLoginMethod() {

      if(this.isUserAccount){
        this.defaultAccountText="账户密码登录"
        this.accountPlaceholder = "请输入手机号码"
        this.forgetPassShowroNot = false
      }else {
        this.defaultAccountText ="短信验证码登录"
        this.accountPlaceholder = "手机号/邮箱/会员名"
        this.forgetPassShowroNot = true
      }
      this.isUserAccount = !this.isUserAccount ;
    }
  }
})
