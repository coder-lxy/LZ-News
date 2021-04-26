<template>
  <div class="detail_news">
    <el-row class="article-title">
      <el-col :span="24">
        <h1>{{ news.title }}</h1>
      </el-col>
    </el-row>
    <el-row class="article-info-box">
      <el-col :span="2">
        <el-link :underline="false" @click="toUserCenter(news.userId)">{{
          news.username
        }}</el-link>
      </el-col>
      <el-col :span="6">{{ news.createDate }}</el-col>
      <el-col :span="2">
        <Icon type="hit"></Icon>
        <span class="count">{{ news.hitCount }}</span>
      </el-col>
      <el-col :span="2">
        <Icon type="collect"></Icon>
        <span class="count" v-if="collectCount">{{ collectCount }}</span>
      </el-col>
    </el-row>
    <el-row class="article-info-box">
      <el-col :span="2">文章标签:</el-col>
      <span v-for="item in news.labels" :key="item" class="label-item">{{item}}</span>
    </el-row>
    <div v-html="news.article" class="article-content"></div>
    <div class="more-toolbox">
      <el-row class="toolbox-list">
        <el-col :span="3">
          <el-link
            :underline="false"
            @click="changeLike(news.blogId)"
            :class="{ active: news.isLike === 1 }"
          >
            <Icon type="like"></Icon>
            <span> {{ news.isLike === 1 ? '已赞' : '点赞' }}</span>
            <span class="count">{{ news.likeCount }}</span>
          </el-link>
        </el-col>
        <el-col :span="3">
          <el-link :underline="false" href="#comment">
            <Icon type="comment"></Icon>
            <span>评论</span>
            <span class="count">{{ news.commentCount }}</span>
          </el-link>
        </el-col>
        <el-col :span="3">
          <el-link :underline="false" @click="toCollect(news.blogId)" :class="{ active: isCollect === 1 }">
            <Icon type="collect"></Icon>
            <span>  {{ isCollect === 1 ? '已收藏' : '收藏' }}</span>
            <span class="count">{{ collectCount }}</span>
          </el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import { getNews, like } from '@/services/newsService'
// import { , getComment } from '@/services/newsService'

import { collect, getCollectCount, isCollect } from '@/services/collectService'
export default {
  props: {
    blogId: {},
  },
  data() {
    return {
      news: {},
      isCollect: 0, // 收藏状态
      collectCount: 0 // 收藏量
    }
  },
  components: {
    Icon,
  },
  created() {
    getNews(this.blogId).then((v) => {
      this.news = v.data
    })
    this.toGetCollectCount()
    this.getCollectStatus()
  },
  methods: {
    changeLike(id) {
      like(id).then((v) => {
        this.news.likeCount = v.data.data.likeCount
        this.news.isLike = v.data.data.isLike
      })
    },
    // 获取收藏状态
    getCollectStatus() {
      let requestData = {}
      requestData.userId = this.$store.getters['base/userInfo'].userId
      requestData.blogId = this.blogId
      isCollect(requestData).then(v => {
        this.isCollect = v.data.data.status
      })
    },
    toUserCenter(id) {
      this.$router.push({
        path: '/user',
        query: {
          id: id,
        },
      })
    },
    // 获取文章的收藏量
    toGetCollectCount() {
      getCollectCount(this.blogId).then(v=>{
        this.collectCount = v.data.data.count
      })
    },
    // 收藏文章
    toCollect(id) {
      let resData = {}
      resData.userId = this.$store.getters['base/userInfo'].userId
      resData.blogId = id
      collect(resData).then(v => {
        this.isCollect = v.data.data.status
        this.toGetCollectCount()
      })
    }
  },
}
</script>

<style scoped>
.detail_news {
  position: relative;
  width: 980px;
  min-height: 300px;
  padding: 0 24px 16px;
  background: #fff;
  margin-bottom: 10px;
}
.el-row.article-title {
  height: 42px;
  line-height: 42px;
  margin-bottom: 8px;
}
.el-row.article-title h1 {
  font-size: 24px;
  color: #222226;
  font-weight: 600;
  word-break: break-all;
}
.article-content {
  padding-top: 20px;
  min-height: 300px;
}
.el-row.article-info-box {
  height: 32px;
  padding-left: 10px;
  background: #f7f7fc;
  border-radius: 4px;
  color: #999aaa;
  font-size: 14px;
}
.label-item {
  margin-right: 8px;
  padding: 3px 6px;
  font-size: 12px;
  background-color: #fff;
  color: #5094d5;
  border: 1px solid #eaeaef;
  height: 24px;
  line-height: 17px;
  border-radius: 2px;
  display: inline-block;
}
.el-row.toolbox-list {
  height: 32px;
  line-height: 32px;
  padding-left: 10px;
  background: #f7f7fc;
  border-radius: 4px;
  color: #999aaa;
  font-size: 14px;
}
.el-link.active {
  color: #ca0c16;
}
.count {
  margin-left: 6px;
}
</style>
