<template>
  <div class="title">
    <el-header class="title-header">
      <span class="cn-title">热销推荐</span>
      <span class="en-title">Hot selling recommendation</span>
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
</style>
