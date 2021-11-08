<template>
    <div>
        <h2>我是用户页面</h2>
        <h2>{{userId}}</h2>
    </div>
</template>
<script>
export default {
    computed:{
        userId(){
            return this.$route.params.userId
        }
    },
    created() {
        console.log('User创建视图');
    },
    destroyed() {
        console.log('User销毁视图');
    },
}
</script>
<style lang="">
    
</style>