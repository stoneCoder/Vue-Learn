import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('../views/Home.vue') //路由懒加载
const Category = () => import('../views/Category.vue')
const News = () => import('../views/News.vue')

const Cart = () => import('../views/Cart.vue')
const User = () => import('../views/User.vue')

const Profile = () => import('../views/Profile.vue')

//通过Vue.use(插件)，安装插件
Vue.use(Router)

export default new Router({
  //配置路由和组件之间的应用关系
  routes: [
    {
      path: '',
      //首页重定向
      redirect: '/home',
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'news',
          component:News
        }
      ] 
    },
    {
      path:'/category',
      component:Category
    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/user/:userId',
      component: User,
    },
    {
      path: '/profile',
      component: Profile,
    }
  ],
  mode:'history',
  linkActiveClass:'active'
})
