<template>
  <div class="pub_news">
    <div class="pub_header">
    <el-row>
      <el-col :span="21">
        <el-input
          type="text"
          placeholder="请输入公告标题"
          v-model="notice.title"
          maxlength="50"
          show-word-limit
        >
        </el-input>
      </el-col>
      <el-col :span="2" class="pub_btn">
        <el-button type="primary" size="medium" @click="btnClick"
          >发布</el-button
        >
      </el-col>
    </el-row>
  </div>
    <MavonEditor @getContent="setContent" />
  </div>
</template>

<script>
import { pubNotice } from '@/services/noticeService'
import MavonEditor from './components/MavonEditor'
export default {
  data() {
    return {
      notice: {
        title: '',
        article: ''
      }
    }
  },
  components: {
    MavonEditor,
  },
  methods: {
    btnClick(val) {
      if(this.notice.title && this.notice.article) {
        pubNotice(this.notice).then(v => {
          console.log(v)
          if(v.data.code === 0) {
            this.$message({
              type: 'success',
              message: v.data.msg
            })
            this.$router.push('/hot')
          } else {
            this.$message({
              type: 'error',
              message: v.data.errorMessage
            })
          }
        })
      } else {
        this.$message('标题和内容不能为空！')
      }
    },
    setContent(content) {
      this.notice.article = content
    }
  }
}
</script>

<style scoped>
.pub_header {
  width: 100%;
}
.pub_header .pub_btn {
  margin-left: 6px;
}
</style>
