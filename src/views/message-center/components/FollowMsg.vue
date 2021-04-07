<template>
  <div class="msg-content">
    <div class="msg-list" v-if="msgList.length">
      <div class="msg-list-item" v-for="item in msgList" :key="item.remindId">
        <el-row>
          <el-col :span="24">{{item.remindContent}}</el-col>
        </el-row>
      </div>
    </div>
    <div class="msg-list" v-else>暂无关注信息</div>
  </div>
</template>

<script>
// import { lookLike } from '@/services/noticeService.js'
export default {
  data() {
    return {
      msgList: []
    }
  },
  props: {
    userId: ''
  },
  created() {
    // lookLike(this.userId).then(v=> {
    //   this.msgList = v.data.data
    // })
  }
}
</script>

<style>
.msg-content {
  padding: 20px;
}
.msg-content .msg-list-item {
  padding: 10px;
  border-bottom: 1px solid #f0f2f5;
}
</style>