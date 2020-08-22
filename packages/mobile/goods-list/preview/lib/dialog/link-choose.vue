<template>
  <!--  选择商品弹窗  -->
  <el-dialog  :visible.sync="dialogVisible" width="984px" :before-close="close">
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane label="商品" name="first">
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
      </el-tab-pane>

      <el-tab-pane label="分类" name="second"></el-tab-pane>
    </el-tabs>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confire">确 定</el-button>
    </div>
  </el-dialog>
</template>


<script>
export default {
  name: "link-choose",
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      value:undefined,
      dialogVisible:false,
      activeName: 'first',
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
      // 选中的商品
      selectId: 0,
      // 选中的商品数据
      goodsInfo: {}
    };
  },
  watch: {
    dialogFormVisible(){
      this.dialogVisible = this.dialogFormVisible;
    }
  },
  mounted () {
    //监听选择图片的速与;
    window.xExtend.chooseGoods({
      onSubmit: (goods) => {
        debugger
        console.log(goods)
      }
    })
  },
  methods: {
    //切换条件
    changeTab(tab, event) {
      this.activeName = tab.name
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    // 选择商品
    selectitem: function (item) {
      this.selectId = item.id;
      this.goodsInfo = item;
    },
    // 关闭弹窗
    close: function () {
      this.$emit('close', false);
    },
    // 确认事件
    confire: function () {
      this.$emit('close', false);
      this.$emit('goodsInfo', this.goodsInfo);
    }
  }
}

</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .modal-box{
    overflow: hidden;
    background: #fafafa;
    padding: 20px;
  }
  .products_list{
    overflow: auto;
    clear: both;
    padding :0;
    list-style :none;
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
  .mar-l{
    margin-left :1rem;
  }
</style>

