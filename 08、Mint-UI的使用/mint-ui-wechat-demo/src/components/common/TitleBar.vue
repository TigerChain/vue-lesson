<!-- 定义 titlebar 组件 -->
<template lang="html">
  <div class="page-head">
    <span>{{leftTitle}}</span>
    <div class="right-head">
      <div class="searchdiv" @click="search">
        <img :src="rightFirstImg" style="width:25px;" alt="">
      </div>
       <div class="searchdiv" style="margin-left:20px;" @click="add">
           <img :src="rightSecondImg" style="width:25px;margin-right:15px;" alt="">
       </div>
    </div>
  </div>
</template>

<script>
export default {

  name:'TitleBar',
  props:{
    leftTitle:{
      default:''
    },
    rightFirstImg:{
      default:''
    },
    rightSecondImg:{
      default:''
    },
    search:{
      type:Function
    },
    add:{
      type:Function
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="css" scoped>

.page-head {
  display: flex;
  position: fixed;
  z-index: 999;
  width: 100%;
  justify-content: space-between;
  padding-left: 7px;
  padding-right: 7px;
  align-items: center;
  background-color: #3E3A39;
  height: 48px;
  color:#fff;
  font-size: 18px;
}
.right-head{
  display: flex;
}
.searchdiv {
  display: flex;
  align-items: center;
  height: 48px;
}
</style>
