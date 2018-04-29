import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes,
  // mode: 'history',
  // base: '/test',     //部署到字母录
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { x: 0, y: 0 }
    if (savedPosition) {
      return savedPosition
    } else {
    }
  }
})



export default router
