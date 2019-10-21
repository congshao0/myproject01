import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
import Login from './components/Login/Login.vue'
import Register from './components/Login/Register.vue'
import Order from './components/food/Order.vue'


Vue.use(Router)
export default new Router({
  routes: [

    {path:'/Login',component:Login},
    {path:'/Register',component:Register},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
    {path:'/Order',component:Order}
  ]
})
