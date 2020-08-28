<template>
  <div class="annouceComment">
    <div class="annouce-box">
      <img class="notice-icon" :src="hornIcon"/>
      <span class="notice-label">{{title}}</span>
      <!-- 滚动文字区域 -->
      <div class="notice-content">
        <ul id="marquee">
          <li id="text">{{content}}</li>
        </ul>
      </div>
<!--      <spna class="notice-content">{{ content }}</spna>-->
    </div>
  </div>
</template>

<script>
  import {VueExtend} from 'godspen-lib'
  export default {
    mixins: [VueExtend.mixin],
    name: 'announcement',
    label: process.env.LABEL,
    style: process.env.STYLE,
    stack: null, // 是否是堆叠模式 ，false：孩子元素会按楼层一个个向下排布， true: 孩子元素绝对定位，随意放置位置
    childLimit: 9999,  // 孩子元素最大限制数
    leaf: false, // 是否是叶子节点，为true的时候该节点下面不能添加节点
    props: {
      title: {
        label: '标题',
        desc: '标题',
        type: String
      },
      content: {
        label: '内容',
        desc: '公告内容',
        type: String
      },
    },
    data: function () {
      return {
        hornIcon: './src/assets/notice.png'
      }
    },
    computed: {
    },
    editorMethods: {
    },
    mounted: function () {
      // 延时滚动
      setTimeout(() => {
        this.move()
      }, 1000)
    },
    methods: {
      move: function () {
        // 获取内容区宽度
        let width = document.getElementById('marquee').scrollWidth
        let marquee = document.getElementById('marquee')
        let speed = 15 // 位移距离
        // 设置位移
        setInterval(function () {
          speed = speed - 1
          // 如果位移超过文字宽度，则回到起点

          if (-speed >= width) {
            speed = document.getElementById('text').offsetWidth
          }
          marquee.style.transform = 'translateX(' + speed + 'px)'
        }, 40)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus" scoped>
  .annouceComment {
    width: 100%;
    height: 100%;
  }
  .annouce-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0.75rem;
    height: 1.875rem;
    background: #FEFFBE;
  }
  .notice-icon{
    width: 1.03rem;
    height: 0.875rem;
    margin-right 0.4375rem;
  }
  .notice-label{
    font-size:0.875rem ;
    color: #333;
  }
  .notice-content{
    font-size:0.875rem ;
    color: #333;
    flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  #box {
    height: 100%;
  }
  ul,
  li {
    margin: 0;
    padding: 0;
  }
  ul {
    white-space: nowrap;
    margin: 0 10px;
  }
  li {
    height: 100%;
    list-style: none;
    margin-right: 10px;
    display: inline-block;
  }
</style>
