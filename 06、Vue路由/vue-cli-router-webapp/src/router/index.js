import Vue from 'vue'
import Router from 'vue-router'
import First from '@/components/First'
import SecondPage from '@/components/Second'

Vue.use(Router)

Router.prototype.goBack = function () {
　　this.isBack = true
　　window.history.go(-1)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'First',
      component: First
    },
    {
      path:'/second',
      name:'second',
      component:SecondPage
    }
  ]
})
