<template>
  <div class="type-list">
    <span class="title">分类专栏</span>
    <el-row v-for="item in typeList" :key="item">
      <el-col :span="24">
        {{item}}
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getClassify } from '@/services/newsService'
export default {
  props: {
    userId: ''
  },
  data() {
    return {
      typeList:[]
    }
  },
  created() {
    getClassify(this.userId).then(v=> {
      console.log(v);
      this.typeList = v.data
    })
  }
}
</script>

<style scoped>
.type-list {
  padding: 20px;
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.title {
  display: block;
  color: #3d3d3d;
  background: #f5f5f5;
  padding: 0 16px;
  height: 38px;
  line-height: 38px;
}
.type-list .el-row {
  margin-top: 16px;
}

</style>