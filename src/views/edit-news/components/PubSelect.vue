<template>
  <div class="pub_select">
    <el-row>
      <el-col :span="2">标签：</el-col>
      <el-col :span="20">
        <el-tag
          :key="tag"
          v-for="tag in dynamicTags"
          closable
          :disable-transitions="false"
          @close="handleClose(tag)"
        >
          {{ tag }}
        </el-tag>
        <el-input
          class="input-new-tag"
          v-if="inputVisible"
          v-model="inputValue"
          ref="saveTagInput"
          size="small"
          @keyup.enter.native="handleInputConfirm"
          @blur="handleInputConfirm"
        >
        </el-input>
        <el-button v-else class="button-new-tag" size="small" @click="showInput"
          >+ New Tag</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="2">分类:</el-col>
      <el-col :span="20">
        <el-select v-model="editArticle.types[0]" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="dialog-footer">
      <el-col :span="4" :offset="16">
        <el-button @click="hiddenDialog">取 消</el-button>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="pubNews">
          发 布
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { publish } from '@/services/newsService.js'
import { updateNews } from '../../../services/newsService'
export default {
  props: {
    editArticle: {},
  },
  data() {
    return {
      dynamicTags: [],
      inputVisible: false,
      inputValue: '',
      options: [
        '科技',
        '娱乐',
        '游戏',
        '体育',
        '财经',
        '军事',
        '时尚',
        '旅游',
        '美食',
      ],
    }
  },
  created() {
    this.dynamicTags = this.editArticle.labels
  },
  methods: {
    hiddenDialog() {
      this.$emit('hiddenDialog', false)
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },
    handleInputConfirm() {
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    pubNews() {
      this.editArticle.labels = this.dynamicTags
      updateNews(this.editArticle).then((v) => {
        this.$message('发布成功！')
        this.$router.push({
          path: '/',
        })
      })
    },
  },
}
</script>

<style scoped>
.el-row {
  margin-bottom: 10px;
}
.el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
.dialog-footer {
  margin-top: 20px;
}
</style>
