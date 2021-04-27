<template>
  <div class="msg-content">
    <div class="msg-list" v-if="msgList.length">
      <div class="msg-list-item" v-for="item in msgList" :key="item.remindId">
        <el-row>
          <el-col :span="24">
            <el-link :underline=false @click="toDetail(item.noticeId)">{{item.noticeTitle}}</el-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="msg-list" v-else>暂无公告</div>
    <el-dialog title="公告详情" :visible.sync="dialogVisible" width="30%">
      <span>{{detail}}</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getNotice,lookNotice } from '@/services/noticeService.js'
export default {
  data() {
    return {
      msgList: [],
      detail: '',
      dialogVisible: false
    }
  },
  props: {
    userId: ''
  },
  created() {
    getNotice().then(v=> {
      this.msgList = v.data.data
      console.log(this.msgList);
    })
  },
  methods: {
    toDetail(id) {
      lookNotice(id).then(v=> {
        this.detail = v.data.data.noticeContent
        this.dialogVisible = true
      })
    }
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