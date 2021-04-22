<template>
   <div class="article-bar">
      <div class="go-back">
        <a href="">
          <i></i>
          文章管理</a
        >
      </div>

      <div class="input-box">
        <input maxlength="100" class="title-input" v-model="title" />
        <span class="number"> <span>1</span>/100 </span>
      </div>
      <div class="user-box">
        <button @click="getModal()" class="btn-publish">发布文章</button>
        <div class="user-info">
          <a href="">
            <img src="" alt="" />
          </a>
          <div class="user-option-box">
            <a href="">博文管理</a>
            <a href="">我的博客</a>
            <a href="">退出</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      title:''
    }
  },
  methods:{
    getModal() {
      let status = true;
      this.$emit("showModal", status, this.title)
    },
  }

}
</script>

<style scoped>
.article-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  align-items: center;
  background-color: #f3f3f3;
}
.article-bar .go-back {
  padding-left: 24px;
  text-align: center;
  line-height: 46px;
}
.article-bar .go-back a {
  display: block;
  width: 88px;
  height: 25px;
  line-height: 25px;
  cursor: pointer;
  color: #6b6b6b;
}
.article-bar .input-box {
  width: 860px;
  height: 40px;
  margin: 8px 16px 8px 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
}
.article-bar .input-box .title-input {
  float: left;
  width: 760px;
  height: 100%;
  overflow: visible;
  padding: 8px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 4px;
  border: none;
}
.article-bar .input-box .number {
  float: right;
  line-height: 40px;
  font-size: 20px;
  margin-right: 8px;
}
.article-bar .user-box {
  height: 100%;
  padding: 8px 32px 8px 0;
}
.article-bar .user-box .btn-publish {
  float: left;
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 4px;
  background-color: #ca0c16;
}
.article-bar .user-box .user-info {
  float: left;
  position: relative;
  margin: 4px 10px 0 20px;
}
.article-bar .user-box .user-info img {
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #f00;
}

.article-bar .user-box .user-info .user-option-box {
  display: none;
  position: absolute;
  top: 36px;
  left: -35px;
  padding: 16px;
  width: 96px;
  height: 110px;
  background: #fff;
  border: 1px solid #ebebeb;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  z-index: 9999;
}
.article-bar .user-box .user-info:hover .user-option-box {
  display: block;
}
.article-bar .user-box .user-info .user-option-box a {
  display: block;
  font-size: 12px;
  color: #3c3c3c;
}
</style>