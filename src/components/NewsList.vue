<template>
  <div class="news_list">
    <el-container
      class="list-item"
      v-for="(item, index) in newsList"
      :key="index"
    >
      <el-aside width="220px">
        <img :src="item.blogUrl" alt="" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <el-link :underline="false" @click="toDetail(item.blogId, item.userId)">
            <h3>{{ item.title }}</h3>
          </el-link>
        </el-header>
        <el-main>
          {{ item.summary }}
        </el-main>
        <el-footer height="22px">
          <el-row>
            <el-col :span="4">
              <el-link
                :underline="false"
                class="footer-item"
                @click="toUserCenter(item.userId)"
                >{{ item.username }}</el-link
              >
            </el-col>
            <el-col :span="8">
              <span class="footer-item">{{ item.createDate }}</span>
            </el-col>
            <el-col :span="3">
              <el-link
                :underline="false"
                class="footer-item"
                @click="changeLike(item.blogId, index)"
                :class="{ active: item.isLike === 1 }"
              >
                <Icon type="like"></Icon>
                
                {{ item.likeCount }}
              </el-link>
            </el-col>
            <el-col :span="3">
              <Icon type="hit"></Icon>
              <span class="footer-item">{{ item.hitCount }}</span>
            </el-col>
            <el-col :span="3">
              <el-link
                :underline="false"
                class="footer-item"
                @click="toDetail(item.blogId, item.userId)"
              >
                <Icon type="comment"></Icon>
                {{ item.commentCount }}
              </el-link>
            </el-col>
          </el-row>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Icon from './Icon'
import { like } from '@/services/newsService.js'
export default {
  props: {
    newsList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      blogId: null,
    }
  },
  components: {
    Icon,
  },
  methods: {
    toDetail(BlogId, userId) {
      this.$router.push({
        path: '/detail',
        query: {
          blogId: BlogId,
          userId: userId
        },
      })
    },
    changeLike(id, index) {
      // this.isLike[index]=true;
      like(id).then((v) => {
        // if(v.data.isLike===1)
        this.newsList[index].likeCount = v.data.data.likeCount
        this.newsList[index].isLike = v.data.data.isLike
        // likeMsg()
      })
      // this.likeCount=this.blogList[index].likeCount
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
.list-item {
  padding: 20px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}
img {
  width: 220px;
  height: 130px;
}
.el-main {
  color: #8a8a8a;
  font-size: 14px;
}
.footer-item {
  font-size: 12px;
  color: #666;
}
h3 {
  font-size: 20px;
}
.el-link.active {
  color: #ca0c16;
}
</style>
