/**
 * 封装能用的 item ，比如 发现和我中的条目
 * @author TigetChain
 * [lang description]
 * @type {String}
 */
<template lang="html">
  <div class="itemroot">
    <div class="itemContentRoot" @click="clickItem" >
        <div class="leftdiv">
          <img v-show="leftImg" :src="leftImg" alt="" class="imgstyle">
          <span class="leftlable">{{leftLable}}</span>
        </div>
        <div class="rightdiv">
          <span class="rightlable">{{rightLable}}</span>
          <img v-show="rightImg" :src="rightImg?rightImg:''" alt="" class="imgstyle">
        </div>
    </div>
    <div :style="isShowDivider==true?'height:1px;background-color:#d9d9d9':''"/>
  </div>

</template>

<script>
export default {

  props:{
    leftImg:{
      default:''
    },
    leftLable:{
      default:''
    },
    rightImg:{
      default:''
    },
    rightLable:{
      default:''
    },
    isShowDivider:{
      default:false
    },
    clickItem:{
      type:Function
    }
  }
}
</script>

<style lang="css" scoped>
.itemroot {
  background-color: #fff;
}
/* 内容根布局 */
.itemContentRoot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
/* 条目选中样式 */
.itemroot:active {
  background-color: #d9d9d9;
}
/* 左边的布局 */
.leftdiv {
  display: flex;
  align-items: center;
}
/* 左边的文本 */
.leftlable {
  margin-left: 20px;
}
/* 右边的布局 */
.rightdiv{
  display: flex;
  align-items: center;
}
/* 右边的文本 */
.rightlable {
  margin-right: 10px;
}
/* 图片样式 */
.imgstyle {
  width: 35px;
  height: 35px;
}
</style>
