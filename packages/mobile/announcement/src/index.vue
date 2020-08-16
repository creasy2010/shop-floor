<template>
  <div class="annouceComment">
    <div class="annouce-box">
      <img class="notice-icon" src="./assets/notice.png"/>
      <span class="notice-label">公告：</span>
      <spna class="notice-content">公告：本店应装修升级，部分家具暂时无货，请谨慎选择......</spna>
    </div>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'announcement',
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
  .annouceComment {
    width: 100%;
    height: 100%;
  }
  .annouce-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0.75rem;
    height: 1.875rem;
    background: #FEFFBE;
  }
  .notice-icon{
    width: 1.03rem;
    height: 0.875rem;
    margin-right 0.4375rem;
  }
  .notice-label{
    font-size:0.875rem ;
    color: #333;
  }
  .notice-content{
    font-size:0.875rem ;
    color: #333;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
</style>
