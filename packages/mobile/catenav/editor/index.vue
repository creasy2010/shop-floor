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
          <el-form :model="item" label-width="100px" size="mini">
            <el-form-item label="图片">
              <attr-resource type="image" :url.sync="item.img"></attr-resource>
            </el-form-item>
            <el-form-item label="跳转">
              <attr-resource type="text" :url.sync="item.url"></attr-resource>
            </el-form-item>
            <el-form-item label="">
              <el-button type="danger" size='medium'
                         @click="deleteItem(item, index)">移除当前项</el-button>
            </el-form-item>
          </el-form>
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
    },
    methods: {
      // 增加一个格子项
      addItem: function () {
        // 如果不存在 navs 属性，应主动添加响应式属性
        debugger
        if (!this.componentInfo.navs) this.$set(this.componentInfo, 'navs', [])
        this.componentInfo.navs.push({
          img: 'http://iph.href.lu/160x40?text=激活&fg=FF0000&bg=CCCCCC',
          href: '',
        })
      },
      // 复制一个格子项
      copyItem () {
        var item = this.componentInfo.navs[this.componentInfo.navs.length - 1]
        if (!item || typeof item !== 'object') return this.addItem()
        this.componentInfo.navs.push(JSON.parse(JSON.stringify(item)))
      },
      // 移除一个格子项
      deleteItem (item, index) {
        this.componentInfo.navs.splice(index, 1)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component-editor {
  }
</style>
