<template>
  <div class="comment-box">
    <div class="comment-edit-box">
      <div class="user-img"></div>
      <!-- 评论框 -->
      <form>
        <textarea
          class="comment-content"
          v-model="commentContent"
          placeholder="评论"
          cols="30"
          rows="10"
        ></textarea>
      </form>
      <el-button @click="toPubComment(commentContent)" type="primary" :disabled="!commentContent" class="btn-comment-show">评论</el-button>
    </div>
    <div class="comment-list-container">
      <div class="comment-list-box">
        <ul class="comment-list" v-for="(item, index) in comments" :key="index">
          <li class="comment-line-box">
            <a href="">
              <img :src="item.headUrl" alt="" />
            </a>
            <div class="right-box">
              <div class="new-info-box">
                <a href="">
                  <span>{{ item.username }}</span>
                </a>
                <span>:</span>
                <span class="floor-num"></span>
                <span class="new-comment">{{ item.content }}</span>
                <span class="date">{{ item.createDate }}</span>
                <span class="btn-reply" @click="reply(index, item.commentId)">回复</span>
                <span class="btn-reply" v-if="item.userId===currentUserId" @click="toDelComment(item.commentId)">删除</span>
              </div>
            </div>
          </li>
          <li class="reply-box">
            <ul class="comment-list">
              <li
                class="comment-line-box"
                v-for="(i, index1) in item.commentVOS"
                :key="index1"
              >
                <el-link :underline="false" @click="toUserCenter(i.userId)">
                  <img
                    :src="i.headUrl"
                    alt=""
                    @click="toUserCenter(i.userId)"
                  />
                </el-link>
                <div class="right-box">
                  <div class="new-info-box">
                    <el-link :underline="false" @click="toUserCenter(i.userId)">
                      <span class="name">{{ i.username }}</span>
                    </el-link>
                    <span class="text">回复</span>
                    <span class="name">{{ item.username }}</span>
                    <span class="colon">:</span>
                    <span class="new-comment">{{ i.content }}</span>
                    <span class="date">{{ i.createDate }}</span>
                    <span class="btn-reply" @click="reply(index, i.commentId)"
                      >回复
                    </span>
                    <span class="btn-reply" v-show="i.userId===currentUserId" @click="toDelComment(i.commentId)"
                      >删除
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <div v-show="currentIndex === index" class="comment-edit-box">
            <div class="user-img"></div>
            <form action="">
              <textarea
                class="comment-content"
                v-model="replyContent"
                placeholder="回复"
                ref="focusTextarea"
              ></textarea>
            </form>
            <el-button
              type="primary"
              @click="toPubComment(replyContent)"
              :disabled="!replyContent"
              class="btn-comment-show"
            >回复</el-button>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getComment, pubComment, delComment } from '@/services/newsService'
export default {
  data() {
    return {
      currentUserId: '',
      comments: {},
      commentContent: '', // 评论内容
      replyContent: '', // 回复内容
      comment: {
        commentId: '',
        content: '',
        createDate: '',
        blogId: '',
        userId: '',
        status: 0,
        parentId: -1,
      },
      commentData: {
        page: 1,
        limit: 10,
        blogId: ''
      },
      currentIndex: -1,
    }
  },
  props: {
    blogId: ''
  },
  created() {
    this.currentUserId = this.$store.getters['base/userInfo'].userId // 通过当前用户控制删除评论按钮显示
    this.initComment()
  },
  methods: {
    // 获取评论
    initComment() {
      this.commentData.blogId = this.blogId
      getComment(this.commentData).then((v) => {
        this.comments = v.data.data
      })
    },
    toPubComment(val) {
      this.comment.blogId = this.blogId
      this.comment.userId = this.currentUserId
      this.comment.content = val
      pubComment(this.comment).then((v) => {
        this.initComment()
        this.commentContent = ''
        this.replyContent = ''
      })
    },
    // 删除评论
    toDelComment(id) {
      this.$confirm('确定要删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          delComment(id).then(v => {
            this.initComment()
          })
          this.$message({
            type: 'success',
            message: '已删除!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除！',
          })
        })
    },
    reply(index, commentId) {
      this.currentIndex = index
      this.comment.parentId = commentId
    },
    closeInput() {
      this.currentIndex = -1
    },
    toUserCenter(id) {
      this.$router.push({
        path: '/user',
        query: {
          id: id,
        },
      })
    },
  },
}
</script>

