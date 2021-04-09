<template>
  <div class="container">
    <AsideProfile :userId="userId" class="aside" />
    <div class="main">
      <News :news="news" />
      <Comment :blogId="blogId"></Comment>
    </div>
  </div>
</template>

<script>
import News from '@/components/News'
import { getNews, getComment } from '@/services/newsService'
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
    getNews(this.blogId).then((v) => {
      this.news = v.data
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
