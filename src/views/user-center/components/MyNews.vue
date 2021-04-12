<template>
  <div class="article_manage">
    <el-row class="sort">
      <el-col :span="2">排序:</el-col>
      <el-col :span="4">
        <el-link
          :underline="false"
          :class="{ active: activeIndex === 0 }"
          @click="getNewsList(0)"
        >
          按最后发布时间
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link
          :underline="false"
          :class="{ active: activeIndex === 1 }"
          @click="getNewsList(1)"
        >
          按访问量
        </el-link>
      </el-col>
    </el-row>
    <el-row v-for="(item, index) in newsList" :key="index" class="list_item">
      <el-row class="title">
        <el-col :span="24">
          <el-link :underline="false" @click="toDetail(item.blogId, item.userId)">{{
            item.title
          }}</el-link>
        </el-col>
      </el-row>
      <el-row class="news_info">
        <el-col :span="5">
          {{ item.createDate }}
          <el-divider direction="vertical"></el-divider>
        </el-col>
        <el-col :span="2">
          <Icon type="hit"></Icon>
          {{ item.hitCount }}
        </el-col>
        <el-col :span="2">
          <Icon type="comment"></Icon>
          {{ item.commentCount }}
        </el-col>
        <el-col :span="2">
          <Icon type="collect"></Icon>
          {{ item.collectCount }}
        </el-col>
        <el-col :span="2" :offset="6">
          <el-button
            type="text"
            v-if="userId == currentUserId"
            @click="editNews(item.blogId)"
            >编辑</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button
            type="text"
            v-if="userId == currentUserId"
            @click="toDeleteNews(item.blogId)"
            >删除</el-button
          >
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
import { getUserNewsList } from '@/services/newsService.js'
import { deleteNews } from '../../../services/newsService'
export default {
  data() {
    return {
      newsList: [],
      requestData: {
        page: 1,
        limit: 100,
        id: 0,
        sortName: 'createDate',
      },
      activeIndex: 0,
    }
  },
  props: {
    userId: '',
  },
  components: {
    Icon,
  },
  created() {
    this.currentUserId = this.$store.getters['base/userInfo'].userId
    this.requestData.id = this.userId
    this.getNewsList(this.activeIndex)
  },
  // mounted() {
  //   window.addEventListener("scroll", this.handleScroll, true);
  // },
  methods: {
    getNewsList(index) {
      this.activeIndex = index
      this.requestData.sortName = this.activeIndex ? 'hitCount':'createDate'
      getUserNewsList(this.requestData).then((v) => {
        this.newsList = v.data.data
        // if(v.data.data.length === 0) {
        // } else {
        //   this.newsList = this.newsList.concat(v.data.data)
        //   this.requestData.page++
        // }
      })
    },
    toDetail(BlogId, userId) {
      this.$router.push({
        path: '/detail',
        query: {
          blogId: BlogId,
          userId: userId
        },
      })
    },
    editNews(id) {
      this.$router.push({
        path: '/editor',
        query: {
          id: id,
        },
      })
    },
    // handleScroll(e) {
    //   let scrollTop = e.target.documentElement.scrollTop;
    //   let clientHeight = e.target.documentElement.clientHeight;
    //   let scrollHeight = e.target.documentElement.scrollHeight;
    //   if (scrollTop + clientHeight === scrollHeight - 1) {
    //     this.getNewsList(this.activeIndex)
    //   }
    // },
    toDeleteNews(id) {
      this.$confirm('确定要删除这篇文章吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          deleteNews(id).then(v=>{
            this.getNewsList(this.activeIndex)
          })
          this.$message({
            type: 'success',
            message: '已删除!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除！',
          })
        })
      
    }
  },
}
</script>

<style scoped>
.article_manage {
  padding-left: 20px;
}
.article_manage .sort {
  padding-bottom: 10px;
  border-bottom: 1px dotted #ddd;
}
.article_manage .sort .active {
  color: #fc5531;
}
.article_manage .list_item {
  border-bottom: 1px dotted #ddd;
}
.article_manage .title .el-link {
  font-size: 16px;
  font-weight: 500;
  color: #555666;
  padding: 8px;
}
.article_manage .news_info {
  font-size: 14px;
  color: #999aaa;
  padding: 8px;
}
</style>
