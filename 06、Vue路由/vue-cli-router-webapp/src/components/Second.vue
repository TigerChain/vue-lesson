<template lang="html">
  <div class="mainDiv">
    <Head
    lefttitle="返回"
    centerTitle="中间文字"
    isFlag = false
    :goBack="go"
    headCss="background-color:orange"
    />

    <div class="content">
      我是第二个界面，取得传过来的值是：
      {{this.$route.params.itemData.name}}
    </div>
  </div>

</template>

<script>
import Head from './Head'
export default {
  name:'secondpage',
  data(){
    return {

    }
  },
  methods:{
    go(){
      this.$router.goBack()
    }
  },
  // 注册组件
  components:{
    Head
  }
}
</script>

<style lang="css" scoped>

.mainDiv{
  display: flex;
  flex-direction: column;
  height: 100% ;
}
.content {
  margin-top: 40px;
  background-color: green;
  flex:1;
}
.customcss{
  background-color: orange;
}
</style>
