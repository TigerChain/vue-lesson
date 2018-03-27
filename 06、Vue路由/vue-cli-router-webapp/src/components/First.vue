<template>
<div class="mainDiv">
  <Head
  lefttitle="左边"
  centerTitle="中间文字"
  rightTitle="右边"
  :goBack="go"
  >
</Head>

    <div class="content">
      列表</br>
      <ul>
        <li v-for="(item,index) in mockList" @click="nav(index)" class="myul">
          <span>index----{{index}}</span></br>
          <span>{{item.name}}</span></br>
          <span>{{item.age}}</span></br>
          <span>{{item.address}}</span></br>
        </li>
      </ul>
    </div>

</div>
</template>

<script>
import Head from './Head'
export default {
  name: 'First',
  data () {
    return {
      mockList:[
        {"name":"tigerchain","age":30,"address":"china"},
        {"name":"areay","age":30,"address":"china"},
        {"name":"chdea","age":30,"address":"china"},
        {"name":"eeller","age":30,"address":"china"},
        {"name":"fathae","age":30,"address":"china"},
        {"name":"good","age":30,"address":"china"},
        {"name":"high","age":30,"address":"china"},
        {"name":"ieda","age":30,"address":"china"},
        {"name":"jack","age":30,"address":"china"},
        {"name":"koll","age":30,"address":"china"},
        {"name":"lmn","age":30,"address":"china"},
        {"name":"maprset","age":30,"address":"china"},
        {"name":"nill","age":30,"address":"china"},
        {"name":"oill","age":30,"address":"china"},
        {"name":"pill","age":30,"address":"china"},
        {"name":"qlill","age":30,"address":"china"},
        {"name":"rst","age":30,"address":"china"},
        {"name":"tseta","age":30,"address":"china"},
        {"name":"无名","age":30,"address":"china"},
        {"name":"中华","age":30,"address":"china"},
        {"name":"元旦","age":30,"address":"china"}
      ]
    }
  },
  methods:{
    go() {
      alert("返回")
    },
    nav(index){
      // 跳转第二个页面去  类似于 router-link to
      this.$router.push({name:'second',params:{itemData:this.mockList[index]}})
    }
  },
  components:{
    Head
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">

.mainDiv{
  display: flex;
  flex-direction: column;
  height: 100% ;
}
  .content {
    margin-top: 40px;
    background-color: red;
    flex:1;
  }

  .myul{
    /* 去掉 li 前面默认的点  */
    list-style-type:none;
    border-bottom:1px solid #ffeecc;
    padding-bottom: 7px;
    padding-top: 7px;
  }
  /* 去掉 ul 默认的缩进和空格 */
  ul {
    margin:0px;
    padding-left: 7px;
    padding-right: 7px;
  }
</style>
