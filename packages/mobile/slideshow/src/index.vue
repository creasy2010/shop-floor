<template>
  <div class="slideshow">
    <el-carousel class="carousel-box" :style="{height:imgHeight}">
      <el-carousel-item v-for="item in images" :key="item">
        <img class="image" :src="item"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'
  export default {
    mixins: [VueExtend.mixin],
    name: 'slideshow',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
      images: { // 所有格子的配置信息
        type: Array,
        editor: {
          ignore: true // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
        }
      },
      imgHeight: {
        type: String,
      }
    },
    computed: {
    },
    editorMethods: {
    },
    data: function () {

    },
    mounted: function () {
      console.log(this)
    },
    updated: function () {
      console.log(this)
    },
    methods: {},
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slideshow {
    width: 100%;
    height: 100%;
  }
  .carousel-box{
    width:100%;
    /*height:23.97rem;*/
  }
  .image{
    width:100%;
    height:100%;
  }
</style>
