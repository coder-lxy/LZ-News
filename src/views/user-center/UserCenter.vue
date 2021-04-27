<template>
  <div>
    <div class="main">
      <div class="left">
        <AsideProfile :userId="userId" ></AsideProfile>
        <TypeList :userId="userId" @showList="handleShow"></TypeList>
      </div>
      <UserManage :userId="userId" class="right" v-if="!showList"></UserManage>
      <UserType class="right" v-if="showList" :typeName="typeName" :userId="userId"></UserType>
    </div>
  </div>
</template>

<script>
import AsideProfile from '@/components/AsideProfile'
import TypeList from '@/components/TypeList'
import UserType from '@/components/UserType'
import UserManage from './components/UserManage.vue'
export default {
  data() {
    return {
      userId: '',
      typeName: '',
      showList: false
    }
  },
  components: {
    AsideProfile,
    UserManage,
    TypeList,
    UserType
  },
  created() {
    this.userId = this.$route.query.id
  },
  watch: {
    $route(to, from) {
     this.userId = this.$route.query.id
    }
  },
  methods: {
    handleShow(val) {
      this.showList = true
      this.typeName = val
    }
  }
}
</script>

<style scoped>
.main {
  margin-left: 108px;
}
.left {
  float: left;
  width: 22%;
  margin-right: 10px;
  margin-top: 20px;
}
.right {
  float: left;
  width: 60%;
  margin-top: 30px;
}
</style>
