<template>
  <div>
    <div class="main">
      <el-backtop></el-backtop>
      <DynamicList :dynamicList= "newsList"></DynamicList>
      <!-- <newsList :newsList="newsList"></newsList> -->
      <Loading v-show="isLoading"></Loading>
    </div>
  </div>
</template>

<script>
import DynamicList from "@/components/DynamicList";
import {getFollow} from "@/services/newsService"
import Loading from "@/components/Loading";
export default {
  components: {
    DynamicList,
    Loading
  },
  data() {
    return {
      newsList: [],
      requestData: {
        page: 1,
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
      getFollow(this.requestData.page).then((v) => {
        if(v.data.data.length===0) {
          this.$message('已经到底啦！')
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
        this.getList()
      }
    },
  }
};
</script>

<style scoped>
.main {
  width: 670px;
  margin: 10px auto;
}
</style>