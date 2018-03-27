<template lang="html">
  <header>
    <div class="header" v-bind:style="headCss">
      <!-- 左边的布局 返回按钮 -->
      <div class="backDiv" @click="goBack()" >
        <span>{{lefttitle}}</span>
      </div>
      <div class="centerDiv">
        <span>{{centerTitle}}</span>
      </div>
      <!-- 右边的 div  -->
      <div class="rightDiv" v-show="isFlag">
         <span>{{rightTitle}}</span>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name:'v-head',
  props:{  // 通过 props 来设置一些默认的属性，然后通过父子组件传值来动态改变样子和字
    // titlebar 左边默认的文字
    lefttitle:{
      default:'left'
    },
    // titlebar 中间默认的文字
    centerTitle:{
      default:'center'
    },
    // titlebar 右边默认的文字
    rightTitle:{
      default:''
    },
    //是否显示右边的布局标志
    isFlag:{
      default:true
    },
    // 返回按钮事件，是定个方法
    goBack:{
      type:Function
    },
    //样式
    headCss:{}
  },

  methods:{

  }

}
</script>

<style lang="css" scoped>
.header{
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #ededed;
}
.backDiv{
  padding-left: 7px;
}
.centerDiv {
  flex:1;
  text-align:center;
}
.rightDiv {
  padding-right: 7px;
}
</style>
