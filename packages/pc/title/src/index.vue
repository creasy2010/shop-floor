<template>
  <div class="title">
    <el-header class="title-header">
      <span class="cn-title">热销推荐</span>
      <span class="en-title">Hot selling recommendation</span>
    </el-header>
    <el-main class="hot-main">
      <div class="hot-item" v-for="item in 4">
        <img class="hot-img" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1572709130,55384343&fm=26&gp=0.jpg" />
        <div class="hot-info">
          <div class="hot-title">品牌名称商品名称品牌名称商品名称 </div>
          <div class="hot-spec">商品描述/商品描述/商品描述</div>
          <div class="hot-price-info">
            <span class="unit">RMB</span>
            <span class="price">580.00</span>
          </div>
          <div class="right-bug">
            <span class="buy-btn">立即购买 >></span>
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
    name: 'title',
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
  .title {
    width: 100%;
    height: 100%;
  }
  .title-header{
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
  .hot-main{
    width:1280px;
    padding:40px 0;
    margin :0 auto;
    display flex;
    flex-direction: row;
    flex-wrap wrap;
    justify-content :space-between;
  }
  .hot-item{
    width:620px;
    display :flex;
    flex-direction :row;
    margin-bottom :40px;
  }
  .hot-img{
    width:310px;
    height:310px;
  }
  .hot-info{
    width:310px;
    display :flex;
    flex-direction :column;
    justify-content :flex-end;
    padding:0rem 28px;
    background :#e5e5e5;
  }
  .hot-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:16px;
    color:#000;
  }
  .hot-spec{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:14px;
    color:#666;
    margin-bottom :20px;
    margin-top :15px;
  }
  .hot-price-info{
    display :flex;
    flex-direction :row;
    align-items :center;
  }
  .unit{
    font-size :14px;
    color:#000;
  }
  .price{
    font-size :20px;
    color:#EB0000;
  }
  .right-bug{
    display :flex;
    flex-direction :row;
    justify-content :flex-end;
    margin-bottom :40px;
  }
  .buy-btn{
    font-size :16px;
    color:#000;
  }
</style>
