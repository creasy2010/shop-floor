<template>
  <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
    <span>选择商品 商品分类  海报页 等信息;</span>

    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>


<script>
export default {
  name: "link-choose",
  data() {
    return {
      dialogVisible: true,
      value:undefined
    };
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
    }
  }
}

</script>

<style scoped>

</style>
