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
import NewsList from "@/components/NewsList";
import {getNewsList} from "@/services/newsService"
import Loading from "@/components/Loading";

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
        typeName: '娱乐'
      },
      isLoading: false,
    }
  },
  created() {
    this.getList()
  },
   mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    getList() {
      this.isLoading = true;
      getNewsList(this.requestData).then((v) => {
        if(v.data.data.length===0) {
          // this.$message('暂无内容！')
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
      if (scrollTop + clientHeight - scrollHeight > -1) {
        this.getList()
      }
    },
  }
};
</script>

<style scoped>
.main {
  width: 670px;
  margin: 0 auto;
}
</style>