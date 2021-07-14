// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// eslint-disable-next-line no-unused-vars
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/Login.css'
import './assets/css/Index.css'

//定义全局变量
Vue.prototype.$axios = Axios
// step3：使每次请求都会带一个 /api 前缀
Axios.defaults.baseURL = 'api'

Vue.config.productionTip = false

Vue.use(ElementUI) // 使用elementUI
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
