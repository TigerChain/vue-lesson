<template>
  <div class="hello">
    <mt-button type="primary" @click.native="show('primary')">primary</mt-button>
    <mt-button type="danger" @click.native="show('danger')">danger</mt-button>
    <mt-button icon="more" class="buttonMargin">更多</mt-button>
    <mt-button size="large" class="buttonMargin">large</mt-button>
    <!-- Navbar 测试 -->
    <div class="">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">选项一</mt-tab-item>
        <mt-tab-item id="2">选项二</mt-tab-item>
        <mt-tab-item id="3">选项三</mt-tab-item>
      </mt-navbar>

<!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <mt-cell v-for="n in 10" :title="'内容 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      selected:'1',
    }
  },
  methods:{
    show(msg) {
      console.log(msg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buttonMargin {
  margin-top: 10px;
}
</style>
