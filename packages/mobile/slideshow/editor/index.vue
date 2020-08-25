<template>
  <div class="component-editor">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
      <el-tab-pane label="换图" name="first">
        <div class="add-image" @click="addItem">
          <i class="el-icon-plus icon"></i>
        </div>
        <div class="tips">（图片格式仅限jpeg、jpg、png、gif，建议尺寸：750x335）</div>
        <div class="imgs-box" v-for="(item,index) in componentInfo.swiperImages" :key="item">
          <img class="img" :src="item.icon" />
          <div class="icon-box">
            <el-link type="primary" class="icon-edit" @click="editItem( index)"><i class="el-icon-picture"></i></el-link>
            <el-link type="primary" :class="{ 'active': item.linkInfo,'icon-link':true }" @click="chooseLink(item, index)"><i class="el-icon-share"></i></el-link>
            <el-link type="primary" class="icon-del" @click="deleteItem(item, index)" :id={index}><i class="el-icon-delete"></i></el-link>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="设置" name="second">
        <el-radio-group v-model="radio" @change="changeradio">
          <el-radio :label="1">默认尺寸</el-radio>
          <el-radio :label="2">大图</el-radio>
          <el-radio :label="3">小图</el-radio>
        </el-radio-group>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'maliangeditor',
    props: {
      // 编辑器会传递给编辑面板组件的属性值，编辑器可以修改这些值来达到控制组件数据的作用
      componentInfo: { // 固定字段，收集所有属性值
        imgHeight: String,
        swiperImages: Array
      }
    },
    data: function () {
      return {
        activeName: 'first',
        radio: 1,
        selectImg: false
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
      if (!this.componentInfo.imgHeight) {
        this.$set(this.componentInfo, 'imgHeight', '5.25rem')
      }
      if (!this.componentInfo.swiperImages) {
        this.$set(this.componentInfo, 'swiperImages', [])
      }
    },
    methods: {
      // tag切换
      handleClick: function (tab) {
        this.activeName = tab.name
      },
      // 尺寸切换
      changeradio: function (val) {
        this.radio = val
        let height = '5.25rem' // 默认高度
        if (val == 2) height = '8.375rem'  // 大图尺寸
        if (val == 3) height = '3.6875rem'
        this.componentInfo.imgHeight = height
      },
      // 新增
      addItem: function () {
        this.dialogFormVisible = true
        // 如果不存在 navs 属性，应主动添加响应式属性
        if (window.xExtend && window.xExtend.chooseImage) {
          window.xExtend.chooseImage({
            onSubmit: (data) => {
              this.componentInfo.swiperImages = this.componentInfo.swiperImages.concat(data)
            }
          })
        } else {
          this.componentInfo.swiperImages = this.componentInfo.swiperImages.concat([])
        }
      },
      // 修改图片
      editItem: function (index) {
        if (window.xExtend && window.xExtend.chooseImage) {
          window.xExtend.chooseImage({
            onSubmit: (data) => {
              this.componentInfo.swiperImages[index] = data
            }
          })
        } else {
          this.componentInfo.swiperImages[index] = {}
        }
      },
      // 删除
      deleteItem (item, index) {
        this.componentInfo.swiperImages.splice(index, 1)
      },
      // 选择链接
      chooseLink (item, index) {
        if (window.xExtend && window.xExtend.chooseLink) {
          window.xExtend.chooseLink({
            onSubmit: ([linkInfo]) => {
              this.componentInfo.swiperImages[index].linkInfo = linkInfo
            }
          })
        } else {
          this.componentInfo.swiperImages[index].linkInfo = {}
        }
        this.componentInfo.swiperImages = this.componentInfo.swiperImages.concat([])
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
  .icon-box{
    position:absolute;
    right:0.2rem;
    top:0.2rem;
    display :flex;
    flex-direction :row;
    align-items :center;
  }
  .icon-del,.icon-link,.icon-edit{
    width:1.4rem;
    height:1.4rem;
    border-radius :100%;
    background :rgba(000,000,000,0.4);
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
