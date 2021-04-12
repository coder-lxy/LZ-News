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
export default {
  data() {
    return {
      userId: ''
    }
  },
  components: {
    AsideProfile,
    UserManage,
  },
  created() {
    this.userId = this.$route.query.id
  },
  watch: {
    $route(to, from) {
     this.userId = this.$route.query.id
    }
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
