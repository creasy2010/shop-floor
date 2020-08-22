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
    <div class="goods-title">商品数据来源:</div>
    <div  v-for="item in componentInfo.fixGoodsList">
     {{item.name}}
    </div>
    <div class="image-box">
      <div class="add-image" @click="addItem">
        <i class="el-icon-plus icon"></i>
      </div>
    </div>
<!--    <linkChoose :dialogFormVisible="dialogFormVisible" @close="closeModal" @goodsInfo="getGoodsInfo"></linkChoose>-->
<!--      <ImageChoose :dialogFormVisible="dialogFormVisible" @close="closeModal" @selectData="getSelectData"></ImageChoose>-->
  </div>
</template>

<script>
  // import LinkChoose from '../preview/lib/dialog/link-choose'
  // import ImageChoose from '../preview/lib/dialog/image-choose'
  export default {
    components: {
      // LinkChoose,ImageChoose
    },
    name: 'maliangeditor',
    props: {
      // 编辑器会传递给编辑面板组件的属性值，编辑器可以修改这些值来达到控制组件数据的作用
      componentInfo: {
        fixGoodsList: Array,
        sourceType: String, // fix
        option: {
          isShowName: Boolean,
          isShowPrice: Boolean,
        }
      }
    },
    data: function () {
      return {
        usedatasource: false,
        dialogFormVisible: false,
        radio: 1,
        goodsOptions: [
          {label: '显示商品名称', id: 1},
          {label: '显示价格', id: 2},
          {label: '显示营销标签', id: 3},
          {label: '角标', id: 4},
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
    mounted: function () {
      if (!this.componentInfo.fixGoodsList){
        this.$set(this.componentInfo, 'fixGoodsList', [])
      }

      if (!this.componentInfo.goodsOptions){
        this.$set(this.componentInfo, 'goodsOptions', [])
      }

    },
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
        if (!this.componentInfo.checklist) this.$set(this.componentInfo, 'checklist', [])
      },
      // 新增
      addItem: function () {
        this.dialogFormVisible = true

        if(window.xExtend && window.xExtend.chooseGoods){
          window.xExtend.chooseGoods({
            onSubmit: (goods) => {
              this.componentInfo.fixGoodsList = this.componentInfo.fixGoodsList.concat(goods)
            }
          })
        } else {
          this.componentInfo.fixGoodsList = this.componentInfo.fixGoodsList.concat([{
              barcode: null,
              bn: null,
              brandId: 2872817173708800,
              brandName: '大众',
              categoryId: 2866547706200064,
              categoryName: '单肩包',
              id: 2911477832302592,
              image: 'https://kshop-dev.oss-cn-beijing.aliyuncs.com/dev/53eef806f86e48b585852f5a816a60a0',
              name: '多规格商品 红色大',
              price: 11,
              spuId: 2911473872142336,
              status: 'OFFLINE',
              statusText: '已下架',
              stock: 1111
            }
          ])
        }

      },
      // 关闭弹窗
      closeModal: function (val) {
        this.dialogFormVisible = val
      },
      // 获取图片数据的回调
      getSelectData: function (item) {
        console.log(item)
      },
      // 获取商品数据的回调
      getGoodsInfo: function (item) {
        console.log(item)
      },
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
