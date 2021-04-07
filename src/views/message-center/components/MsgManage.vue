<template>
  <div class="user_manage">
    <el-tabs tab-position="left" v-model="activeName">
      <el-tab-pane label="公告" name="gonggao"><NoticeMsg :userId="userId"></NoticeMsg></el-tab-pane>
      <el-tab-pane label="评论" name="pinglun"><CommentMsg :userId="userId"></CommentMsg></el-tab-pane>
      <el-tab-pane label="关注" name="guanzhu"><FollowMsg :userId="userId"></FollowMsg></el-tab-pane>
      <el-tab-pane label="点赞" name="dianzan"><LikeMsg :userId="userId"></LikeMsg></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import NoticeMsg from './NoticeMsg'
import CommentMsg from './CommentMsg'
import FollowMsg from './FollowMsg'
import LikeMsg from './LikeMsg'
export default {
  props: {
    activeIndex: 0
  },
  components: {
    NoticeMsg,
    CommentMsg,
    FollowMsg,
    LikeMsg
  },
  data() {
    return {
      userId: '',
      activeName: 'gonggao',
      tabList: ['gonggao', 'pinglun', 'guanzhu', 'dianzan']
    }
  },
  created() {
    this.userId = this.$store.getters['base/userInfo'].userId
    this.activeName = this.tabList[this.activeIndex]
  }
}
</script>

<style scoped>
.user_manage .el-tabs {
  padding: 20px;
  width: 980px;
  min-height: 500px;
  background-color: #fff;
}
</style>
