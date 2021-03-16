<template>
  <div class="container">
    <AsideProfile :userInfo="userInfo" class="aside" />
    <div class="main">
      <News :news="news" />
      <Comment></Comment>
    </div>
  </div>
</template>

<script>
import News from '@/components/News'
import { getNews, getComment } from '@/services/newsService'
import { getUserInfo } from '@/services/userService'
import AsideProfile from '@/components/AsideProfile'
import Comment from '@/components/Comment'
export default {
  data() {
    return {
      news: {},
      // userId: "",
      userInfo: {},
    }
  },
  components: {
    News,
    AsideProfile,
    Comment,
  },
  created() {
    getNews(this.$route.query.id).then((v) => {
      this.news = v.data
      getUserInfo(this.news.userId).then((v) => {
        this.userInfo = v.data
      })
    })
  },
}
</script>

<style scoped>
.container {
  margin-left: 78px;
}
.aside {
  float: left;
  margin-top: 10px;
  margin-right: 20px;
}
.main {
  float: left;
  margin-top: 10px;
}
</style>
