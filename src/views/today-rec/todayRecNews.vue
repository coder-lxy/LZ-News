<template>
  <div>
    <div class="main">
      <el-backtop></el-backtop>
      <newsList :newsList="newsList"></newsList>
      <Loading v-show="isLoading"></Loading>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import { getTodayRec } from '@/services/newsService'
import Loading from "@/components/Loading";
import {debounce} from "@/util/base.js"

export default {
  components: {
    NewsList,
    Loading,
  },
  data() {
    return {
      newsList: [],
      isLoading: false,
    }
  },
  created() {
    this.getNew()
  },
  methods: {
    getNew() {
      this.isLoading = true;
      getTodayRec().then((v) => {
        this.newsList = v.data;
        this.isLoading = false;
      });
    }
  }
}
</script>

<style scoped>
.main {
  width: 670px;
  margin: 0 auto;
}
</style>
