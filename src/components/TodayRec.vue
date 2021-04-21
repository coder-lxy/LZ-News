<template>
  <div class="recommendBox">
    <h3 class="title">
      <span class="line"></span>
      <span class="txt">今日推荐</span>
    </h3>
    <div class="rec-content">
      <ul class="rec-list">
        <li v-for="(item, index) in todayRec" :key="index" @click="toDetail(item.blogId)">
          <div class="img-box">
            <a href="javascript:;">
              <img :src="item.headUrl" alt="" />
            </a>
          </div>
          <div class="content-box">
            <h3 class="content-name">
              <a href="javascript:;">{{ item.title }}</a>
            </h3>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todayRec: {
      type: Array,
      default () {
        return []
      }
    },
  },
  methods: {
    toDetail(id) {
      this.$router.push({
        path: "/detail",
        query: {
          id: id,
        },
      });
    },
  },
};
</script>

<style scoped>
.recommendBox {
  width: 300px;
  height: 100%;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.04);
  background: #fff;
  padding: 16px 16px;
  margin-bottom: 8px;
  margin-top: 0;
  font-size: 14px;
  color: #999aaa;
}
.recommendBox .title {
  color: #4a4a4a;
  height: 24px;
  line-height: 24px;
  margin-bottom: 16px;
}
.recommendBox .title .line {
  display: block;
  float: left;
  width: 3px;
  height: 16px;
  background: #cf2730;
  overflow: hidden;
  margin-right: 5px;
  margin-top: 4px;
}
.recommendBox .title .txt {
  display: block;
  float: left;
  font-size: 16px;
  color: #2c3033;
}
.recommendBox .rec-content li {
  display: block;
  margin-bottom: 16px;
  height: 48px;
}
.recommendBox .rec-content li .img-box {
  float: left;
  margin-right: 10px;
}
.recommendBox .rec-content li .img-box img {
  /* display: block; */
  width: 64px;
  height: 48px;
  border-radius: 3px;
}
.recommendBox .rec-content li .content-box {
  float: left;
  width: 180px;
  padding-top: 2px;
  text-overflow: ellipsis;
}
.recommendBox .rec-content li .content-box h3 a {
  color: #3d3d3d;
  font-size: 14px;
  margin-bottom: 3px;
  overflow: hidden;
  font-weight: bold;
}
.recommendBox .rec-content li .content-box h3 a:hover {
  color: #c92027;
}
</style>