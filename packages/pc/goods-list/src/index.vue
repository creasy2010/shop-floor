<template>
  <div class="goodsList">
    <el-header class="goods-header">
      <span class="cn-title">更多推荐</span>
      <span class="en-title">MORE recommendation</span>
    </el-header>
    <el-main class="goods-main">
      <div class="goods-item" v-for="item in 8">
        <div class="recommen">掌柜推荐</div>
        <img class="goods-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1572709130,55384343&fm=26&gp=0.jpg" />
        <div class="goods-info">
          <div class="goods-title">品牌名称商品名称品牌名称商品名称 </div>
          <div class="goods-price-info">
            <div class="left-price">
              <span class="unit">RMB</span>
              <span class="price">580.00</span>
            </div>
<!--            <div class="right-promotion">-->
<!--              <span class="promotion-price">满150-100</span>-->
<!--            </div>-->
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
    name: 'goods-list',
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
  .goodsList {
    width: 100%;
    height: 100%;
  }
  .goods-header{
    width:100%;
    height:86px;
    background:#848F79;
    display :flex;
    flex-direction :column;
    align-items :center;
    justify-content :center;
  }
  .cn-title{
    font-size :28px;
    color:#fff;
  }
  .en-title{
    font-size :12px;
    color:#fff;
    transform :scale(0.83);
  }
  .goods-main{
    width:1280px;
    background :#f4f4f4;
    padding:40px 0;
    display flex;
    flex-direction: row;
    flex-wrap :wrap;
  }
  .goods-item{
    width:300px;
    display :flex;
    flex-direction :column;
    position:relative;
    margin-bottom :25px;
    margin-right :26px;
  }
  .goods-item:nth-child(4n){
    margin-right :0;
  }
  .recommen {
    width: 50px;
    height: 50px;
    background :#A40000;
    display :flex;
    align-items :center;
    justify-content :center;
    font-size :18px;
    color:#fff;
    position:absolute;
    left:16px;
    top:20px;
    border-radius :4px;
    text-align: center;
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
