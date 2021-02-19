<template>
  <i class="iconfont" :class="[iconClass,extraClass]"></i>
</template>

<script>
var map = {
  like: 'icon-dianzan',
  hit: 'icon-hit',
  comment:'icon-pinglun',
  grzx: 'icon-gerenzhongxin',
  tuichu: 'icon-tuichu',
  collect: 'icon-shoucang',
  folder: 'icon-folder',
  newfolder: 'icon-newfolder',
  wenjian: 'icon-wenjian',
  edit: 'icon-edit'
}
export default {
  props:{
    type:{
      type: String,
      required:true
    },
    extraClass:{
      type: String,
      default:""
    }
  },
  computed:{
    iconClass() {
      return map[this.type]
    }
  }
}
</script>

<style>
@import "//at.alicdn.com/t/font_2080474_y6fe5en56x.css";
</style>