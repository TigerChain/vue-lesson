/**
 * 封装选中未选中
 * @auther TigerChain
 * [lang description]
 * @type {String}
 */
<template lang="html">
  <div class="">
    <img :src="focused?selectedImage:normalImage" alt="" class="imgstyle">
  </div>
</template>

<script>
export default {
  props:{
    // 默认的图片
    normalImage:{
      default:''
    },
    // 选中的图片
    selectedImage:{
      default:''
    },
    //是否选中
    focused:false
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.imgstyle {
  width: 30px;
  height: 30px;
}
</style>
