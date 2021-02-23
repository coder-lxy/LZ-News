<template>
  <div>
    <div class="main">
      <newsList :newsList="newsList"></newsList>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import { getRecList } from '@/services/newsService'
export default {
  components: {
    NewsList,
  },
  data() {
    return {
      newsList: [],
      requestData: {
        page: 1,
        limit: 10,
      },
    }
  },
  created() {
    getRecList(this.requestData).then((v) => {
      this.newsList = v.data.data
    })
  },
}
</script>

<style scoped>
.main {
  width: 670px;
  margin: 0 auto;
}
</style>
