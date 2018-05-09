/**
 * 封装 message item 组件
 * @auther TigerChain
 * [lang description]
 * @type {String}
 */
<template lang="html">
  <div class="rootstyle" @click="itemClick(id)">
    <div class="leftimgandlablestyle">
      <img :src="imgurl" alt="" class="imgstyle">
      <div class="rightOfImg">
        <span class="titlelable">{{title}}</span>
        <span class="subtitle">{{subtitle}}</span>
      </div>

    </div>
    <span class="sendtime">{{sendtime}}</span>
  </div>
</template>

<script>
export default {

  props:{
    id:{
      default:''
    },
    imgurl:{
      default:''
    },
    title:{
      type:String,
      default:''
    },
    subtitle:{
      type:String,
      default:''
    },
    sendtime:{
      type:String,
      default:''
    },
    itemClick:{
      type:Function
    }
  }
}
</script>

<style lang="css" scoped>
  /* message 的根样式 */
  .rootstyle {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  /* message 选中的样式  */
  .rootstyle:active {
    background-color: #d9d9d9;
  }
  /* 挨着图片的根样式 */
  .leftimgandlablestyle {
    display: flex;
  }
  /* 图片的样式 */
  .imgstyle {
    width: 50px;
    height: 50px;
  }
  /* 图片右边的文本根样式 */
  .rightOfImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7px;
  }
  /* 主题文本的样式 */
  .titlelable {
    color:black;
    font-size: 17px;
  }
  /* 副标题的文本样式 */
  .subtitle {
    margin-top:4px;
    color:gray;
  }
  /* 发送时间文本样式 */
  .sendtime {
    align-self:flex-start;
    color:gray;
  }
</style>
