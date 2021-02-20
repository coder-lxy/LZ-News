<template>
  <div class="article_manage">
    <el-row class="sort">
      <el-col :span="2">排序:</el-col>
      <el-col :span="4">
        <el-link
          :underline="false"
          :class="{ active: activeIndex === 0 }"
          @click="getNewsList('createDate')"
        >
          按最后发布时间
        </el-link>
      </el-col>
      <el-col :span="4">
        <el-link
          :underline="false"
          :class="{ active: activeIndex === 1 }"
          @click="getNewsList('hitCount')"
        >
          按访问量
        </el-link>
      </el-col>
    </el-row>
    <el-row v-for="(item, index) in newsList" :key="index" class="list_item">
      <el-row class="title">
        <el-col :span="24">
          <el-link :underline="false">{{ item.title }}</el-link>
        </el-col>
      </el-row>
      <el-row class="news_info">
        <el-col :span="6">
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
            v-if="userId === currentUserId"
            @click="editNews(item.blogId)"
            >编辑</el-button
          >
        </el-col>
        <el-col :span="2">
          <el-button
            type="text"
            v-if="userId === currentUserId"
            @click="deleteNews(item.blogId)"
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
export default {
  data() {
    return {
      newsList: [],
      requestData: {
        page: 1,
        limit: 10,
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
    this.getNewsList('createDate')
  },
  methods: {
    getNewsList(sortName) {
      if (sortName === 'createDate') {
        this.requestData.sortName = 'createDate'
        this.activeIndex = 0
      } else {
        this.requestData.sortName = 'hitCount'
        this.activeIndex = 1
      }
      getUserNewsList(this.requestData).then((v) => {
        this.newsList = v.data.data
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
