<template>
  <div>
    <div class="main">
      <newsList :newsList="newsList"></newsList>
    </div>
  </div>
</template>

<script>
import NewsList from "@/components/NewsList";
import {getNewsList} from "@/services/newsService"
export default {
  components: {
    NewsList,
  },
  data() {
    return {
      newsList: [],
      newsData: {
        page: 1,
        typeName: '旅游'
      }
    }
  },
  created() {
    getNewsList(this.newsData).then(v => {
      this.newsList = v.data.data
    })
  },
};
</script>

<style scoped>
.main {
  width: 670px;
  margin: 0 auto;
}
</style>