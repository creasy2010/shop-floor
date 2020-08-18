<template>
  <div class="component-editor">
    <div class="add-image" @click="addItem">
      <i class="el-icon-plus icon"></i>
    </div>
    <div class="tips">（图片格式仅限jpeg、jpg、png、gif，建议尺寸：750x335）</div>
    <div class="imgs-box" v-for="(item,index) in this.componentInfo.images" :key="item">
      <img class="img" :src="item" @mouseover="mouseOver()" @mouseleave="mouseLeave()"/>
      <div class="icon-del" @click="deleteItem(item, index)" :id={index}>
        <i class="el-icon-delete"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
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
    mounted: function () {
    },
    methods: {
      //新增
      addItem: function () {
        if (!this.componentInfo.images) this.$set(this.componentInfo, 'images', [])
        this.componentInfo.images.push(
          `./src/assets/${this.componentInfo.images.length + 1}.png`
        )
      },
      // 删除
      deleteItem (item, index) {
        this.componentInfo.images.splice(index, 1)
      },
      // 移入
      mouseOver() {

      },
      // 移出
      mouseLeave() {

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
    display :flex;
    flex-direction :column;
    padding :0.5rem;
  }
  .add-image{
    width:100%;
    padding :0.65rem 0;
    border: 1px dashed #d1d1d1!important;
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
  .tips{
    font-size :0.75rem;
    color:#666;
    margin-top :0.2rem;
  }
  .imgs-box{
    width:100%;
    display :flex;
    flex-direction :column;
    position:relative;
  }
  .img{
    width:100%;
    height:5.25rem;
    margin-bottom :0.25rem;
  }
  .icon-del{
    position:absolute;
    right:0.2rem;
    top:0.2rem;
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
