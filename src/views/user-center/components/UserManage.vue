<template>
  <div class="user_manage">
    <el-tabs :tab-position="tabPosition">
       <el-tab-pane v-if="userId===currentUserId" label="个人资料"><UserInfo :userId="userId"></UserInfo></el-tab-pane>
      <el-tab-pane label="文章管理"><MyNews :userId="userId"></MyNews></el-tab-pane>
      <el-tab-pane label="我的关注"><MyFollow /></el-tab-pane>
      <el-tab-pane label="我的粉丝"><MyFans /></el-tab-pane>
      <el-tab-pane label="我的收藏"><MyCollect :userId="userId"></MyCollect></el-tab-pane>
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
      currentUserId: ''
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
