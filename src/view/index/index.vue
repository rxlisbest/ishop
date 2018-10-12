<template>
  <div class="index">
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="index-banner" />
      </van-swipe-item>
    </van-swipe>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <van-cell
        v-for="item in list"
        :key="item"
        :title="item"
      />
    </van-list>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">标签</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {
  NavBar,
  Icon,
  Search,
  Swipe, 
  SwipeItem,
  Lazyload,
  List,
  Cell,
  Tabbar,
  TabbarItem,
} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [List.name]: List,
    [Cell.name]: Cell,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },
  data() {
    return {
      keyword: '',
      images: [
        'http://dingyue.nosdn.127.net/BuI8LD=X7TN4qEO1PAUCmAKxnDEMkUC4Yffy36felamir1537621370626compressflag.jpg',
        'http://dingyue.nosdn.127.net/WQZSpR8fyXSapmRZ7gcJFK6iql0blq5ZXxB8MNx1NwFoY1537621370626compressflag.jpg'
      ],
      list: [],
      loading: false,
      finished: false,
      active: 0
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    onSearch() {
      
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
};
</script>

<style lang="less">
.index {
  &-banner{
    width: 100%;
    max-height: 200px;
  }
}
</style>