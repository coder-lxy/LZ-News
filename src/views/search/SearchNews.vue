<template>
  <div>
    <div class="main" @scroll="handleScroll">
      <el-backtop></el-backtop>
      <newsList :newsList="newsList"></newsList>
      <Loading v-show="isLoading"></Loading>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import { searchNews } from '@/services/searchService'
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
      requestData: {
        page: 1,
        limit: 10,
        title: ''
      },
      isLoading: false,
    }
  },
  created() {
    this.requestData.title = this.$route.query.str
    this.getSearch()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    getSearch() {
      this.isLoading = true;
      searchNews(this.requestData).then((v) => {
        if(v.data.data.length===0) {
          this.$message('没有搜到相关内容！')
        } else {
          this.newsList = this.newsList.concat(v.data.data);
          this.requestData.page++;
        }
        this.isLoading = false;
      });
    },
    handleScroll(e) {
      let scrollTop = e.target.documentElement.scrollTop;
      let clientHeight = e.target.documentElement.clientHeight;
      let scrollHeight = e.target.documentElement.scrollHeight;
      // console.log(scrollTop + clientHeight-scrollHeight);
      if (scrollTop + clientHeight - scrollHeight > -1) {
        this.getHot()
      }
    },
  }
}
</script>

<style scoped>
.main {
  width: 670px;
  margin: 0 auto;
}
</style>
