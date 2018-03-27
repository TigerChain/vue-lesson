<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="Router"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'slide-right'  // 默认动态路由变化为slide-right
    }
  },
  watch: {
　　　'$route' (to, from) {
　　　　let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
　　　　　if(isBack) { // 如果是返回，则左侧滑到右边去「滑入右边」，否则打开界面从右边滑到左边去
　　　　　　this.transitionName = 'slide-right'
　　　　　} else {
　　　　　　this.transitionName = 'slide-left'
　　　　　}
　　     this.$router.isBack = false
　　 }
　 }
}
</script>

<style>
.Router {
     position: absolute;
     width: 100%;
     transition: all .8s ease;
}

.slide-left-enter,
 .slide-right-leave-active {
     opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
   opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
</style>
