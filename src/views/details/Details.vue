<template>
  <div class="container">
    <AsideProfile :userId="userId" class="aside" />
    <div class="main">
      <News :blogId="blogId" />
      <Comment :blogId="blogId"></Comment>
    </div>
  </div>
</template>

<script>
import News from '@/components/News'
// import { getUserInfo } from '@/services/userService'
import AsideProfile from '@/components/AsideProfile'
import Comment from '@/components/Comment'
export default {
  data() {
    return {
      news: {},
      userId: '',
      blogId: ''
    }
  },
  components: {
    News,
    AsideProfile,
    Comment,
  },
  created() {
    this.userId = this.$route.query.userId
    this.blogId = this.$route.query.blogId
  },
}
</script>

<style scoped>
.container {
  margin-left: 78px;
}
.aside {
  float: left;
  width: 22%;
  margin-top: 10px;
  margin-right: 20px;
}
.main {
  float: left;
  width: 60%;
  margin-top: 10px;
  max-width: 980px;
}
</style>
