<template lang="html">
  <div class="">
    我是一个单个组件
    <Login></Login>
  </div>
</template>

<script>
import Login from './login'
export default {
  name: 'first',
  components: {
    Login
  }
}
</script>

<style lang="css" scoped>
</style>
