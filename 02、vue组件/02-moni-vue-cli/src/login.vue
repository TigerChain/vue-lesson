<template lang="html">
<div >
  <h4>我是登录组件，包含在　first.vue 组件中</h4>
  用户名:<input type="text" name="" value="" placeholder="用户名" v-model="username"> <br/>
  密&nbsp;&nbsp;&nbsp;码:<input type="password" name="" value="" placeholder="密码" v-model="userpass"><br/>
  <div >
      <button type="button" name="button" class="loginbutton" @click="login()">登录</button>
      <button type="button" name="button" class="resetbutton" @click="reset()">重置</button>
  </div>
  {{showmessage}}
</div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      // 用户名
      username:'',
      // 密码
      userpass: '',
      // 显示信息
      showmessage:''
    }
  },
  methods: {
    login() {
      if(this.username.length==0 || this.userpass.length==0){
        this.showmessage = '用户名或密码不能为空！'
        return
      }
      this.showmessage = "欢迎 "+this.username+" 登录"
      this.username = ''
      this.userpass = ''

    },
    reset() {
      this.username = ''
      this.userpass = ''
      this.showmessage = ''
    }
  }
}
</script>

<style lang="css" scoped>
  .loginbutton{
    background: red;
  }
  .resetbutton{
    background-color: green;
  }
</style>
