<template>
  <div class="wrap">
    <div class="follow_list" v-show="fansList.length">
      <el-row v-for="(item, index) in fansList" :key="index">
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
    <div class="follow_list" v-if="!fansList.length">
      暂无粉丝
    </div>
  </div>
</template>

<script>
import { isFollow, follow, getFansList } from '@/services/followService.js'
export default {
  data() {
    return {
      fansList: [],
    }
  },
  props: {
    userId: ''
  },
  created() {
    getFansList(this.userId).then(v=>{
      var list = v.data.data
      list.forEach((element, index) => {
        this.fansList.push(element)
        var status = this.getFollowStatus(element.userId)
        status.then(v=> {
          this.fansList[index].status = v
        })
      });
    })
    console.log('fansList', this.fansList)
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
    getFollow(id, index) {
      let resData = {}
      resData.userId = this.$store.getters['base/userInfo'].userId
      resData.followUserId = id
      follow(resData).then(v => {
        this.fansList[index].status = v.data.data.status
        console.log('粉丝', v)
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
