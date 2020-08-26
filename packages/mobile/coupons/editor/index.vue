<template>
  <div class="component-editor">
    <div class="image-box">
      <div class="add-image" @click="addItem" v-show="componentInfo.couponList.length < 4">
        <i class="el-icon-plus icon"></i>
      </div>
      <div class="add-image" v-for="(item,index) in componentInfo.couponList">
        <span class="text">优惠券{{index}}</span>
        <div class="icon-box">
          <el-link type="primary" :class="{ 'active': item.linkInfo,'icon-link':true }" @click="chooseLink(item, index)"><i class="el-icon-share"></i></el-link>
          <el-link type="primary" class="icon-del" @click="deleteItem(item, index)" :id={index}><i class="el-icon-delete"></i></el-link>
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
        couponList: Array,
      }
    },
    data: function () {
      return {
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
      if (!this.componentInfo.couponList) {
        this.$set(this.componentInfo, 'couponList', [])
      }
    },
    methods: {
      // 新增
      addItem: function () {
        let item = {
          assignNum: 0,
          createTime: '2020-08-23T02:37:48.867Z',
          fullPrice: 0,
          id: 0,
          isLimit: true,
          limitNum: 0,
          name: 'string',
          num: 0,
          price: 0,
          status: 'WAIT',
          valid: {
            day: 0,
            endTime: '2020-08-23T02:37:48.867Z',
            isRange: true,
            startTime: '2020-08-23T02:37:48.867Z',
          }
        }
        this.dialogFormVisible = true

        if (window.xExtend && window.xExtend.chooseGoods) {
          window.xExtend.chooseGoods({
            onSubmit: (goods) => {
              this.componentInfo.couponList = this.componentInfo.couponList.concat(goods)
            }
          })
        } else {
          this.componentInfo.couponList = this.componentInfo.couponList.concat([item])
        }
      },
      // 删除
      deleteItem (item, index) {
        this.componentInfo.couponList.splice(index, 1)
      },
      // 选择链接
      chooseLink (item, index) {
        if (window.xExtend && window.xExtend.chooseLink) {
          window.xExtend.chooseLink({
            onSubmit: ([linkInfo]) => {
              this.componentInfo.couponList[index].linkInfo = linkInfo
            }
          })
        } else {
          this.componentInfo.couponList[index].linkInfo = {}
        }
        this.componentInfo.couponList = this.componentInfo.couponList.concat([])
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
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
    margin-right :0.35rem;
    margin-bottom :0.35rem;
    position:relative;
  }
  .icon{
    color:#666;
    font-size :1rem;
    font-weight:bold;
  }
  .text{
    color:#666;
    font-size :0.75rem;
  }
  .icon-box{
    position:absolute;
    right:0.2rem;
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
  i{
    font-size :0.75rem;
    color:#fff;
  }
  .active i{
    color:#108ee9;
  }
</style>
