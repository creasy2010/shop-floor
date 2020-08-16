<template>
  <div class="coupons">
    <el-main class="coupons-main">
      <div class="coupon-item" v-for="item in 4">
        <div class="coupon-box">
          <span class="coupon-title">优惠券</span>
          <span class="coupon-price">20</span>
          <span class="coupon-use">无门槛使用</span>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'coupons',
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
  .coupons {
    width: 100%;
    height: 100%;
  }
  .coupons-main{
    width:100%;
    background :#f4f4f4;
    padding:1.5625rem 0rem;
    display flex;
    flex-direction: row;
  }
  .coupon-item{
    width:25%;
    display flex;
    flex-direction :column;
    align-items :center;
    justify-content :center;
  }
   .coupon-box{
     width:4.59375rem;
     height:5.4375rem;
     background :#567D83;
     display flex;
     flex-direction :column;
     align-items :center;
     justify-content :center;
   }
  .coupon-title{
    font-size :0.75rem;
    color:#fff;
    transform :scale(0.83);
  }
  .coupon-price{
    font-size :1.9375rem;
    color:#fff;
  }
  .coupon-use{
    font-size :0.75rem;
    color:#fff;
    transform :scale(0.83);
  }
</style>
