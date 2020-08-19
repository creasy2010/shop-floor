<template>
  <div class="component-editor">
    <div class="goods-title">列表样式:</div>
    <el-radio-group v-model="radio" @change="changeRadio" class="radio-box">
      <el-radio :label="1">默认风格</el-radio>
    </el-radio-group>
    <div class="goods-title">商品设置:</div>
    <el-checkbox-group v-model="checkList" @change="changeCheck" class="check-box">
      <el-checkbox v-for="item in goodsOptions" :label="item.id" :key="item.id">{{item.label}}</el-checkbox>
    </el-checkbox-group>
    <imagechoose></imagechoose>
  </div>
</template>

<script>
  import Imagechoose from '../preview/lib/dialog/image-choose'


  export default {
    components: {Imagechoose},
    name: 'maliangeditor',
    props: {
      // 编辑器会传递给编辑面板组件的属性值，编辑器可以修改这些值来达到控制组件数据的作用
      componentInfo: { // 固定字段，收集所有属性值
        type: [Object],
        default () {
          return {
          }
        }
      }
    },
    data: function () {
      return {
        usedatasource: false,
        radio: 1,
        goodsOptions: [
          {label: '显示商品名称', id: 1},
          {label: '显示商品描述', id: 2},
          {label: '商品价格', id: 3},
          {label: '按钮', id: 4},
        ],
        checkList: [],
      }
    },
    computed: {
    },
    watch: {
      'componentInfo': {
        handler (v) {
          console.log(v)
        },
        deep: true
      }
    },
    created () {},
    mounted: function () {},
    methods: {
      // tag切换
      handleClick: function (tab) {
        this.activeName = tab.name
      },
      // 风格切换
      changeRadio: function (val) {
        this.radio = val
      },
      // 商品设置
      changeCheck: function (val) {
        this.checklist = val
        if (!this.componentInfo.checklist) this.$set(this.componentInfo, 'checklist', val)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
  }
  .goods-title{
    font-size :1rem;
    color:#333;
    margin-bottom :0.25rem;
    padding:0.4rem 0;
  }
  .radio-box{
    width:100%;
    background: #f9f9f9;
    padding: 0.4rem .3rem 0.2rem;
    margin-bottom :0.75rem;
  }
  .check-box{
    width:100%;
    background: #f9f9f9;
    padding: 0.4rem .3rem 0.2rem;
    margin-bottom :0.75rem;
    display :flex;
    flex-direction :column;
  }
  .el-checkbox{
    margin-bottom :0.25rem;
  }
  .el-checkbox+.el-checkbox{
    margin-left :0;
  }
  .image-box{
    width:100%;
    background: #f9f9f9;
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
  }
  .icon{
    color:#666;
    font-size :1rem;
    font-weight:bold;
  }
</style>
