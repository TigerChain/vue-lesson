<template>
  <div class="hello">
    <button class="mybtn" type="button" name="button" @click="getData">点击请求</button>
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
  </div>
</template>

<script>
// 局部使用
// import ajax from '../js/customAjax'
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[]
    }
  },
  methods:{
    getData() {
      var that = this
      // 全局注册可以添加一个 this
      this.ajax({
  			methods:'GET',
  			url:'../static/mydata.json',
  			data:{},
  			success:function(res){
  				console.log(res)
          console.log('请求成功，成功的状态码是：'+res.status)
  				if(res.status=='0001'){
            that.datas = res.datas
  				}
  			},
  			faile:function(res) {
          console.log(res)
  			}
  		})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mybtn {
  background-color: red;
  padding: 10px;
  font-size: 16px;
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
</style>
