<template>
  <div>
    <div class="main">
      <MsgManage class="right" :activeIndex="activeIndex"></MsgManage>
    </div>
  </div>
</template>

<script>
import MsgManage from './components/MsgManage.vue'
export default {
  data() {
    return {
      userInfo: {},
      userId: '',
      activeIndex: ''
    }
  },
  components: {
    MsgManage,
  },
  created() {
    this.activeIndex = this.$route.query.id
  },
}
</script>

<style scoped>
.main {
  margin-left: 268px;
}
.left {
  float: left;
  margin-right: 10px;
  margin-top: 20px;
}
.right {
  float: left;
  margin-top: 20px;
}
</style>
