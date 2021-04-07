<template>
  <div class="my-collect">
    <div class="collect-list" v-if="collectList.length">
      <div class="list-item" v-for="item in collectList" :key="item.blogId">
        <el-row>
          <el-col :span="20">
            <el-link :unserLine="false" @click="toDetail(item.blogId)">{{item.title}}</el-link>
          </el-col>
          <el-col :span="2" class="icon">
            <Icon type="collect"></Icon>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="collect-list" v-if="!collectList.length">
      暂无收藏
    </div>
  </div>
</template>

<script>
import { collectList } from '@/services/collectService'
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
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: '/detail',
        query: {
          id: id,
        },
      })
    },
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
  border-radius: 6px;
  margin-bottom: 8px;
  height: 46px;
  overflow: hidden;
  line-height: 46px;
  padding-left: 20px;
}
.icon {
  color: #ffcc76;
}
</style>
