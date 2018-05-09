<template lang="html">
  <div class="rootDiv">
    <!-- 头布局 -->
    <div class="headView">
      <div class="leftDiv">
        <img src="../../assets/avator.png" alt="" class="leftImg">
        <div class="labeldiv">
          <span class="name">TigerChain</span>
          <span class="wechatcode">微信号：tcww9527</span>
        </div>
      </div>
      <img src="../../assets/ic_qr_code.png" alt="" class="rightImg">
    </div>
    <!-- 每个条目布局，这里为了方便就一个个列出来了，
    我们可以定义一个 json 数组「单独文件，或是在
    data 中模拟数组」，然后遍历出来即可，可以自行试一试
    -->
    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_wallet.png')"
      leftLable="钱包"
      :clickItem="clickitem"
    />

    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_collect.png')"
      leftLable="收藏"
      :clickItem="clickitem"
      :isShowDivider=true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_gallery.png')"
      leftLable="相册"
      :clickItem="clickitem"
      :isShowDivider=true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_kabao.png')"
      leftLable="卡包"
      :clickItem="clickitem"
      :isShowDivider=true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_emoji.png')"
      leftLable="表情"
      :clickItem="clickitem"
    />
    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_settings.png')"
      leftLable="设置"
      :clickItem="clickitem"
    />
  </div>

</template>

<script>
import CommonItem from '../common/CommonItem.vue'
export default {
  data() {
    return {
      isActive:true,
      peritemMrgingStyle:'itemStyle',
      peritemMrgingStyleNotMaring:'itemStyleNotMargin'
    }
  },
  methods:{
    clickitem() {
      console.log('打开详情')
    }
  },
  components:{
    'commonitem':CommonItem
  }
}
</script>

<style lang="css" scoped>
/* 根样式 */
.rootDiv {
  background-color: #e3e3e3;
  padding-top: 15px;
  height: 100vh;
}
/* 第一个头布局 */
.headView {
  background-color: #fff;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/* 头布局左边布局 */
.leftDiv {
  display: flex;
  align-items: center;
}
/* 头布局姓名公号布局 */
.labeldiv {
  margin-left: 18px;
  display: flex;
  flex-direction: column;
}
/* 头像 */
.leftImg {
  width: 65px;
  height: 65px;
}
/* 公号二维码 */
.rightImg {
  width: 25px;
  height: 25px;
}
/* 名字 */
.name {
  font-size: 18px;
}
/* 微信号 */
.wechatcode {
  margin-top: 4px;
  color:#d3d3d3;
}

.itemStyle {
  margin-top:15px;
  padding-left:10px;
  padding-right:10px
}
.itemStyleNotMargin{
  padding-left:10px;
  padding-right:10px
}
</style>
