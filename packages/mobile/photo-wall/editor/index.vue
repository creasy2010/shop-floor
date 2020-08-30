<template>
  <div class="component-editor">
    <div class="goods-title">图片样式:</div>
    <el-radio-group v-model="componentInfo.radio" @change="changeRadio" class="radio-box">
      <el-radio :label="1">默认风格</el-radio>
      <el-radio :label="2">风格一</el-radio>
    </el-radio-group>
    <div class="goods-title">商品数据来源:</div>
    <div class="image-box">
      <div class="add-image" @click="addItem">
        <i class="el-icon-plus icon"></i>
      </div>
      <div class="add-image" v-for="(item,index) in componentInfo.photsList">
        <img class="image" :src="item.url" />
        <div class="icon-box">
          <div :class="{ 'active': item.linkInfo,'icon-link':true }" @click="chooseLink(item, index)" :id={index}>
            <i class="el-icon-share"></i>
          </div>
          <div class="icon-del" @click="deleteItem(item, index)" :id={index}>
            <i class="el-icon-delete"></i>
          </div>
        </div>
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
        photsList: Array,
        radio: String,
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
      if (!this.componentInfo.photsList) {
        this.$set(this.componentInfo, 'photsList', [])
      }

      if (!this.componentInfo.radio) {
        this.$set(this.componentInfo, 'radio', 1)
      }
    },
    methods: {
      // 风格切换
      changeRadio: function (val) {
        this.componentInfo.radio = val
      },
      // 新增
      addItem: function () {
        this.dialogFormVisible = true

        if (window.xExtend && window.xExtend.chooseImage) {
          window.xExtend.chooseImage({
            onSubmit: (data) => {
              this.componentInfo.photsList = this.componentInfo.photsList.concat(data)
            }
          })
        } else {
          this.componentInfo.photsList = this.componentInfo.photsList.concat([{
            createTime: '2020-07-28T01:40:57.000+0000',
            groupId: 2880682850025472,
            id: 2881271517216768,
            isVideo: false,
            name: '时钟3.png',
            size: 70430,
            url: 'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg',
          }])
        }
      },
      // 选择链接
      chooseLink (item, index) {
        if (this.componentInfo.photsList[index].linkInfo) {
          this.componentInfo.photsList[index].linkInfo = null
        } else {
          if (window.xExtend && window.xExtend.chooseLink) {
            window.xExtend.chooseLink({
              onSubmit: ([linkInfo]) => {
                this.componentInfo.photsList[index].linkInfo = linkInfo
              }
            })
          } else {
            this.componentInfo.photsList[index].linkInfo = {}
          }
        }
        this.componentInfo.photsList = this.componentInfo.photsList.concat([])
      },
      // 删除
      deleteItem (item, index) {
        this.componentInfo.photsList.splice(index, 1)
      },
      // 关闭弹窗
      closeModal: function (val) {
        this.dialogFormVisible = val
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
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
  .image{
    width:100%;
    height:100%;
  }
  .icon-box{
    position:absolute;
    right:0rem;
    top:0.2rem;
    display :flex;
    flex-direction :row;
    align-items :center;
  }
  .icon-del,.icon-link{
    width:1.4rem;
    height:1.4rem;
    border-radius :100%;
    background :#333;
    display :flex;
    align-items :center;
    justify-content :center;
    margin-right :0.3rem;
    cursor :pointer;
  }
  .el-icon-delete,.el-icon-share{
    font-size :0.75rem;
    color:#fff;
  }
  .active i{
    color:#108ee9;
  }
</style>
