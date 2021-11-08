<template lang="">
    <div>
        <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon"/>
        <img slot="item-icon-active"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon"/>
        <img slot="item-icon-active"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon"/>
        <img slot="item-icon-active"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon"/>
        <img slot="item-icon-active"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
    </div>
</template>
<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";

export default {
  name: "main-tab-bar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style lang="">
</style>