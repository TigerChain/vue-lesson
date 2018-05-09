<template lang="html">
  <div class="rootstyle">
    <mt-index-list>
      <commonitem
      :class="{peritemMrgingStyle:isActive}"
        :leftImg="require('../../assets/ic_new_friends.png')"
        leftLable="新的朋友"
        :clickItem="clickitem"
        :isShowDivider=true
      />
      <commonitem
      :class="{peritemMrgingStyle:isActive}"
        :leftImg="require('../../assets/ic_group_chat.png')"
        leftLable="群聊"
        :clickItem="clickitem"
        :isShowDivider=true
      />
      <commonitem
      :class="{peritemMrgingStyle:isActive}"
        :leftImg="require('../../assets/ic_tag.png')"
        leftLable="标签"
        :clickItem="clickitem"
        :isShowDivider=true
      />
      <commonitem
      :class="{peritemMrgingStyle:isActive}"
        :leftImg="require('../../assets/ic_common.png')"
        leftLable="公众号"
        :clickItem="clickitem"
      />

      <mt-index-section index="A">
        <mt-cell title="Aaron"></mt-cell>
        <mt-cell title="Alden"></mt-cell>
        <mt-cell title="Austin"></mt-cell>
      </mt-index-section>
      <mt-index-section index="B">
        <mt-cell title="Baldwin"></mt-cell>
        <mt-cell title="Braden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="C">
        <mt-cell title="Caldwin"></mt-cell>
        <mt-cell title="Craden"></mt-cell>
      </mt-index-section>
      <mt-index-section index="Z">
        <mt-cell title="Zack"></mt-cell>
        <mt-cell title="Zane"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
import CommonItem from '../common/CommonItem'
export default {
  data() {
    return {
      isActive:true,
      peritemMrgingStyle:'itemStyle',
    }
  },
  methods:{
    clickitem() {

    }
  },
  components:{
    'commonitem':CommonItem
  }
}
</script>

<style lang="css" >
.rootstyle {

}
/* 修改侧边栏的样式，这里注意 style 就不能写 scoped 了，这个样式是在 mint ui 的 styles.css 中
  scoped 只对本级起作用，不会重写 styles.css
 */
.mint-indexlist-nav {
    border-left:0px solid #ddd;
    background-color: transparent;
}
/* 侧边栏点击产生的背景效果 */
.mint-indexlist-nav:active {
    background-color: #b8bbbf;
}
/* 修改侧边栏A-z的样式 */
.mint-indexlist-navitem {
  font-size: 16px;
}
/* 列表导航 A——Z 的样式 */
.mint-indexsection-index {
  background-color: #d9d9d9;
  height: 10px;
  display: flex;
  align-items: center;
}

/* 修改默认点击侧边栏显示出的提示框样式 */
.mint-indexlist-indicator{
  background-color: #b8bbbf;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
}

.peritemMrgingStyle{
  padding-left:10px;
  padding-right:10px
}

</style>
