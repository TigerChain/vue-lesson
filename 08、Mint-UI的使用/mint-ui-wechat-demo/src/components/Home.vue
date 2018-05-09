<template>
  <div class="page-tabbar">
      <div class="page-wrap">
        <!-- 自定义头组件 -->
          <titlebar
            leftTitle="微信(11)"
            :search="mysearch"
            :add="myadd"
            :rightFirstImg="require('../assets/ic_search.png')"
            :rightSecondImg="require('../assets/ic_add.png')"
          />

        <div style="margin-top:48px;">
          <!-- <mt-cell class="page-part" title="当前选中" :value="selected" /> -->
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="message">
            <messagelist></messagelist>
          </mt-tab-container-item>
          <mt-tab-container-item id="contact">
          <contact></contact>
          </mt-tab-container-item>
          <mt-tab-container-item id="find">
            <find></find>
          </mt-tab-container-item>
          <mt-tab-container-item id="me">
            <me></me>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
      <!-- 这里为了方便直接写死四个，最好是定义一个 json 循环遍历出来，这样
      可以动态匹配，tab 图片和内容从服务器拿都没有问题，mt-tab-container-item 同理-->
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="message" @click.native="changeState(0)">
          <tabbaricon
            :normalImage="require('../assets/ic_weixin_normal.png')"
            :selectedImage="require('../assets/ic_weixin_selected.png')"
            :focused="currentIndex[0].isSelect"
          />
          微信
        </mt-tab-item>
        <mt-tab-item id="contact" @click.native="changeState(1)">
          <tabbaricon
            :normalImage="require('../assets/ic_contacts_normal.png')"
            :selectedImage="require('../assets/ic_contacts_selected.png')"
            :focused="currentIndex[1].isSelect"
          />
          通讯录
        </mt-tab-item>
        <mt-tab-item id="find" @click.native="changeState(2)">
          <tabbaricon
            :normalImage="require('../assets/ic_find_normal.png')"
            :selectedImage="require('../assets/ic_find_selected.png')"
            :focused="currentIndex[2].isSelect"
          />
          发现
        </mt-tab-item>
        <mt-tab-item id="me" @click.native="changeState(3)">
          <tabbaricon
            :normalImage="require('../assets/ic_me_normal.png')"
            :selectedImage="require('../assets/ic_me_selected.png')"
            :focused="currentIndex[3].isSelect"
          />
          我
        </mt-tab-item>
      </mt-tabbar>

    </div>
  </template>

  <script>
  import TitleBar from './common/TitleBar'
  import TabBarIcon from './common/TabBarIcon'
  import MessageList from './message/MessageList'
  import Contact from './contact/Contact'
  import Find from './find/Find'
  import Me from './me/Me'
  export default {
    name: 'Home',
    data() {
      return {
        selected: 'message',
        // 默认 tab 的选中情况
        currentIndex:[
          {isSelect:true},
          {isSelect:false},
          {isSelect:false},
          {isSelect:false},
        ]
      };
    },
    methods:{
      mysearch() {
        console.log('搜索')
      },
      myadd() {
        console.log('+')
      },
      // 改变选中 tab 的状态，根据状态来改变要显示选中与否的图片
      changeState(n){
        for(var i=0;i<this.currentIndex.length;i++){
          if(i==n){ // 当前选中的为 true
            this.currentIndex[i].isSelect = true
          }else { // 其它的为 false
            this.currentIndex[i].isSelect = false
          }
        }
      }
    },
    components:{
      'titlebar':TitleBar,
      'tabbaricon':TabBarIcon,
      'messagelist':MessageList,
      'contact':Contact,
      'find':Find,
      'me':Me
    }
  };
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-tabbar {
    overflow: hidden;
    /* height: 100vh; */
  }
  /*修改tab 默认文字的颜色*/
  .mint-tabbar > .mint-tab-item{
    color:#999999;
  }
  /* 修改默认 tab 选中文字的样式 */
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: transparent;
    color:#45C018;
  }

  .page-wrap {
    overflow: auto;
    /* height: 92%; */
    padding-bottom: 60px;
  }
</style>
