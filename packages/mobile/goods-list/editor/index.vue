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
    <div class="image-box">
      <div class="add-image" @click="addItem">
        <i class="el-icon-plus icon"></i>
      </div>
    </div>
<!--  选择商品弹窗  -->
    <el-dialog title="商品" :visible.sync="dialogFormVisible" width="984px">
      <div class="modal-box">
<!--   搜索条件   -->
      <el-row>
        <el-col :span="8">
          <el-input v-model="form.name" placeholder="请输入商品名称"></el-input>
        </el-col>
        <el-col :span="8" class="mar-l">
          <el-select v-model="form.cate" placeholder="请选择类目">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-col>
      </el-row>

<!--   内容   -->
      <el-main>
        <ul class="products_list">
          <li class="good-list-item" v-for="item in goodsList" @click="selectitem(item)">
            <img class="left-img" :src="item.img">
            <div class="right-info">
              <div class="r-title">{{item.title}}</div>
              <div class="r-spec">{{item.spec}}</div>
              <div class="r-price">价格：{{item.price}}</div>
            </div>
            <div class="active-item" v-show="item.id == selectId"></div>
          </li>
        </ul>
      </el-main>

<!--  分页  -->
      <el-pagination
              background
              layout="prev, pager, next"
              :total="1000">
      </el-pagination>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
        dialogFormVisible: false,
        radio: 1,
        goodsOptions: [
          {label: '显示商品名称', id: 1},
          {label: '显示价格', id: 2},
          {label: '显示营销标签', id: 3},
          {label: '角标', id: 4},
        ],
        checkList: [],
        form: {
          name: '',
          cate: '',
        },
        goodsList: [
          { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '1包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 1 },
          { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '2包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 2 },
          { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '3包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 3 },
          { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '4包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 4 },
        ],
        selectId: 1
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
      },
      // 选择商品
      selectitem: function (item) {
        this.selectId = item.id
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
  .mar-l{
    margin-left :1rem;
  }
  .modal-box{
    overflow: hidden;
    background: #fafafa;
    padding: 20px;
  }
  .products_list{
    overflow: auto;
    clear: both;
    padding :0;
    list-style none;
  }
  .el-main{
    padding:0;
  }
  .good-list-item{
    width: 440px;
    height: 90px;
    float: left;
    margin:0 15px 15px 0;
    background: #fff;
    position: relative;
    cursor: pointer;
    position:relative;
  }
  .good-list-item:nth-child(2n){
    margin-right :0;
  }
  .left-img{
    width: 70px;
    height: 70px;
    margin: 10px;
    float: left;
  }
  .right-info{
    float:left;
  }
  .r-title{
    width: 250px;
    height: 35px;
    font-size: 12px;
    color: #666;
    line-height: 17px;
    margin-top: 7px;
  }
  .r-spec{
    max-width: 200px;
    padding: 0 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#999;
    font-size: 12px;
  }
  .r-price{
    max-width: 200px;
    padding: 0 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color:#999;
    font-size: 12px;
  }
  .active-item{
    width: 25px;
    height: 25px;
    display: inline-block;
    background: url(//wanmi-x-site.oss-cn-shanghai.aliyuncs.com/x-site/public/images/images/icon_right.gif) no-repeat center center;
    background-color: #5491de;
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
