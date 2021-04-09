<template>
  <div class="wrap">
    <div class="follow_list" v-if="followList.length">
      <el-row v-for="(item, index) in followList" :key="index">
      <el-col :span="2">
        <el-avatar size="small" :src="item.headUrl"></el-avatar>
      </el-col>
      <el-col :span="2">
        <el-link :underline="false">
          {{ item.username }}
        </el-link>
      </el-col>
      <el-col :span="2" :offset="16">
        <el-button round size="small" @click="getFollow(item.userId, index)">{{item.status? '取消关注' : '关注'}}</el-button>
      </el-col>
    </el-row>
    </div>
    <div class="follow_list" v-if="!followList.length">
      暂无关注
    </div>
  </div>
</template>

<script>
import { follow, getFollowList } from '@/services/followService.js'
export default {
  data() {
    return {
      followList: [],
    }
  },
  props: {
    userId: ''
  },
  created() {
    getFollowList(this.userId).then(v => {
      this.followList = v.data.data
    })
  },
  methods: {
    // 关注或取消关注
    getFollow(id, index) {
      let resData = {}
      resData.userId = this.$store.getters['base/userInfo'].userId
      resData.followUserId = id
      follow(resData).then(v => {
        this.followList[index].status = v.data.data.status
      })
    }
  }
}
</script>

<style scoped>
.wrap {
  padding: 20px;
}
.wrap .el-row {
  padding: 10px;
  border-bottom: 1px solid #f0f2f5;
}
</style>
