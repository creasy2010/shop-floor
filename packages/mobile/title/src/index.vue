<template>
  <div class="title">
    <el-header v-if="style===1" class="title-header">
      <span class="cn-title">{{title}}</span>
      <span class="en-title">{{subTitle}}</span>
    </el-header>
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
      style: {
        type: Number,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: 1
        }
      },
      title: {
        type: String,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: '一级标题'
        }
      },
      subTitle: {
        type: String,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: '二级标题'
        }
      },
    },
    computed: {
    },
    editorMethods: {
    },
    mounted: function () {
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
</style>
