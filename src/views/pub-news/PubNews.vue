<template>
  <div class="pub_news">
    <PubHeader class="header" @pubClick="handleClick"></PubHeader>
    <MavonEditor @getContent="setContent" />
    <PubSelect :dialogStatus="dialogStatus"></PubSelect>
    <!-- <Publish
      v-show="modalStatus"
      @modalChange="toChange"
      :title="this.title"
      :content="this.content"
    /> -->
    <!-- <div v-show="modalStatus" class="mask"></div> -->
  </div>
</template>

<script>
import PubHeader from './components/PubHeader'
import PubSelect from './components/PubSelect'
import MavonEditor from '@/components/MavonEditor'
export default {
  data() {
    return {
      dialogStatus: false,
      title: '',
      content: '',
    }
  },
  components: {
    PubHeader,
    PubSelect,
    MavonEditor,
  },
  methods: {
    handleClick(val) {
      this.dialogStatus = true
      this.title = val
    },
    setContent(content) {
      this.content = content
    },
  },
}
</script>

<style scoped>
.pub_news .header {
  margin: 10px 20px;
}
</style>
