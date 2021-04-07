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
        <el-button round size="small" @click="getFollow(item.userId)">取消关注</el-button>
      </el-col>
    </el-row>
    </div>
    <div class="follow_list" v-if="!followList.length">
      暂无关注
    </div>
  </div>
</template>

<script>
import { isFollow, follow, getFollowList } from '@/services/followService.js'
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
      var list = v.data.data
      list.forEach((element, index) => {
        this.followList.push(element)
        var status = this.getFollowStatus(element.userId)
        status.then(v=> {
          this.followList[index].status = v
        })
      });
    })
    console.log('followList', this.followList)
  },
  methods: {
    // 获取关注状态
    getFollowStatus(id) {
      let resData = {}
      resData.userId = this.$store.getters['base/userInfo'].userId
      resData.followUserId = id
      return isFollow(resData).then(v => {
        return v.data.data.status
      })
    },
    // 关注或取消关注
    getFollow(id) {
      let resData = {}
      resData.userId = this.$store.getters['base/userInfo'].userId
      resData.followUserId = id
      follow(resData).then(v => {
        console.log(v)
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
