<template>
  <div>
    <div class="main">
      <AsideProfile :userId="userId" class="left"></AsideProfile>
      <UserManage :userId="userId" class="right"></UserManage>
    </div>
  </div>
</template>

<script>
import AsideProfile from '@/components/AsideProfile'
import UserManage from './components/UserManage.vue'
// import { getUserInfo } from '@/services/userService.js'
export default {
  data() {
    return {
      // userInfo: {},
      userId: ''
    }
  },
  components: {
    AsideProfile,
    UserManage,
  },
  created() {
    this.userId = this.$route.query.id
    // getUserInfo(this.userId).then((v) => {
    //   this.userInfo = v.data
    // })
  },
}
</script>

<style scoped>
.main {
  margin-left: 108px;
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
