<template>
  <div class="slideshow">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="carousel-box" :style="{height:imgHeight}" v-for="item in swiperImages" :key="item" @click="onClick(item)">
        <img class="image" :src="item.url"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper.less'
  // If you use Swiper 6.0.0 or higher
  import 'swiper/swiper-bundle.css'
  export default {
    components: {Swiper,SwiperSlide},
    directives: {
      swiper: directive
    },
    mixins: [VueExtend.mixin],
    name: 'slideshow',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
      swiperImages: { // 所有格子的配置信息
        type: Array,
        editor: {
          ignore: true, // 在 *属性配置组件* 中实现该属性的输入逻辑和样式
          default: []
        }
      },
      imgHeight: {
        type: String,
      }
    },
    editorMethods: {
    },
    data: function () {
      return {
        swiperOptions: {
          observer: true,
          observeParents: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
          loop: true,
        },
      }
    },
    computed: {
      swiper () {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted () {
      console.log(this.swiper)
      // this.swiper.slideTo(3, 1000, false)
    },
    updated: function () {
      console.log(this)
    },
    methods: {
      onClick (item) {
        window.parent.postMessage({
          action: 'click',
          payload: item.linkInfo
        }, '*')
      }
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .slideshow {
    width: 100%;
    height: 100%;
  }
  .carousel-box{
    width:100%;
    height:23.97rem;
  }
  .image{
    width:100%;
    height:100%;
  }
</style>
