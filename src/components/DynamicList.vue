<template>
  <div class="dynamic-list">
    <div class="list-item" v-for="(item, index) in dynamicList" :key="index">
      <el-row class="list-header">
        <el-col :span="2">
          <el-avatar size="small" :src="item.headUrl"></el-avatar>
        </el-col>
        <el-col :span="6" >
          <el-link class="username" :underline="false" @click="toUserCenter(item.userId)">{{item.username}}</el-link>
          <span>发布了博客</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24"><h2 @click="toDetail(item.blogId, item.userId)">{{item.title}}</h2></el-col>
      </el-row>
      <el-row>
        <el-col :span="24" class="summary">{{item.summary}}</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dynamicList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    toUserCenter(id) {
      this.$router.push({
        path: '/user',
        query: {
          id: id,
        },
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
  }
}
</script>

<style scoped>
.dynamic-list {
  background-color: #fff;
}
.dynamic-list .list-item {
  padding: 10px 20px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
  border-bottom: 1px solid #e6e6e6;
  background-color: #fff;
}
.dynamic-list .list-item .list-header {
  font-size: 14px;
  color: #8a8a8a;
}
.dynamic-list .list-item .list-header .username {
  margin-right: 6px;
  cursor: default;
}
.dynamic-list .list-item h2 {
  font-size: 16px;
  font-weight: bold;
  color: #3d3d3d;
  cursor: default;
  text-overflow: ellipsis;
}
.dynamic-list .list-item h2:hover {
  color: #fc5531;
}
.dynamic-list .list-item .summary {
  color: #8a8a8a;
  font-size: 14px;
}
</style>