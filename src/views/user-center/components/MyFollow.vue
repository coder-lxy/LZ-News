<template>
  <div class="wrap">
    <el-row v-for="(item, index) in followList" :key="index">
      <el-col :span="2">
        <el-avatar size="small" :src="item.headUrl"></el-avatar>
      </el-col>
      <el-col :span="2">
        <el-link :underline="false">
          {{ item.username }}
        </el-link>
      </el-col>
      <el-col :span="2">
        <el-button>已关注</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      followList: [],
    }
  },
}
</script>

<style scoped>
.wrap {
  padding: 20px;
}
.wrap .el-row {
  border-bottom: 1px solid #f0f2f5;
}
</style>
