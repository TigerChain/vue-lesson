<template>
  <div class="hello">
    <span class="title">async/await 封装 fetch 请求</span> </br>

    <div class="btns">
      <button type="button" name="button" @click="getData">本地请求</button>
      <button type="button" name="button" @click="getGankData">本地 gankio 请求</button>
    </div>

    <!-- 本地请求  -->
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
    // 请求本地数据
    async getData() {
      let result = await this.fetchRequest('../static/mydata.json')
      console.log(result)
      this.datas = result.datas
      if(result.datas.length>0){
        this.isShowNativeResult = true
        this.isShowGankIoResult = false
      }else {
        this.isShowGankIoResult = false
        this.isShowNativeResult = false
      }
      // console.log(1)
    },
    // 请求干货集中营远程数据
    async getGankData() {
      let result = await this.fetchRequest('http://gank.io/api/data/福利/12/25')
      console.log(result)
      this.gankIoDatas = result.results
      if(result.results.length >0){
        this.isShowGankIoResult = true
        this.isShowNativeResult = false
      }else {
        this.isShowGankIoResult = false
        this.isShowNativeResult = false
      }
    },
    // async 返回的是一个 promise 这里封装一个基于 async await 的fetch 请求
    async fetchRequest(url){
      try {
        let fetchData = await fetch(url)
        let result = fetchData.json()
        return result
      } catch (e) {
        console.log(e)
      } finally {

      }
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title {
  color:red;
}

.btns{
  margin-top: 10px;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
  padding: 4px;
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
