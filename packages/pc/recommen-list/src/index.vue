<template>
  <div class="recommen-list">
    <el-main class="recommen-main">
      <img class="left-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1572709130,55384343&fm=26&gp=0.jpg"/>
      <div class="right-content">
        <div class="goods-item" v-for="item in 4">
          <img class="goods-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1572709130,55384343&fm=26&gp=0.jpg" />
          <div class="goods-info">
            <div class="goods-title">品牌名称商品名称品牌名称商品名称 </div>
            <div class="goods-price-info">
              <div class="left-price">
                <span class="unit">RMB</span>
                <span class="price">580.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'recommen-list',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
    },
    computed: {
    },
    editorMethods: {
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component {
    width: 100%;
    height: 100%;
  }
  .recommen-main{
    width:1280px;
    border:1px solid rgba(203,203,203,1);
    box-shadow:0px 0px 12px 0px rgba(0, 0, 0, 0.14);
    padding:54px;
    display :flex;
    flex-direction :row;
  }
  .left-img{
    width:520px;
    height:848px;
    margin-right :24px;
  }
  .right-content{
    display :flex;
    flex-direction :row;
    flex-wrap :wrap;
    width:626px;
  }
  .goods-item{
    width:300px;
    height:408px;
    display :flex;
    flex-direction :column;
    position:relative;
    margin-bottom :26px;
    margin-right :26px;
  }
  .goods-item:nth-child(2n){
    margin-right :0;
  }
  .goods-img{
    width:300px;
    height:300px;
  }
  .goods-info{
    display :flex;
    flex-direction :column;
    background :#EEEEEE;
    padding:20px 15px;
  }
  .goods-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:16px;
    color:#000;
    margin-bottom :12px;
    height:38px;
  }
  .goods-price-info{
    display :flex;
    flex-direction :row;
    justify-content: space-between;
    align-items :center;
  }
  .left-price{
    display :flex;
    flex-direction :row;
    align-items :flex-end;
  }
  .unit{
    font-size :14px;
    color:#000;
    margin-right :10px;
    margin-bottom :2px;
  }
  .price{
    font-size :20px;
    color:#EB0000;
  }
</style>
