<template>
  <div class="container">
    <AsideProfile :userInfo="userInfo" class="aside" />
    <div class="main">
      <News :news="news" />
      <Comment :newsId="news.blogId" :comments="comments"></Comment>
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
      comments: {},
    }
  },
  components: {
    News,
    AsideProfile,
    Comment,
  },
  created() {
    getNews(this.$route.query.id).then((v) => {
      console.log(v)
      this.news = v.data
      // console.log(this.blog.userId);
      getUserInfo(this.news.userId).then((v) => {
        console.log(v)
        this.userInfo = v.data
      })
    })
    getComment(this.$route.query.id).then((v) => {
      // console.log(v.data);
      this.comments = v.data
      // console.log(this.comments);
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
