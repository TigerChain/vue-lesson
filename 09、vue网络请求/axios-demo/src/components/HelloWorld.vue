<template>
  <div class="hello">
    <button class="btn" type="button" name="button" @click="getData">点击</button>
    <button class="btn" type="button" name="button" @click="getGanData">axios 请求 gankio 数据</button>
    <!-- 本地数据显示 -->
    <ul v-show="isShowNativeResult">
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
    <ul v-show="isShowGankIoResult">
      <li v-for="(item,index) in gankIoDatas" class="listItem">
        <img :src="item.url" alt="" style="width:200px">
        <span>整理者：{{item.who}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[],
      gankIoDatas:[],
      isShowNativeResult:false,
      isShowGankIoResult:false
    }
  },
  methods:{
    // 本地请求 json 模拟
    getData() {
      var that = this
      this.$axios.get('../static/mydata.json')
        .then(response =>{
          console.log(response.data)
          if(response.data.status == '0001'){
            that.datas = response.data.datas
            that.isShowNativeResult = true
            that.isShowGankIoResult = false
          }
        })
        .catch(error =>{
          console.log(error)
          that.isShowNativeResult = false
          that.isShowGankIoResult = false
        })
    },
    // 真实服务器请求
    getGanData(){
      var that = this
      // 比如到得干货集中营 福利 10 月 1 号的文章列表
      this.$axios.get('http://gank.io/api/data/福利/10/1')
      .then(response =>{
        console.log(response.data)
        that.gankIoDatas = response.data.results
        that.isShowNativeResult = false
        that.isShowGankIoResult = true
      })
      .catch(error =>{
        console.log('error')
        that.isShowNativeResult = false
        that.isShowGankIoResult = false
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn {
  padding: 5px;
  background-color: red;
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
