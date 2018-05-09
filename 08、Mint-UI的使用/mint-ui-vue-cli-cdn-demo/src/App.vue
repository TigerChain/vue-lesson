<template>
  <div id="app">
    <mt-button type="default">default</mt-button>
		<mt-button type="primary">primary</mt-button>
		<mt-button type="danger" >danger</mt-button>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
