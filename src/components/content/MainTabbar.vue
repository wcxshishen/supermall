<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home"
                    activeColor='pink'>
        <img slot="item-icon"
             src="~assets/img/TabBar/首页1.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/TabBar/首页2.svg"
             alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/shoppingCenter"
                    activeColor='pink'>
        <img slot="item-icon"
             src="~assets/img/TabBar/商城1.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/TabBar/商城2.svg"
             alt="">
        <div slot="item-text">商城</div>
      </tab-bar-item>
      <tab-bar-item path="shoppingCar"
                    activeColor='pink'>
        <img slot="item-icon"
             src="~assets/img/TabBar/购物车1.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/TabBar/购物车2.svg"
             alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/mine"
                    activeColor='green'>
        <img slot="item-icon"
             src="~assets/img/TabBar/我的1.svg"
             alt="">
        <img slot="item-icon-active"
             src="~assets/img/TabBar/我的2.svg"
             alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '../common/tabbar/TabBar.vue'
import TabBarItem from '../common/tabbar/TabBarItem.vue'
export default {
  data() {
    return {}
  },

  components: {
    TabBar,
    TabBarItem
  },

  computed: {},

  mounted() {},

  methods: {}
}
</script>

<style scoped>
</style>