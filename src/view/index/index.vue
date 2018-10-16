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
    <van-notice-bar
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
      :left-icon="notice_icon"
    />
    <van-cell-group>
      <van-cell value="猜你喜欢" />
    </van-cell-group>
    <van-list
      v-model="loading"
      :finished="finished"
      @load="onLoad"
    >
      <van-row gutter="6">
        <van-col span="12" class="index-goods-row" v-for="item in list" :key="item" :title="item">
          <div class="index-goods">
            <img src='https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg' class="index-goods-image" />
            <div class="index-goods-name">测试商品测试商品测试商品测试商品测试商品测试商品测试商品测试商品</div>
            <div>
              <span class="index-goods-price">￥1.00</span>
              <span class="index-goods-paid">101人付款</span>
            </div>
            <div class="clear"></div>
          </div>
        </van-col>
      </van-row>
    </van-list>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home" :to="{ name: 'index'}">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="more-o" :to="{ name: 'goods_category'}">分类</van-tabbar-item>
      <van-tabbar-item icon="cart" info="5" :to="{ name: 'cart'}">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" :to="{ name: 'user'}">我的</van-tabbar-item>
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
  Row,
  Col,
  NoticeBar,
  CellGroup,
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
    [TabbarItem.name]: TabbarItem,
    [Row.name]: Row,
    [Col.name]: Col,
    [NoticeBar.name]: NoticeBar,
    [CellGroup.name]: CellGroup,
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
      active: 0,
      notice_icon: require('../../assets/index/notice.png'),
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
  &-goods{
    background: #FFFFFF;
    padding-botton: 20px;
  }
  &-goods-row{
    margin-bottom: 6px;
  }
  &-goods-image{
    width: 100%;
  }
  &-goods-name{
    font-size: 10px;
    padding: 2px 8px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
    -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
    -webkit-line-clamp: 2; /** 显示的行数 **/
    overflow: hidden;  /** 隐藏超出的内容 **/
  }
  &-goods-price{
    padding: 0px 8px;
    font-size: 10px;
    color: #FF0000;
  }
  &-goods-paid{
    font-size: 10px;
    color: #ADADAD;
    float: right;
  }
}
.clear{
  clear: both;
}
</style>