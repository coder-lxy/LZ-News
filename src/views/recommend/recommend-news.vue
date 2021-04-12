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
import { getRecList } from '@/services/newsService'
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
      },
      isLoading: false,
    }
  },
  created() {
    this.getRec()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    getRec() {
      let token = this.$store.getters['base/token']
      if(token) {
        this.isLoading = true;
        getRecList(this.requestData).then((v) => {
          if(v.data.data.length===0) {
            // this.$message('暂无推荐内容')
          } else {
            this.newsList = this.newsList.concat(v.data.data);
            this.requestData.page++;
          }
          this.isLoading = false;
        });
      } else {
        this.$message('请先登录！')
      }
    },

    handleScroll(e) {
      let scrollTop = e.target.documentElement.scrollTop;
      let clientHeight = e.target.documentElement.clientHeight;
      let scrollHeight = e.target.documentElement.scrollHeight;
      if (scrollTop + clientHeight === scrollHeight - 1) {
        this.getRec()
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
