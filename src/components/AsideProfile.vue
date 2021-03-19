<template>
  <div class="aside-box">
    <el-row class="head" type="flex" justify="center" align="middle">
      <el-col :span="4">
        <el-avatar size="large" :src="userInfo.user.headUrl"></el-avatar>
      </el-col>
    </el-row>
    <el-row class="name" type="flex" justify="center" align="middle">
      <el-col :span="4">
        <span>{{userInfo.user.username }}</span>
      </el-col>
    </el-row>
    <div class="info-list">
      <el-row type="flex" justify="space-around">
        <el-col :span="4">
          <div class="count">{{ userInfo.blogCountSum }}</div>
          <div class="title font" @click="toUserCenter(user.userId)">文章</div>
        </el-col>
        <el-col :span="4">
          <div class="count">{{ userInfo.hitCountSum }}</div>
          <div class="title">访问</div>
        </el-col>
        <el-col :span="4">
          <div class="count">1</div>
          <div class="title">等级</div>
        </el-col>
      </el-row>
      <div class="item-rank"></div>
      <el-row type="flex" justify="space-around">
        <el-col :span="4">
          <div class="count">1</div>
          <div class="title">积分</div>
        </el-col>
        <el-col :span="4">
          <div class="count">{{ userInfo.fansCount }}</div>
          <div class="title">粉丝</div>
        </el-col>
        <el-col :span="4">
          <div class="count">{{ userInfo.likeCount }}</div>
          <div class="title">获赞</div>
        </el-col>
      </el-row>
      <el-row
        class="opt-button"
        type="flex"
        justify="space-around"
        align="center"
      >
        <el-col :span="12"
          ><el-button
            round
            size="small"
            v-if="userInfo.user.userId !== currentUserId"
            >私信</el-button
          ></el-col
        >
        <el-col :span="12"
          ><el-button
            round
            size="small"
            v-if="userInfo.user.userId !== currentUserId"
            >关注</el-button
          ></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUserId: '',
    }
  },
  props: {
    userInfo: {},
  },
  created() {
    this.currentUserId = this.$store.getters['base/userInfo'].userId
    console.log(this.userInfo.user.userId);
    console.log(this.currentUserId);
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
  }
}
</script>

<style scoped>
.aside-box {
  width: 300px;
  background-color: #fff;
  padding-bottom: 10px;
  margin-bottom: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
}
.el-row.head {
  height: 46px;
  margin: 12px;
}
.el-row.name {
  font-size: 14px;
  font-weight: 500;
  color: #555666;
  text-align: center;
}
.aside-box .info-list {
  padding: 9px 10px;
}
.aside-box .info-list .count {
  color: #4a4d52;
  font-size: 14px;
  text-align: center;
}
.aside-box .info-list .title {
  color: #999aaa;
  font-size: 14px;
  padding: 3px 0;
  text-align: center;
}
.aside-box .info-list .font {
  color: #267dcc;
  cursor: pointer;
}
.aside-box .info-list .item-rank {
  height: 1px;
  background-color: #f5f6f7;
  margin-bottom: 10px;
  margin-top: 10px;
}
.opt-button {
  margin-top: 18px;
}
.opt-button .el-button {
  width: 120px;
  /* height: 28px; */
  border: 1px solid #fc5531;
  background-color: #fff;
  color: #fc5531;
}
.opt-button .el-button:hover {
  background: #fff5f2;
}
</style>
