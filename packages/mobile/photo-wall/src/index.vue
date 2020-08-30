<template>
  <div class="component">
<!--  默认风格  -->
    <div class="photo-box" v-if="radio == '1'">
      <div class="left-img-box" @click="onClick(photsList[0])" v-if="photsList[0]">
        <img class="left-img" :src="photsList[0].url" />
      </div>
      <div class="right-img-box">
        <div class="right-img" @click="onClick(photsList[1])" v-if="photsList[1]">
          <img class="r-img" :src="photsList[1].url" />
        </div>
        <div class="right-img" @click="onClick(photsList[2])" v-if="photsList[2]">
          <img class="r-img" :src="photsList[2].url" />
        </div>
      </div>
    </div>
<!--  风格1  -->
    <div class="photo-box1" v-if="radio == '2'">
      <div class="style-img-box1" v-for="item in photsList" @click="onClick(item)">
        <img class="style-img1" :src="item.url" />
      </div>
    </div>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'

  export default {
    mixins: [VueExtend.mixin],
    name: 'photo-wall',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
      photsList: { // 所有格子的配置信息
        type: Array,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: []
        }
      },
      radio: { // 所有格子的配置信息
        type: String,
      },
    },
    computed: {
    },
    editorMethods: {
    },
    methods: {
      onClick (skuInfo) {
        window.parent.postMessage({
          action: 'click',
          payload: skuInfo
        }, '*')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .component {
    width: 100%;
    height: 100%;
  }
  .photo-box{
    display :flex;
    flex-direction :row;
    align-items :center;
    justify-content :space-between;
  }
  .left-img-box{
    width:49.5%;
    height:0;
    padding-bottom :80%;
    position:relative;
  }
  .left-img{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  .right-img-box{
    width:49.5%;
    height:0;
    padding-bottom :80%;
    display :flex;
    flex-direction :column;
  }
  .right-img{
    width:100%;
    height:0;
    padding-bottom :79.8%;
    position:relative;
  }
  .right-img:first-child{
    margin-bottom :2%;
  }
  .r-img{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
  }
  .photo-box1{
    display :flex;
    flex-direction :column;
  }
  .style-img-box1{
    width:100%;
    height:0;
    padding-bottom :60%;
    position :relative;
    margin-bottom :0.75rem;
  }
  .style-img1{
    width:100%;
    height:100%;
    position:absolute;
    top:0;
  }
</style>
