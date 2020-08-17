<template>
  <div class="nav">
    <el-menu
     :default-active="activeIndex2"
     class="el-menu-nav"
     mode="horizontal"
     @select="handleSelect"
     background-color="#567D83"
     text-color="#fff"
     active-text-color="#567D83">
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="2">餐桌</el-menu-item>
      <el-menu-item index="3">餐椅</el-menu-item>
      <el-menu-item index="4">沙发</el-menu-item>
      <el-menu-item index="5">床</el-menu-item>
      <el-menu-item index="6">床垫</el-menu-item>
      <el-menu-item index="7">灯</el-menu-item>
      <el-menu-item index="8">橱柜</el-menu-item>
      <el-menu-item index="9">办公家具</el-menu-item>
      <el-menu-item index="10">所有商品</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'nav',
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
  .nav {
    width: 100%;
    height: 100%;
  }
  .el-menu-nav{
    height:40px;
    border:0;
    display :flex;
    flex-direction :row;
    justify-content :center;
  }
  .el-menu--horizontal>.el-menu-item{
    height:40px;
    line-height:40px;
    border:0;
  }
  .el-menu--horizontal>.el-menu-item a{
    text-decoration:none;
  }
  .el-menu-item.is-active {
    background-color: #fff !important;
    height:40px;
  }
</style>
