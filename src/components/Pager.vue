<template>
  <el-pagination
    background
    @current-change="handleCurrentChange"
    @prev-click="handlePrevClick"
    :page-size=limit
    layout="prev, pager, next"
    :total=total
  >
  </el-pagination>
</template>

<script>
export default {
  props: {
    limit: 0,
    total: 0
  },
  methods: {
    handleCurrentChange(val) {
      console.log(val);
      this.$emit("pageChange", val)
    }
  },
};
</script>

<style>
</style>