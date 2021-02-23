<template>
  <div class="pub_news">
    <PubHeader class="header" @pubClick="handleClick"></PubHeader>
    <MavonEditor @getContent="setContent" />
    <el-dialog
      title="发布文章"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <PubSelect :newArticle="newArticle" @hiddenDialog="handleHid"></PubSelect>
    </el-dialog>
  </div>
</template>

<script>
import PubHeader from './components/PubHeader'
import PubSelect from './components/PubSelect'
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
      dialogVisible: false,
    }
  },
  components: {
    PubHeader,
    PubSelect,
    MavonEditor,
  },
  methods: {
    handleClick(val) {
      console.log(this.newArticle.article)
      this.newArticle.title = val
      this.dialogVisible = true
    },
    setContent(content) {
      this.newArticle.article = content
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    handleHid(val) {
      this.dialogVisible = val
    },
  },
}
</script>

<style scoped>
.pub_news .header {
  margin: 10px 20px;
}
</style>
