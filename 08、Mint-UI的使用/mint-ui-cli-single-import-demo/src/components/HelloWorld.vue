<template>
  <div class="hello">
    <mt-button type="primary" size="large" @click.native="showActionSheet">primary</mt-button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      actions:[],
      sheetVisible:false,
    }
  },
  methods:{
    showActionSheet() {
      this.sheetVisible = true
    },
    tackPhoto() {
      console.log('调用拍照了')
    },
    openAlbum() {
      console.log('调用打开相册')
    }
  },
  created() {
    this.actions = [
      {name:'拍照',method:this.tackPhoto},
      {name:'打开相册',method:this.openAlbum}
    ]
  }
}
</script>

<style scoped>

</style>
