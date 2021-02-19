<template>
  <div>
    <div class="main">
      <newsList :newsList="newsList"></newsList>
    </div>
  </div>
</template>

<script>
import NewsList from "@/components/NewsList";
import {getRecList} from "@/services/newsService"
export default {
  components: {
    NewsList,
  },
  data() {
    return {
      newsList: [],
      page: 1
    }
  },
  created() {
    getRecList(this.page).then(v => {
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