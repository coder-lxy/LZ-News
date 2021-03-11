<template>
  <div class="my-collect">
    <div class="collect-list">
      <div class="list-item" v-for="item in collectList" :key="item.blogId">
        <el-row>
          <el-col :span="20">{{item.title}}</el-col>
          <el-col :span="2" class="icon">
            <Icon type="collect"></Icon>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { collectList } from '@/services/newsService'
import Icon from '@/components/Icon'
export default {
  props: {
    userId: ''
  },
  components: {
    Icon
  },
  data() {
    return {
      collectList: []
    }
  },
  created() {
    collectList(this.userId).then(v => {
      this.collectList = v.data
    })
  }

}
</script>

<style scoped>
.collect-list {
  padding: 0 16px;
}
.collect-list .list-item {
  background: #fff;
  border: 1px solid #ededed;
  border-radius: 4px;
  margin-bottom: 8px;
  height: 52px;
  overflow: hidden;
  line-height: 52px;
}
.icon {
  color: #ffcc76;
}
</style>
