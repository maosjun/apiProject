import VueRouter from 'vue-router'
import Vue from 'vue'
// 引入Home路由
import Home from '@/components/home/Home'
// 路由注册
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [{ path: '/', redirect: '/home' }, { path: '/home', component: Home }]
})

export default router
