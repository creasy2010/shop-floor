import VueExtend from './vue'
import {fetch} from './fetch'
import Util from './Util'

function empty () {}

window.$GP = {
    //todo 在这里添加 选择商品. 等服务;
  Util,
  VueExtend,
  ESlog: {pageview: empty, track: empty, getFingerPrint: empty},
  Server: {fetch},
}
