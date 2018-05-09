<template lang="html">
  <div class="">

    <message
      class="itemstyle"
      v-for="(item,index) in datas.data"
      :key="index"
      :id="item.id"
      :title="item.title"
      :subtitle="item.subtitle"
      :sendtime="item.time"
      :imgurl="require('../../assets/a_7.png')"
      :itemClick="clickitem"

    ></message>
  </div>
</template>

<script>
import Message from '../common/Message'
import messagelist from '../../json/messagelist.json'
export default {

  data() {
    return {
      datas:messagelist
    }
  },
  methods:{
    clickitem(n) {
        console.log(n)
    }
  },

  components:{
    'message':Message
  }
}
</script>

<style lang="css" scoped>

.itemstyle{
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom:1px solid #d9d9d9;
}
</style>
