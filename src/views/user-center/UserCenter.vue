<template>
  <div>
    <div class="main">
      <div class="left">
        <AsideProfile :userId="userId" class="left-item"></AsideProfile>
        <TypeList :userId="userId" class="left-item"></TypeList>
      </div>
      <UserManage :userId="userId" class="right"></UserManage>
    </div>
  </div>
</template>

<script>
import AsideProfile from '@/components/AsideProfile'
import TypeList from './components/TypeList'
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
    TypeList,
    TypeList
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
  width: 300px;
  margin-right: 10px;
  margin-top: 20px;
}
.left .left-item {
  margin-bottom: 20px;
}
.right {
  float: left;
  margin-top: 20px;
}
</style>
