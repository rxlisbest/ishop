<template>
  <div class="index">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-tabs v-model="active2">
      <van-tab title="全部"></van-tab>
      <van-tab title="待付款"></van-tab>
      <van-tab title="待发货"></van-tab>
      <van-tab title="待收货"></van-tab>
      <van-tab title="待评价"></van-tab>
    </van-tabs>
    <div class="index-shop">
      <div class="index-shop-item">
        <van-cell-group>
          <van-cell value="Apple官方旗舰店" />
        </van-cell-group>
        <div class="card-goods">
          <div
            class="card-goods__item"
            v-for="item in goods"
            :key="item.id"
            :name="item.id"
          >
            <van-card
              :title="item.title"
              :desc="item.desc"
              :num="item.num"
              :price="formatPrice(item.price)"
              :thumb="item.thumb"
            />
          </div>
        </div>
        <div class="index-shop-item-total">
          共3件商品 合计:￥100.00
        </div>
        <van-cell-group>
          <van-cell value="猜你喜欢" />
        </van-cell-group>
      </div>
    </div>
    <ishop-footer :active="active"></ishop-footer>
  </div>
</template>

<script>
import {
  NavBar,
  CellGroup,
  Cell,
  Card, 
  Tab, 
  Tabs,
} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Card.name]: Card,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
  },
  data() {
    return {
      active: 3,
      active2: 0,
      goods: [{
        id: '1',
        title: '进口香蕉',
        desc: '约250g，2根',
        price: 200,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
      }, {
        id: '2',
        title: '陕西蜜梨',
        desc: '约600g',
        price: 690,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
      }, {
        id: '3',
        title: '美国伽力果',
        desc: '约680g/3个',
        price: 2680,
        num: 1,
        thumb: 'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
      }]
    };
  },
  computed: {
    submitBarText() {
      const count = this.checkedGoods.length;
      return '结算' + (count ? `(${count})` : '');
    },
    totalPrice() {
      return this.goods.reduce((total, item) => total + (this.checkedGoods.indexOf(item.id) !== -1 ? item.price : 0), 0);
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    formatPrice(price) {
      return (price / 100).toFixed(2);
    },
  }
};
</script>

<style lang="less">
.index{
  &-shop{
    margin-bottom: 60px;
    &-item{
      margin-top: 12px;
      &-total{
        background: #FFFFFF;
        text-align: right;
        font-size: 0.8em;
        padding: 0.6em 1em;
      }
    }
  }
}
</style>