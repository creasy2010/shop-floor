<template>
  <!--  选择商品弹窗  -->
  <el-dialog title="图片选择" :visible.sync="imageVisible" width="960px" :before-close="close">
    <el-main class="main">
<!--  节点选择    -->
      <div class="left">
        <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
<!--   图片选择   -->
      <div class="right">
        <ul class="picture-box">
          <li class="picture-item" v-for="item in imageList" :key="item.id">
            <el-checkbox v-model="isShowCkeck === item.id" class="check" @change="checked(item.id,item)"></el-checkbox>
            <img class="img" :src="item.img"/>
          </li>
        </ul>
      </div>
    </el-main>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confire">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>

export default {
  name: "image-choose",
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dialogVisible: true,
      value:undefined,
      // 弹框显示隐藏
      imageVisible:false,
      // 左侧树组件 数据
      treeData: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      // 默认选中的数组建数据
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 图片数据
      imageList: [
        { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/202001151941038046.jpg', title: '1包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 1 },
        { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '2包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 2 },
        { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/202001151941038046.jpg', title: '3包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 3 },
        { img: 'https://wanmi-b2b.oss-cn-shanghai.aliyuncs.com/201809191418148207', title: '4包装 肉类零食礼包', spec: '规格信息', price: '12.5', id: 4 },
      ],
      // 鼠标移入显示的checkbox按钮
      isShowCkeck: 0,
      // 选中的图片
      selectImg: {}
    };
  },
  watch: {
    dialogFormVisible(){
      this.imageVisible = this.dialogFormVisible;
    }
  },
  mounted () {
    //监听选择图片的速与;
    window.chooseLink=(option,calBack)=>{
      //显示链接弹窗, 选择后返回;
      calBack(this.value);
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    // 选择tree节点
    handleNodeClick(data) {
      console.log(data);
    },
    // 关闭弹窗
    close: function () {
      this.$emit('close', false);
    },
    // 只能选中一张图片 并且拿到数据
    checked: function (id,item) {
      if(id === this.isShowCkeck){
        this.isShowCkeck = 0;
        this.selectImg = {};
        return false;
      }
      if(this.isShowCkeck !== 0){
        this.$message('已选中了1个文件,不能选择更多文件');
      }else{
        this.isShowCkeck = id;
        this.selectImg = item;
      }
    },
    // 确认事件
    confire: function () {
        this.$emit('close', false);
        this.$emit('selectData', this.selectImg);
    }
  }
}
</script>

<style scoped>
  .main{
    height:480px;
    padding-top: 0;
  }
  .left{
    width:200px;
    background: #f7f7f7;
    padding:20px;
    float:left;
    margin-right: 20px;
    height: 100%;
  }
  .right{
    width:660px;
    float:right;
  }
  .picture-box{
    overflow: hidden;
    padding-left: 0;
    margin:0;
  }
  .picture-item{
    width:150px;
    border:1px solid #eee;
    float:left;
    margin-right: 20px;
    padding :0;
    list-style :none;
    position:relative;
  }
  .picture-item:nth-child(4n){
    margin-right: 0;
  }
  .check{
    position:absolute;
    right:0;
    top:0;
    z-index: 1;
    width:18px;
    height:18px;
  }
  .img{
    width:100%;
  }
</style>
