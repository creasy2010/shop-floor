<template>
  <div class="goodsList">
    <el-main class="goods-main">
      <div class="goods-item" v-on:click="onClick(item)" v-for="item in fixGoodsList">
        <div class="recommen" v-show="checklist ? checklist.includes(4) : []"><span class="recommen-text">{{item.brandName}}</span></div>
        <img class="goods-img" v-bind:src="item.image" />
        <div class="goods-info">
          <div class="goods-title" v-show="checklist ? checklist.includes(1) : true">{{item.name}}</div>
          <div class="goods-price-info">
            <div class="left-price" v-show="checklist ? checklist.includes(2) : true">
              <span class="unit">RMB</span>
              <span class="price">{{item.price}}</span>
            </div>
            <div class="right-promotion" v-show="checklist ? checklist.includes(3): true">
              <span class="promotion-price">满XXX-XXX</span>
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
    name: 'goods-list',
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
      onClick (skuInfo) {
        window.parent.postMessage({
          action: 'click',
          payload: skuInfo
        }, '*')
      }
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
  .goods-main{
    width:100%;
    background :#f4f4f4;
    padding:1.5625rem 0.75rem;
    display flex;
    flex-direction: row;
    flex-wrap :wrap;
    justify-content :space-between;
  }
  .goods-item{
    width:calc((100% - 0.2rem)/2);
    display :flex;
    flex-direction :column;
    position:relative;
    margin-bottom :0.25rem;
  }
  .recommen {
    width: 1.5625rem;
    height: 1.5625rem;
    background :#A40000;
    display :flex;
    align-items :center;
    justify-content :center;
    position:absolute;
    left:0.5rem;
    top:0.625rem;
    border-radius :0.125rem;
  }
  .recommen-text{
    font-size :0.75rem;
    transform :scale(0.65);
    color:#fff;
    text-align: center;
  }
  .goods-img{
    width:100%;
  }
  .goods-info{
    display :flex;
    flex-direction :column;
    background :#EEEEEE;
    padding:0.625rem 0.5rem;
  }
  .goods-title{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
    font-size:0.75rem;
    color:#000;
    margin-bottom :0.625rem;
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
    font-size :0.5rem;
    color:#000;
    transform :scale(0.67);
    transform-origin :left;
  }
  .price{
    font-size :0.875rem;
    color:#EB0000;
    max-width:2.5rem;
    white-space :nowrap;
    text-overflow :ellipsis;
    overflow :hidden;
  }
  .right-promotion{
    height:1rem;
    border-radius :0.5625rem;
    border:1px solid #EB0000;
    display:flex;
    align-items:center;
    justify-content :center;
  }
  .promotion-price{
    font-size :0.75rem;
    transform :scale(0.833);
    color:#EB0000;
    max-width:3.5rem;
    white-space :nowrap;
    text-overflow :ellipsis;
    overflow :hidden;
  }
</style>
