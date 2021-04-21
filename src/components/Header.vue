<template>
  <div class="LZ_header">
    <el-row :gutter="20">
      <el-col :xs="4" :md="8" :lg="12">
        <el-menu
          :default-active="$route.path"
          mode="horizontal"
          @select="handleSelect"
          router
        >
          <el-menu-item
            v-for="(item, index) in myMenu"
            :index="item.uri"
            :key="index"
            >{{ item.name }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="4" style="padding-top: 10px">
        <el-input placeholder="请输入内容" v-model="searchWord" @change="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col :span="2" style="padding-top: 10px">
        <el-button type="primary" plain @click="toWrite()">发布新闻</el-button>
      </el-col>
      <!-- <el-col :span="2" style="padding-top: 10px; margin-left: 18px">
        <el-button type="primary" plain v-if="userType === 2" @click="pubNotice">发布公告</el-button>
      </el-col> -->
      <el-col :span="1" style="padding-top: 10px; margin-left: 20px" v-if="token">
        <el-popover placement="bottom" width="160px" trigger="hover">
          <el-row>
            <el-col :span="24" justify="center">
              <el-button
                type="text"
                style="color:#606266"
                @click="toUserCenter"
              >
                <i class="el-icon-user"></i>
                个人中心
              </el-button>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col :span="24">
              <el-button type="text" style="color:#606266" @click="toLogout">
                <Icon type="tuichu"></Icon>
                发布公告
              </el-button>
            </el-col>
          </el-row> -->
          <el-row>
            <el-col :span="24">
              <el-button type="text" style="color:#606266" @click="toLogout">
                <Icon type="tuichu"></Icon>
                退出
              </el-button>
            </el-col>
          </el-row>
          <el-avatar
            slot="reference"
            class="user-login"
            size="medium"
            :src="headUrl"
          ></el-avatar>
        </el-popover>
      </el-col>
      <!-- <el-col :span="1" style="padding-top: 10px">
        <el-badge>
          <el-button type="text" style="color: #000" @click="dynamic" v-if="token">动态</el-button>
        </el-badge>
      </el-col> -->
      <el-col :span="1" style="padding-top: 10px; margin-lefitem.countt: 20px">
        <el-popover placement="bottom" trigger="hover">
          <el-row v-for="(item,index) in msgList" :key="index">
            <el-col :span="24" justify="center">
              <el-button type="text" style="color:#606266" @click="toMsgCenter(index)">{{item.label}}</el-button>
              <el-badge v-if="item.count" :value="item.count"/>
            </el-col>
          </el-row>
          <el-badge :is-dot="isDot" slot="reference"><el-button type="text" style="color: #000" v-if="token" @click="toMsgCenter">消息</el-button></el-badge>
        </el-popover>
      </el-col>
      <el-col :span="1" style="padding-top: 10px">
      </el-col>
      <el-col :span="1" style="padding-top: 10px">
        <el-button
          v-if="!token"
          type="text"
          @click="toLoginPage()"
          >登录/注册</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Icon from './Icon'
import { logout } from '@/services/userService'
import { commentNotice, likeNotice, followNotice } from '@/services/noticeService'
export default {
  components: {
    Icon,
  },
  data() {
    return {
      headUrl: '', // 头像
      userId: '', // 用户Id
      userType: 0,
      token: '',
      searchWord: '', // 搜索关键字
      myMenu: [
        {
          name: '热点',
          uri: '/hot',
        },
        {
          name: '推荐',
          uri: '/recommend',
        },
        {
          name: '最新',
          uri: '/newest',
        },
        {
          name: '动态',
          uri: '/dynamic',
        }
      ],
      msgList: [
        {
          label: '公告',
          count: 0,
        },{
          label: '评论',
          count: 0,
        },{
          label: '关注',
          count: 0,
        },{
          label: '点赞',
          count: 0,
        }],
      activeIndex: '0',
      commentCount: 0,  // 评论数量
      likeCount: 0, // 点赞数量
      noticeCount: 0, // 公告数量
      isDot: false
    }
  },
  updated() {
    if(this.$store.getters['base/token']) {
      this.userId = this.$store.getters['base/userInfo'].userId
      this.userType = this.$store.getters['base/userInfo'].userType
      this.token = this.$store.getters['base/token']
      this.headUrl = this.$store.getters['base/userInfo'].headUrl
       // 评论通知
      commentNotice(this.userId).then(v => {
        if(v.data.data.count) {
          this.msgList[1].count = v.data.data.count
          this.isDot = true
        }
      })
      // 关注通知
      followNotice(this.userId).then(v=> {
        if(v.data.data.count) {
          this.msgList[2].count = v.data.data.count
          this.isDot = true
        }
      })
      // 点赞通知
      likeNotice(this.userId).then(v=>{
        if(v.data.data.count) {
          this.msgList[3].count = v.data.data.count
          this.isDot = true
        }
      })
    }
  },
  methods: {
    handleSelect(tab, event) {
    },
    toLoginPage() {
      this.$router.push({
        path: '/login',
        // query:''
      })
    },
    // 搜索
    search(value) {
      // this.$store.commit(['base/searchKey'], value);
      this.$router.push({
        path: '/search',
        query: {
          str: value
        }
      })
      console.log(value)
    },
    toWrite() {
      if(this.token) {
        this.$router.push({
          path: '/pub',
        })
      }else {
        this.$message('请先登录！')
      }
    },
    toUserCenter() {
      this.$router.push({
        path: '/user',
        query: {
          id: this.userId,
        },
      })
    },
    toMsgCenter(id) {
      this.$router.push({
        path: '/msg',
        query: {
          id: id,
        },
      })
    },
    toLogout() {
      this.$confirm('确定要退出吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning',
      })
        .then(() => {
          logout().then((v) => {
            this.token = '',
            localStorage.removeItem('token')
            localStorage.removeItem('userInfo')
            this.$store.commit('base/token', '')
            this.$store.commit('base/userInfo', null)
            this.$router.push({
              path: '/',
            })
          })
          this.$message({
            type: 'success',
            message: '已退出!',
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出',
          })
        })
    },
    dynamic() {
      this.$router.push({
        path: '/dynamic',
      })
    },
    pubNotice() {
      if(this.token) {
        this.$router.push({
          path: '/pub-notice'
        })
      }
    }
  },
}
</script>

<style>
.LZ_header {
  width: 100%;
  height: 60px;
  background-color: #fff;
  overflow: hidden;
  padding: 0 28px;
}
.LZ_header .el-menu {
  overflow: hidden;
  height: 60px;
}
.LZ_header .el-menu.el-menu--horizontal {
  border-bottom: none;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.el-popover > .el-row {
  height: 40px;
  border-bottom: 1px solid #e8e8ed;
}
/* .el-popover .el-row:nth-child(1) {
  border-bottom: none;
} */
/* .el-popover .el-row:nth-child(4) {
  border-bottom: none;
} */
</style>
