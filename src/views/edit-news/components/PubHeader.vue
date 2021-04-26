<template>
  <div class="pub_header">
    <el-row>
      <el-col :span="21">
        <el-input
          type="text"
          placeholder="请输入新闻标题"
          v-model="newTitle"
          maxlength="50"
          show-word-limit
        >
        </el-input>
      </el-col>
      <el-col :span="2" class="pub_btn">
        <el-button type="primary" size="medium" @click="btnClick"
          >保存</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {
    title: '',
  },
  data() {
    return {
      newTitle: ''
    }
  },
  created() {
    this.newTitle = this.title
  },
  watch: {
    title(newVal, oldValue) {
      this.newTitle = newVal
    }
  },
  methods: {
    btnClick() {
      this.$emit('pubClick', this.newTitle)
    },
  },
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
