import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '../components/view/login'
import reg from '../components/view/reg'
import Admin from '../components/view/Admin'
import adminFace from '../components/view/adminFace'
import NavMenu from '../components/view/NavMenu'

Vue.use(Router)
Vue.prototype.rous=Router

const routers = [
  {path: '/login', name: 'login', component: login},
  {path: '/reg', name: 'reg', component: reg},
  {path: '/Admin', name: 'Admin', component: Admin},
  {path: '/adminFace', name: 'adminFace', component: adminFace,
    children:[
      {path:'/UserMenu',name:'UserMenu',component:()=>import ('../components/view/UserManager')}
    ]
  },
  {path: '/', name: 'NavMenu', component: NavMenu,
    children:[
      {path:'/XHcp',name:'XHcp',component:()=>import ('../components/view/XHcp')},
    ]
  },
  {path: '/NavMenu', name: 'NavMenu', component: NavMenu,
    children:[
      {path:'/XHcp',name:'XHcp',component:()=>import ('../components/view/XHcp')},
    ]
  },
]
export default new Router({
  mode: 'history',
  routes: routers
  // routes: [
  //   {
  //     // path: '/',
  //     // name: 'HelloWorld',
  //     // component: HelloWorld
  //   }
  // ]
})
