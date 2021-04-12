<template>
  <div class="pub_news">
    <div class="pub_header">
    <el-row>
      <el-col :span="21">
        <el-input
          type="text"
          placeholder="请输入公告标题"
          v-model="newArticle.title"
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
// import PubHeader from './components/PubHeader'
import MavonEditor from './components/MavonEditor'
export default {
  data() {
    return {
      newArticle: {
        title: '',
        summary: '',
        article: '',
        labels: [],
        types: [],
      },
    }
  },
  components: {
    // PubHeader,
    // PubSelect,
    MavonEditor,
  },
  methods: {
    btnClick(val) {
      // this.newArticle.title = val
      if(val && this.newArticle.article) {

      } else {
        this.$message('标题和内容不能为空！')
      }
    },
    setContent(content) {
      this.newArticle.article = content
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
