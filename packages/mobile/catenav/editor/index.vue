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
          <el-image
              style="width: 100px; height: 100px"
              :src="url"
              :fit="fit"
              @click="chooseImage(item, index)"></el-image>
          <el-link type="primary" @click="chooseLink(item, index)">链接</el-link>
          <el-link type="primary" @click="deleteItem(item, index)">删除</el-link>
          <el-input v-model="item.title" placeholder="请输入内容"></el-input>

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
        // 如果不存在 navs 属性，应主动添加响应式属性
        this.componentInfo.navs.push({
          img: 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC',
          linkInfo: null,
          title: '',
        })
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
              this.componentInfo.navs[index].img = image
            }
          })
        } else {
          this.componentInfo.navs[index].img = 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC'
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
</style>
