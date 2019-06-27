import Vue from 'vue'
import Router from 'vue-router'
// const Index = () => import('../pages/index.vue')
import Index from '../pages/index.vue'
Vue.use(Router)

const home = [
  {
    path: '/',
    component: Index
  }
]

// 整合路由
const routes = [
  ...home
]

// 生成一个新路由
const routers = new Router({
  routes
})

// 输出路由
export default routers


