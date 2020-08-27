<template>
  <div class="title">
<!--    <el-header class="title-header">-->
<!--      <span class="cn-title">热销推荐</span>-->
<!--      <span class="en-title">Hot selling recommendation</span>-->
<!--    </el-header>-->
    <el-main class="hot-main">
      <div class="hot-item" v-for="item in fixGoodsList">
        <div class="img-box">
            <img class="hot-img" :src="item.image" />
        </div>
        <div class="hot-info">
          <div class="hot-title" v-show="checklist ? checklist.includes(1) : true">{{item.name}}</div>
          <div class="hot-spec">{{item.spec}}</div>
          <div class="hot-price-info" v-show="checklist ? checklist.includes(2) : true">
              <span class="unit">RMB</span>
              <span class="price">{{item.price}}</span>
          </div>
          <div class="right-bug" v-show="checklist ? checklist.includes(3): true">
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
      checklist: {
        type: Array,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: []
        }
      },
      fixGoodsList: {
        type: Array,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: []
        }
      },
    },
    computed: {
    },
    editorMethods: {
    },
    mounted: function () {
      console.log(this.checklist)
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
    height:4.8125rem;
    background:#848F79;
    display :flex;
    flex-direction :column;
    align-items :center;
    justify-content :center;
  }
  .cn-title{
    font-size :1.125rem;
    color:#fff;
  }
  .en-title{
    font-size :0.375rem;
    color:#fff;
    transform :scale(0.5);
  }
  .hot-main{
    width:100%;
    background :#f4f4f4;
    padding:1.5625rem 0.75rem;
    display flex;
    flex-direction: column;
  }
  .hot-item{
     display :flex;
     flex-direction :row;
     margin-bottom :0.75rem;
   }
  .img-box{
      width: 50%;
      padding-bottom: 50%;
      height: 0px;
      position: relative;
  }
  .hot-img{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
  }
  .hot-info{
    width:50%;
    display :flex;
    flex-direction :column;
    justify-content :center;
    padding:0rem 1rem;
    background :#e5e5e5;
    position:relative;
  }
  .hot-title{
    display: -webkit-box;
      /* autoprefixer: off */
      -webkit-box-orient:vertical;
      /* autoprefixer: on */
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:0.75rem;
    color:#000;
    margin-bottom :0.625rem;
  }
  .hot-spec{
    display: -webkit-box;
      /* autoprefixer: off */
      -webkit-box-orient:vertical;
      /* autoprefixer: on */
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:0.75rem;
    transform :scale(0.83);
    color:#666;
    transform-origin :left;
  }
  .hot-price-info{
    display :flex;
    flex-direction :row;
    align-items :center;
  }
  .unit{
    font-size :0.5rem;
    color:#000;
    transform :scale(0.67);
    transform-origin :left;
  }
  .price{
    font-size :0.875rem;
    color:#EB0000;
  }
  .right-bug{
    display :flex;
    flex-direction :row;
    justify-content :flex-end;
    margin-bottom :0.2rem;
      position:absolute;
      right:0.3rem;
      bottom:0.5rem;
  }
  .buy-btn{
    font-size :0.75rem;
    color:#000;
    transform :scale(0.5);
    transform-origin :right;
  }
</style>
