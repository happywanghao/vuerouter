import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Cube from 'cube-ui'
import FastClick from 'fastclick'

import  { LoadingPlugin,DatetimePlugin,ToastPlugin, ConfirmPlugin } from 'vux'
import VueLazyLoad from 'vue-lazyload'




Vue.use(ConfirmPlugin)

// 默认参数
Vue.use(ToastPlugin, {position: 'top'})

Vue.use(DatetimePlugin)
Vue.use(LoadingPlugin)
FastClick.attach(document.body)//解决点击延时
Vue.use(Cube)
Vue.config.productionTip = false

if(document.documentElement.clientWidth>=750){
    document.documentElement.style.fontSize = '100px';
}else{
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
}//rem布局


/* eslint-disable no-new */
new Vue({
  // el: '#app',
  store,
  router,
  // template: '<App/>',
  components: { App },
  render:h=>h(App)
}).$mount("#app")
