<template>
  <div id="app">
    <!-- <h2>我是首页</h2> -->
    <!-- <router-link to="/home" tag="button" replace>首页</router-link> -->
    <!-- <button @click="homeClick">首页</button> -->
    <!-- <router-link to="/about" tag="button" replace>关于</router-link> -->
    <!-- <router-link :to="'/user/'+userId" tag="button">用户</router-link> -->
    <!-- <router-link :to="{path:'/profile',query:{name:'神马'}}" tag="button">用户</router-link> -->
    <!-- <button @click="profileClick">用户</button> -->
    <!-- <keep-alive exclude="About,User">  防止视图多次创建 -->
      <!-- <router-view></router-view> -->
    <!-- </keep-alive> -->
    <router-view></router-view>
    <main-table-bar></main-table-bar>
    
    
  </div>
</template>

<script>

import MainTableBar from './components/MainTableBar.vue'

export default {
  name: 'App',
  components:{
    MainTableBar
  },
  methods: {
    homeClick(){
      this.$router.push('/home')
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'神马2'
        }
      })
    }
  },
  data() {
    return {
      userId:'zhangsan'
    }
  }
}
</script>

<style>
  @import url("./assets/css/base.css");
</style>
