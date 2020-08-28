<template>
  <div class="component-editor">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>分类设置</span>
        <el-button style="float: right; padding: 3px 0;" type="text" @click="addItem">
          添加一个
        </el-button>
        <el-button style="float: right; padding: 3px 0; margin-right:20px;"
                   type="text" @click="copyItem"
                   v-show="componentInfo.navs && componentInfo.navs.length >= 1">
          复制前一项
        </el-button>
      </div>

      <el-collapse v-show="componentInfo.navs && componentInfo.navs.length">
        <el-collapse-item :title="'格子' + (index + 1)"
                          v-for="(item, index) in componentInfo.navs" :key="index">
          <el-main class="main">
            <el-link type="primary" :class="{ 'active': item.linkInfo,'icon-box':true }" @click="chooseLink(item, index)"><i class="el-icon-share"></i></el-link>
            <el-link type="primary" class="icon-box" @click="deleteItem(item, index)"><i class="el-icon-delete"></i></el-link>
          </el-main>
          <el-main class="main">
            <img class="choose-img"
                    :src="item.url"
                    :fit="fit"
                    @click="chooseImage(item, index)" />
            <el-input v-model="item.title" placeholder="请输入内容"></el-input>
          </el-main>

<!--          <el-form :model="item" label-width="100px" size="mini">-->
<!--            <el-form-item label="图片">-->
<!--              <attr-resource type="image" :url.sync="item.img"></attr-resource>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="跳转">-->
<!--              <attr-resource type="text" :url.sync="item.url"></attr-resource>-->
<!--            </el-form-item>-->
<!--            <el-form-item label="">-->
<!--              <el-button type="danger" size='medium'-->
<!--                         @click="deleteItem(item, index)">移除当前项</el-button>-->
<!--            </el-form-item>-->
<!--          </el-form>-->
        </el-collapse-item>
      </el-collapse>
    </el-card>

  </div>
</template>

<script>
  export default {
    name: 'maliangeditor',
    props: {
      componentInfo: Object
    },
    data: function () {
      return {
        dialogFormVisible: false,
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
      if (!this.componentInfo.navs) this.$set(this.componentInfo, 'navs', [])
    },
    methods: {
      // 增加一个格子项
      addItem: function () {
        this.dialogFormVisible = true
        // 如果不存在 navs 属性，应主动添加响应式属性
        if (window.xExtend && window.xExtend.chooseImage) {
          window.xExtend.chooseImage({
            onSubmit: (goods) => {
              this.componentInfo.navs = this.componentInfo.navs.concat(goods)
            }
          })
        } else {
          this.componentInfo.navs = this.componentInfo.navs.concat([{
            img: 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC',
            linkInfo: null,
            title: '',
          }
          ])
        }
      },
      // 复制一个格子项
      copyItem () {
        const item = this.componentInfo.navs[this.componentInfo.navs.length - 1]
        if (!item || typeof item !== 'object') return this.addItem()
        this.componentInfo.navs.push(JSON.parse(JSON.stringify(item)))
      },
      // 移除一个格子项
      deleteItem (item, index) {
        this.componentInfo.navs.splice(index, 1)
      },
      chooseImage (item, index) {
        if (window.xExtend && window.xExtend.chooseImage) {
          window.xExtend.chooseImage({
            onSubmit: ([image]) => {
              this.componentInfo.navs[index].image = image
            }
          })
        } else {
          this.componentInfo.navs[index].image = 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC'
        }
      },
      chooseLink (item, index) {
        if (window.xExtend && window.xExtend.chooseLink) {
          window.xExtend.chooseLink({
            onSubmit: ([linkInfo]) => {
              this.componentInfo.navs[index].linkInfo = linkInfo
            }
          })
        } else {
          this.componentInfo.navs[index].linkInfo = {}
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
  }
  .choose-img{
    width:32px;
    height:32px;
    border-radius :100%;
    margin-right :10px;
  }
  .main{
    display :flex;
    flex-direction :row;
    align-items :center;
    padding:0;
    margin-bottom :0.3rem;
  }
  .icon-box{
    background: #333;
    width: 24px;
    height: 24px;
    margin-right: 5px;
    color: #fff;
    border-radius: 100%;
    opacity: .8;
    cursor: pointer;
    display : flex;
    align-items :center;
    justify-content :center;
  }
  .active{
    color:#108ee9;
  }
  i{
    font-size :14px;
  }
</style>
