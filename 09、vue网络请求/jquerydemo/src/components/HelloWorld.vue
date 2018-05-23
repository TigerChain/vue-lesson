<template>
  <div class="hello">

    <button class="btn" type="button" name="button" @click="getdata">jquery ajax 点击请求</button>

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
export default {
  name: 'HelloWorld',
  data () {
    return {
      datas:[]
    }
  },
  methods:{
    getdata() {
      var that = this
      $.ajax({
        type:'GET',
        url:'../static/mydata.json',
        dataType:"json",
        success:function(res){
          if(res.status =='0001'){
            that.datas = res.datas
          }
          console.log(res)
        },
        error:function(error) {
          console.log('error')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn {
  background-color: red;
  padding: 10px;
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
