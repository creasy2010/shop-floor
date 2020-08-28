<template>
  <div class="catenav">
    <div class="nav-box">
      <div v-on:click="onClick(item)" class="nav-item" v-for="item in navs">
        <img class="nav-img" :src="item.url"/>
        <span class="nav-text">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'catenav',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
      navs: { // 所有格子的配置信息
        type: Array,
        editor: {
          ignore: true // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
        }
      }
    },
    computed: {
    },
    editorMethods: {
    },
    data: function () {
      return {
      }
    },
    mounted: function () {
    },
    methods: {
      onClick (item) {
        window.parent.postMessage({
          action: 'click',
          payload: item.linkInfo
        }, '*')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .catenav {
    width: 100%;
    height: 100%;
  }
  .nav-box{
    display flex;
    flex-direction row;
    flex-wrap wrap;
    background :#f4f4f4;
    padding:1.5625rem 0.2rem 0.5625rem;
  }
  .nav-item{
    width:25%;
    display flex;
    flex-direction column;
    align-items center;
    margin-bottom :1rem;
  }
  .nav-img{
    width:3.75rem;
    height:3.75rem;
    border-radius :100%;
    margin-bottom :0.375rem;
  }
  .nav-text{
    font-size :0.75rem;
    color:#000;
  }
</style>
