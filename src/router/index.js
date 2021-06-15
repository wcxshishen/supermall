// import Vue from 'vue'
// import VueRouter from 'vue-router'
// 安装
// Vue.use(VueRouter)
// const routers = [
//   {
//     path: '',
//     redirect: '/home'
//   },
//   {
//     path: '/home',
//     component: Home
//   },
//   { path: '/mine', component: Mine },
//   { path: '/shoppingCenter', component: ShoppingCenter },
//   {
//     path: '/shoppingCar',
//     component: ShoppingCar
//   }
// ]
// const router = new VueRouter({
//   routers,
//   mode: 'history'
// })
// 消除同一个路由报错https://blog.csdn.net/luer_LJS/article/details/108362563
// 对replace重写
// const originalPush = VueRouter.prototype.replace
// VueRouter.prototype.replace = function replace(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
// // 对push进行重写
// const VueRouterPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(to) {
//   return VueRouterPush.call(this, to).catch(err => err)
// }

// vue3安装vuerouter
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载
// const Home = () => import('../views/home/Home.vue')
// const Mine = () => import('../views/mine/My.vue')
// const ShoppingCenter = () => import('../views/shoppingCenter/Shop.vue')
// const ShoppingCar = () => import('../views/shoppingCar/ShoppingCar.vue')

import Home from '../views/home/Home.vue'
import Mine from '../views/mine/My.vue'
import ShoppingCenter from '../views/shoppingCenter/Shop.vue'
import ShoppingCar from '../views/shoppingCar/ShoppingCar.vue'

const routerHistory = createWebHistory()
const routers = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  { path: '/mine', component: Mine },
  { path: '/shoppingCenter', component: ShoppingCenter },
  {
    path: '/shoppingCar',
    component: ShoppingCar
  }
]
const router = createRouter({
  history: routerHistory,
  routers
})

export default router
