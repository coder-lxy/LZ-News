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
        <span class="read-count">{{ news.hitCount }}</span>
      </el-col>
      <el-col :span="2">
        <Icon type="collect"></Icon>
        <span class="read-count">{{ news.hitCount }}</span>
      </el-col>
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
            <span> {{ news.isLike === 1 ? '已赞' : '点赞' }}</span
            >{{ news.likeCount }}
          </el-link>
        </el-col>
        <el-col :span="3">
          <el-link :underline="false" href="#comment">
            <Icon type="comment"></Icon>
            <span>评论{{ news.commentCount }}</span>
          </el-link>
        </el-col>
        <el-col :span="3">
          <el-link :underline="false">
            <Icon type="collect"></Icon>
            <span>收藏{{ news.collect }}</span>
          </el-link>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
import { like } from '../services/newsService'
export default {
  props: {
    news: {},
  },
  components: {
    Icon,
  },
  methods: {
    changeLike(id) {
      like(id).then((v) => {
        this.news.likeCount = v.data.likeCount
        this.news.isLike = v.data.isLike
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
  line-height: 32px;
  padding-left: 10px;
  background: #f7f7fc;
  border-radius: 4px;
  color: #999aaa;
  font-size: 14px;
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
</style>
