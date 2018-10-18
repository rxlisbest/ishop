<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" :to="{name: 'index'}">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="more-o" :to="{name: 'goods_category'}">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" info="5" :to="{name: 'cart'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" :to="{name: 'user'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  Tabbar,
  TabbarItem,
} from 'vant';
export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
  name: 'ishop-footer',
  props: {
    active: Number
  }
}
</script>

<style>
</style>
