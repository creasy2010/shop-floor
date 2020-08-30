<template>
  <div class="component-editor">
    <div class="goods-title">样式:</div>
    <el-radio-group v-model="componentInfo.style" class="radio-box">
      <el-radio :label="1">默认风格</el-radio>
    </el-radio-group>
    一级标题：
    <el-input v-model="componentInfo.title" placeholder="一级标题"></el-input>
    二级标题:
    <el-input v-model="componentInfo.subTitle" placeholder="二级标题"></el-input>
  </div>
</template>

<script>
  export default {
    name: 'title',
    props: {
      // 编辑器会传递给编辑面板组件的属性值，编辑器可以修改这些值来达到控制组件数据的作用
      componentInfo: {
        style: Number,
        title: String,
        subTitle: String,
      }
    },
    data: function () {
      return {
      }
    },
    computed: {
    },
    watch: {
    },
    created () {},
    mounted: function () {
      if (!this.componentInfo.style) {
        this.$set(this.componentInfo, 'style', 1)
      }
      if (!this.componentInfo.title) {
        this.$set(this.componentInfo, 'title', '一级标题')
      }
      if (!this.componentInfo.subTitle) {
        this.$set(this.componentInfo, 'subTitle', '二级标题')
      }
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
    background :#272727;
    width:100%;
    overflow :hidden;
  }
  .goods-title{
    font-size :1rem;
    color:#ccc;
    margin-bottom :0.25rem;
    padding:0.4rem 0;
  }
  .radio-box{
    width:100%;
    padding: 0.4rem .3rem 0.2rem;
    margin-bottom :0.75rem;
  }
  .check-box{
    width:100%;
    border:1px solid #6a6a6a;
    padding: 0.4rem .3rem 0.2rem;
    margin-bottom :0.75rem;
    display :flex;
    flex-direction :column;
  }
  .check-box .el-checkbox__label{
    color:#f0af41;
  }
  .el-checkbox{
    margin-bottom :0.25rem;
  }
  .el-checkbox+.el-checkbox{
    margin-left :0;
  }
  .image-box{
    width:100%;
    border:1px solid #6a6a6a;
    padding: 0.6rem .3rem;
    margin-bottom :0.75rem;
    display :flex;
    flex-direction :row;
    flex-wrap :wrap;
  }
  .add-image{
    width: 5rem;
    height: 5rem;
    border: 1px solid #ddd;
    cursor: pointer;
    display: flex;
    align-items :center;
    justify-content :center;
    cursor:pointer;
    margin-right :0.35rem;
    margin-bottom :0.35rem;
    position:relative;
  }
  .icon{
    color:#666;
    font-size :1rem;
    font-weight:bold;
  }
  .img{
    width:100%;
  }
  .icon-del{
    position:absolute;
    right:0rem;
    top:0rem;
    width:1.4rem;
    height:1.4rem;
    border-radius :100%;
    background :rgba(000,000,000,0.4);
    display :flex;
    align-items :center;
    justify-content :center;
  }
  .el-icon-delete{
    font-size :0.75rem;
    color:#fff;
  }
</style>