<style scoped>
.comment-box {
  margin-top: 1px;
  background: #fff;
  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 8px;
  padding-bottom: 8px;
}
.comment-box .comment-edit-box {
  display: flex;
  padding: 16px 24px 8px;
}
.comment-box .comment-edit-box input.active {
  background-color: #e33e33;
}
.comment-box .comment-edit-box .user-img {
  margin-right: 8px;
}
.comment-box .comment-edit-box .user-img img {
  margin-top: 2px;
  display: block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
}
.comment-box .comment-edit-box form {
  width: 100%;
  position: relative;
}
.comment-box .comment-edit-box form .comment-content {
  display: block;
  width: 100%;
  padding: 6px 8px;
  background: rgba(248, 249, 251, 0.8);
  border: 1px solid #dadde0;
  border-radius: 4px;
  resize: none;
  height: 36px;
  font-size: 14px;
  line-height: 22px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: height 0.3s ease-in-out;
  transition: height 0.3s ease-in-out;
}
.comment-box .comment-edit-box .btn-comment-show {
  /* width: 80px;
  height: 36px;
  background-color: #ccccd7;
  border-radius: 4px;
  font-weight: 500;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 36px; */
  margin-left: 8px;
  /* border: none; */
}
.comment-box .comment-edit-box form .comment-content.open {
  height: 64px;
  background-color: #fff;
  -webkit-box-shadow: 0 0 6px 0 #5094d5;
  box-shadow: 0 0 6px 0 #5094d5;
  border: 1px solid #5094d5;
}
.comment-box .comment-edit-box .bt-comment-show {
  width: 80px;
  height: 36px;
  background-color: #ccccd7;
  border-radius: 4px;
  font-weight: 500;
  color: #fff;
  font-size: 14px;
  text-align: center;
  line-height: 36px;
  margin-left: 8px;
  border: none;
}
.comment-box .comment-list-container .comment-list-box {
  padding: 0 24px;
}
.comment-box .comment-list-container .comment-list-box .comment-list {
  margin-top: 10px;
  border-bottom: 1px solid #e8e8ee;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box {
  display: flex;
  position: relative;
  margin-bottom: 8px;
}

.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  img {
  display: block;
  margin-right: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box {
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box {
  width: 100%;
  padding-right: 16px;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  > a {
  vertical-align: top;
  display: inline-block;
}
.comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .name {
  margin-left: 0;
  margin-right: 0;
  font-size: 14px;
  font-weight: 400;
  color: #555666;
  vertical-align: top;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .colon {
  color: #555666;
  font-weight: bold;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .floor-num {
  margin-left: 8px;
  font-size: 12px;
  margin-right: 6px;
  vertical-align: middle;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .new-comment {
  margin-left: 10px;
  color: #222226;
  word-break: break-all;
  font-size: 14px;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .date {
  margin-left: 10px;
  font-size: 12px;
  color: #6b6b6b;
}

.comment-box
  .comment-list-container
  .comment-list-box
  .comment-list
  .comment-line-box
  .right-box
  .new-info-box
  .btn-reply {
  margin-left: 10px;
  min-width: auto;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  color: #5893c2;
  padding: 0 4px;
  cursor: pointer;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .reply-box
  .comment-list {
  margin-left: 32px;
  padding-left: 10px;
  border-left: 2px solid #f5f6f7;
  border-bottom: none;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .reply-box
  .comment-list
  .right-box
  .name {
  font-size: 14px;
  color: #555666;
}
.comment-box
  .comment-list-container
  .comment-list-box
  .reply-box
  .comment-list
  .right-box
  .text {
  margin-left: 8px;
  font-size: 12px;
  margin-right: 6px;
  vertical-align: middle;
  color: #999;
}
</style>
