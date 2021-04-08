<template>
  <div class="user_manage">
    <el-tabs :tab-position="tabPosition" v-model="activeName">
       <el-tab-pane v-if="userId==currentUserId"  name="first" label="个人资料"><UserInfo :userId="userId"></UserInfo></el-tab-pane>
      <el-tab-pane label="文章管理" name="first1" lazy><MyNews :userId="userId"></MyNews></el-tab-pane>
      <el-tab-pane label="我的关注" name="second" lazy><MyFollow :userId="userId"></MyFollow></el-tab-pane>
      <el-tab-pane label="我的粉丝" name="sdf" lazy><MyFans :userId="userId"></MyFans></el-tab-pane>
      <el-tab-pane label="我的收藏" name="fisarst" lazy><MyCollect :userId="userId"></MyCollect></el-tab-pane>
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
      activeName: 'first'
    }
  },
  created() {
    this.currentUserId = this.$store.getters['base/userInfo'].userId
    console.log('currentUserId', this.currentUserId);
    console.log('userId', this.userId);
    console.log(this.currentUserId === this.userId);
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
