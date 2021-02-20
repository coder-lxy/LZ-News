<template>
  <div>
    <div class="main">
      <AsideProfile :userInfo="userInfo" class="left"></AsideProfile>
      <UserManage :userId="userInfo.user.userId" class="right"></UserManage>
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
    }
  },
  components: {
    AsideProfile,
    UserManage,
  },
  created() {
    getUserInfo(this.$route.query.id).then((v) => {
      console.log(v)
      this.userInfo = v.data
    })
  },
}
</script>

<style scoped>
.main {
  margin-left: 78px;
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
