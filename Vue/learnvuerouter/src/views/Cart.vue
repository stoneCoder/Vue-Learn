<template lang="">
    <div>
        <h2>我是购物车</h2>
        {{message}}
    </div>
</template>
<script>
export default {
  data() {
    return {
      message: "我是关于",
    };
  },
  created() {
    console.log("About创建视图");
  },
  destroyed() {
    console.log("About销毁视图");
  },
};
</script>
<style lang="">
</style>