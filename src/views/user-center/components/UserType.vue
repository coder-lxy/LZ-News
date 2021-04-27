<template>
  <div class="type">
    <h3>{{typeName}}</h3>
    <div class="column_article_list">
      <el-row v-for="item in newsList" :key="item.blogId" class="list-item">
        <el-link :underline=false @click="toDetail(item.blogId, item.userId)">{{item.title}}</el-link>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getTypeNews } from '@/services/newsService'
export default {
  props: {
    typeName: '',
    userId: ''
  },
  data() {
    return {
      requestData: {
        page: 1,
        limit: 10,
        typeName: '',
        userId: ''
      },
      newsList:[]
    }
  },
  created() {
   this.getList()
  },
  watch: {
    typeName(newVal, oldVal) {
      if(newVal) {
        console.log(123);
      }
      // console.log(123);
      // this.typeName = newVal
      // console.log(111);
      // this.getList()
    }
  },
  methods: {
    getList() {
      this.requestData.typeName = this.typeName
      this.requestData.userId = this.userId
      getTypeNews(this.requestData).then(v=> {
        this.newsList = v.data.data
      })
    },
    toDetail(BlogId, userId) {
      this.$router.push({
        path: '/detail',
        query: {
          blogId: BlogId,
          userId: userId
        },
      })
    }
  }
}
</script>

<style scoped>
.type {
  width: 60%;
  min-height: 500px;
  background-color: #fff;
  padding: 10px;

}
.column_article_list {
  border-top: 1px solid #f0f2f5;
  -webkit-box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
}
.list-item {
  padding: 12px 24px 10px 24px;
  border-bottom: 1px solid #f0f2f5;
}

</style>