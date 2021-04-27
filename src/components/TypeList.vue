<template>
  <div class="type-list">
    <span class="title">分类专栏</span>
    <el-row v-for="item in typeList" :key="item">
      <el-col :span="24" class="typeList-item">
        <span @click="showList(item)">{{item}}</span>
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
  },
  methods: {
    showList(typeName) {
      this.$emit('showList', typeName)
    }
  }
}
</script>

<style scoped>
.type-list {
  padding: 20px;
  width: 100%;
  min-height: 100px;
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
.el-col.typeList-item {
  padding: 10px;
  cursor: pointer;
}


</style>