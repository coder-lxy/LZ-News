<template>
  <div class="user_manage">
    <el-tabs :tab-position="tabPosition" v-model="activeName">
      <el-tab-pane :label="userId == currentUserId ?'我的资料': 'TA 的资料'" name="grzl"><UserInfo :userId="userId"></UserInfo></el-tab-pane>
      <el-tab-pane :label="userId == currentUserId ?'文章管理': 'TA 的文章'" name="wzgl" lazy><MyNews :userId="userId"></MyNews></el-tab-pane>
      <el-tab-pane :label="userId == currentUserId ?'我的关注': 'TA 的关注'" name="wdgz" lazy><MyFollow :userId="userId"></MyFollow></el-tab-pane>
      <el-tab-pane :label="userId == currentUserId ?'我的粉丝': 'TA 的粉丝'" name="wdfs" lazy><MyFans :userId="userId"></MyFans></el-tab-pane>
      <el-tab-pane :label="userId == currentUserId ?'我的收藏': 'TA 的收藏'" name="wdsc" lazy><MyCollect :userId="userId"></MyCollect></el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import UserInfo from './UserInfo'
import MyNews from './MyNews.vue'
import MyFollow from './MyFollow.vue'
import MyFans from './MyFans.vue'
import MyCollect from './MyCollect.vue'
export default {
  props: {
    userId: '',
  },
  components: {
    UserInfo,
    MyNews,
    MyFollow,
    MyFans,
    MyCollect,
  },
  data() {
    return {
      tabPosition: 'top',
      currentUserId: '',
      activeName: 'grzl'
    }
  },
  created() {
    this.currentUserId = this.$store.getters['base/userInfo'].userId
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
