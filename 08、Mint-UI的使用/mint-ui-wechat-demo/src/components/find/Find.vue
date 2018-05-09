<template lang="html">
  <div class="rootStyle">
    <commonitem
    :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_friends_circle.png')"
      leftLable="朋友圈"
      :rightImg="require('../../assets/ic_common.png')"
      :clickItem="clickitem"
    />
    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_scan.png')"
      leftLable="扫一扫"
      :clickItem="clickitem"
      :isShowDivider= true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_shake.png')"
      leftLable="摇一摇"
      :clickItem="clickitem"
    />
    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_scan.png')"
      leftLable="看一看"
      :clickItem="clickitem"
      :isShowDivider= true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_scan.png')"
      leftLable="搜一搜"
      :clickItem="clickitem"
    />

    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_nearby.png')"
      leftLable="附近的人"
      :clickItem="clickitem"
      :isShowDivider= true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_bottle.png')"
      leftLable="漂流瓶"
      :clickItem="clickitem"
    />

    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_nearby.png')"
      leftLable="购物"
      :clickItem="clickitem"
      :isShowDivider= true
    />
    <commonitem
      :class="[isActive==false?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_game.png')"
      :rightImg="require('../../assets/ic_common.png')"
      rightLable="五五开黑节拿红包"
      leftLable="游戏"
      :clickItem="clickitem"
    />

    <commonitem
      :class="[isActive==true?peritemMrgingStyle:peritemMrgingStyleNotMaring]"
      :leftImg="require('../../assets/ic_program.png')"
      leftLable="小程序"
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
.rootStyle {
  background-color: #e3e3e3;
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
