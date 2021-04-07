<template>
  <div>
    <div class="main">
      <AsideProfile :userInfo="userInfo" class="left"></AsideProfile>
      <UserManage :userId="userId" class="right"></UserManage>
    </div>
  </div>
</template>

<script>
import AsideProfile from '@/components/AsideProfile'
import UserManage from './components/UserManage.vue'
import { getUserInfo } from '@/services/userService.js'
export default {
  data() {
    return {
      userInfo: {},
      userId: ''
    }
  },
  components: {
    AsideProfile,
    UserManage,
  },
  created() {
    getUserInfo(this.$route.query.id).then((v) => {
      this.userInfo = v.data
      this.userId = this.userInfo.user.userId
    })
  },
}
</script>

<style scoped>
.main {
  margin-left: 268px;
}
.left {
  float: left;
  margin-right: 10px;
  margin-top: 20px;
}
.right {
  float: left;
  margin-top: 20px;
}
</style>
