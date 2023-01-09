import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from '../view/Config.vue'
import MyHome from '../view/MyHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'myhome',
    component: MyHome
  },
  {
    path: '/config',
    name: 'config',
    component: Config
  }
  // {
  //   path: '/register',
  //   name: 'Register',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('../views/Login.vue')
  // },
  // {
  //   path: '/users',
  //   name: 'users',
  //   component: () => import('../views/user/index.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err=>{
//     throw(err) // 抛出错误，控制台会显示错误信息，如果不抛出，控制台不会报错
//     return err;
//   })
// }

// src/router/index.js
// Vue.use(Router)
// const router = new Router({
//   routes
// })

const VueRouterPush = Router.prototype.push
Router.prototype.push = function push (to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

export default router
