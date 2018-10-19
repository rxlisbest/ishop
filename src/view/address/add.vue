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
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import {
  NavBar,
  AddressEdit,
} from 'vant';
export default {
  components: {
    [NavBar.name]: NavBar,
    [AddressEdit.name]: AddressEdit,
  },
  data() {
    return {
      areaList,
      searchResult: []
    };
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
    }
  }
};
</script>

<style lang="less">
.index{
  &-shop{
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