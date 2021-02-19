<template>
  <div class="user-aside">
    <el-tabs :tab-position="tabPosition" style="height: 200px">
      <el-tab-pane label="文章管理"><MyNews /></el-tab-pane>
      <el-tab-pane label="我的关注"><MyFollow /></el-tab-pane>
      <el-tab-pane label="我的粉丝"><MyFans /></el-tab-pane>
      <el-tab-pane label="我的收藏">123</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import MyNews from './MyNews.vue'
import MyFollow from './MyNews.vue'
import MyFans from './MyNews.vue'
export default {
  data() {
    return {
      tabPosition: 'left',
    }
  },
  coponents: {
    MyNews,
    MyFollow,
    MyFans,
  },
}
</script>

<style></style>
