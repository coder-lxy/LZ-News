<template>
  <div>
    <div class="main">
      <el-backtop></el-backtop>
      <newsList :newsList="newsList"></newsList>
      <Loading v-show="isLoading"></Loading>
    </div>
    <div class="right">
      <TodayRec></TodayRec>
    </div>
  </div>
</template>

<script>
import NewsList from '@/components/NewsList'
import TodayRec from '@/components/TodayRec'
import { getHotList } from '@/services/newsService'
import Loading from "@/components/Loading";
import {debounce} from "@/util/base.js"

export default {
  components: {
    NewsList,
    TodayRec,
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
    this.getHot()
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    getHot() {
      this.isLoading = true;
      getHotList(this.requestData).then((v) => {
        if(v.data.data.length===0) {
          // this.$message('暂无热点内容')
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
        this.getHot()
      }
    },
  }
}
</script>

<style scoped>
.main {
  margin-left: 200px;
  width: 46%;
  float: left;
}
.right {
  margin-top: 10px;
  width: 30%;
  float: right;
  margin-right: 30px;
}
</style>
