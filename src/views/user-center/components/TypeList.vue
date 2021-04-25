<template>
  <div class="type-list">
    <span>我的分类</span>
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
  width: 100%;
  height: 100px;
  background-color: #fff;
}
.type-list .el-row {
  height: 26px;
  background-color: rgb(236, 20, 20);
}

</style>