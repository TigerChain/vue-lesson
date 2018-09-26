<template>
  <div class="hello">
    <span>自定义 Promise 封装 XHR 来请求</span> </br>
    <button class="btn" type="button" name="button" @click="getData">请求本地</button>
    <button class="btn" type="button" name="button" @click="getGankIO">请求 gankio 数据</button>


    <!-- 本地请求 -->
    <ul>
      <li v-for="(data,index) in datas">
        <span>
          {{data.name}}
        </span>
        <span style="margin-left:10px;">
          {{data.address}}
        </span>
      </li>
    </ul>

    <!-- gankio数据 -->
    <ul>
      <li v-for="(item,index) in gankIoDatas" class="listItem">
        <img :src="item.url" alt="" style="width:245px">
        <span>整理者：{{item.who}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import fetchServer from '../js/fetchServer.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[],
      gankIoDatas:[]
    }
  },
  methods:{
    // 请求本地数据
    getData() {
      var that = this
      this.fetchServer('../../static/mydata.json',{methods:'GET'})
      .then(function(res){
        console.log(res)
        if(res.status=='0001'){
          that.datas = res.datas
        }
      })
      .catch(function(error){
        console.log(error.message+"---"+error.code)
      })
    },
    //请求远程数据－－ gankio 数据
    getGankIO() {
      let that = this
      this.fetchServer('http://gank.io/api/data/福利/10/1',{methods:''})
      .then(res =>{
         that.gankIoDatas = res.results
      }).catch(error =>{
        console.log(error.message+"---"+error.code)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  margin-top: 5px;
  background-color: red;
  padding:5px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.listItem {
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border:1px solid #ddd;
  margin-top:5px
}
</style>
