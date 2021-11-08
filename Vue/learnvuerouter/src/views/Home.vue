<template lang="">
    <div>
        <h2>我是首页</h2>
        {{message}}
        <br>
        <router-link to="/home/news">新闻</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message:'我是Home'
        }
    },
    created() {
        console.log('Home创建视图');
    },
    destroyed() {
        console.log('Home销毁视图');
    },
    activated() {
        console.log('只有使用keepalive标签才生效');
    },
}


</script>
<style lang="">
    
</style>