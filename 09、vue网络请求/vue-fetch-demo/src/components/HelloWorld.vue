<template>
  <div class="hello">
    <button  class="btn" type="button" name="button" @click="getData">请求本地</button>
    <button  class="btn" type="button" name="button" @click="getGankIO">fetch 请求 gankio 数据</button>
    <!-- 本地请求 -->
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
        <img :src="item.url" alt="" style="width:245px">
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
    getData() {
      // 本地请求 json
      fetch('../static/mydata.json')
      .then(response =>{
        return response.json()
      })
      .then(myJson=>{
          console.log(myJson)
          if(myJson.status=='0001'){
            this.datas = myJson.datas
            this.isShowNativeResult = true
            this.isShowGankIoResult = false
          }
      })
      .catch(e => {
        console.log('error',e)
        this.isShowNativeResult = false
        this.isShowGankIoResult = false
      })
    },
    getGankIO() {
      // 请求 gankio 中的 福利数据
      fetch('http://gank.io/api/data/福利/10/1')
      .then(response =>{
        return response.json()
      })
      .then(myjson =>{
        console.log(myjson)
        this.gankIoDatas = myjson.results
        this.isShowGankIoResult = true
        this.isShowNativeResult = false
      })
      .catch(e => {
        console.log('error',e)
        this.isShowNativeResult = false
        this.isShowGankIoResult = false
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
