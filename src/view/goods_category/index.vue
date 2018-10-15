<template>
  <div class="goods-category">
    <van-search
      v-model="keyword"
      placeholder="请输入搜索关键词"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
    <van-row>
      <van-col span="6" class="goods-category-left">
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item active">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
        <div class="goods-category-left-item">
          <span>一级分类</span>
        </div>
      </van-col>
      <van-col span="18" class="goods-category-right">
        <span>二级分类</span>
        <div class="goods-category-right-items">
          <van-row>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
          </van-row>
        </div>
      </van-col>
      <van-col span="18" class="goods-category-right">
        <span>二级分类</span>
        <div class="goods-category-right-items">
          <van-row>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
            <van-col span="8" class="goods-category-right-item">
              <a href="#">
                <img src="https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/f9198618367adab4d30540358cd4b31c8601e4eb.jpg">
                <span>三级分类</span>
              </a>
            </van-col>
          </van-row>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import {
  NavBar,
  Icon,
  Search,
  Cell,
  Row,
  Col,
} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
    [Search.name]: Search,
    [Cell.name]: Cell,
    [Row.name]: Row,
    [Col.name]: Col,
  },
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    onSearch() {
      alert(2)
    }
  }
};
</script>

<style lang="less">
.goods-category {
  &-left {
    background: #FFFFFF;
    height: 100%;
    &-item{
      text-align: center;
      position: relative;
      height: 2.5em;
      display: flex;
      overflow: hidden;
      align-items: center;
      & span{
        margin: 0 auto;
        font-size: 12px;
      }
      &.active{
        background: #f8f8f8 !important;
        border-left: solid 2px #FFF68F;
      }
    }
  }
  &-right{
    padding: 1em;
    &-items{
      background: #FFFFFF;
      margin-top: 6px;
    }
    &-item{
      padding: 0.8em 0.8em;
      text-align: center;
      & img{
        width: 100%;
      }
      & span{
        font-size: 10px;
        color: rgb(102, 102, 102);
      }
    }
    & span{
      font-size: 10px;
      color: rgb(102, 102, 102);
    }
  }
}
</style>