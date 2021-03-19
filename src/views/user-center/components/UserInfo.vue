<template>
  <div class="user-info">
    <div class="user-info-header">
      <el-row>
        <el-col :span="24">
          <div class="user-img">
            <img :src="user.headUrl" />
            <span>上传头像</span>
            <input type="file" class="modify-img" @change="uploadFile($event)" />
        </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6" class="username">
          <h2>{{user.username}}</h2>
        </el-col>
      </el-row>
    </div>
    <div class="user-info-base">
      <el-row class="title">
        <el-col :span="24"><h2>基本信息</h2></el-col>
      </el-row>
      <div class="info-box">
        <div class="show-box" v-show="!isEdit">
          <el-button type="text" class="edit" @click="Edit">编辑</el-button>
          <el-row>
            <el-col :span="4">用户昵称</el-col>
            <el-col :span="4">{{user.username}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">用户ID</el-col>
            <el-col :span="4">{{user.userId}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">性别</el-col>
            <el-col :span="4">{{user.sex ? user.sex : '未填写'}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">用户角色</el-col>
            <el-col :span="4">{{user.userType}}</el-col>
          </el-row>
          <el-row>
            <el-col :span="4">个人简介</el-col>
            <el-col :span="4">{{user.introduction ? user.introduction: '未填写'}}</el-col>
          </el-row>
        </div>
        <div class="edit-box" v-show="isEdit">
          <el-form :model="editUser" label-width="90px">
            <el-row>
              <el-col :span="12">
                <el-form-item label="用户昵称:">
                  <el-input v-model="editUser.username"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="用户ID:">
                  <el-input v-model="editUser.userId" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="性别:">
                  <el-radio v-model="editUser.sex" label="男">男</el-radio>
                  <el-radio v-model="editUser.sex" label="女">女</el-radio>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="用户角色:">
                  <el-input v-model="editUser.userType" :disabled="true"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="个人简介:">
                  <el-input type="textarea" v-model="editUser.introduction" placeholder="你很懒，还没有添加简介"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
          <el-row>
            <el-button type="info" @click="isEdit = false">取消</el-button>
            <el-button type="primary" @click="editSave()">保存</el-button>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { updateUserInfo, getUserInfo, uploadImg } from "@/services/userService";
export default {
  props: {
    userId: ''
  },
  data() {
    return {
      user: {},
      isEdit: false,
      editUser: {}
    };
  },
  created() {
    this.getUser()
    this.editUser = this.user
    console.log(this.user);
  },
  methods: {
    // 获取用户信息
    getUser() {
      getUserInfo(this.userId).then((v) => {
        this.user = v.data.user
        // this.$store.commit('base/userInfo', v.data)
      })
    },
    //上传图片
    uploadFile(event) {
      var file = event.target.files[0]; //获取input的图片file值
      var formData = new FormData(); // 创建form对象
      formData.append("file", file); //对应后台接收图片名
      uploadImg(formData).then((v) => {
        // this.imgUrl = v.data.msg;
        this.resetUser()
      });
    },
    // 编辑用户信息
    Edit() {
      this.isEdit = true
      this.editUser = this.$store.getter['base/userInfo']
    },
    editSave() {
      updateUserInfo(this.editUser).then(v=> {
        if(v.data.code===0) {
          this.$message(v.data.data)
          this.resetUser()
          this.isEdit = false
        } else {
          this.$message(v.data.data)
        }
      })
    },
    // 更新localStorage
    resetUser() {
      getUserInfo(this.user.userId).then(v => {
        this.$store.commit('base/userInfo', v.data.user)
      })
    }
  },
};
</script>

<style scoped>
.user-info {
  width: 100%;
  /* min-height: 980px; */
  background-color: #f1f3f7;
}
.user-info .user-info-header {
  width: 100%;
  height: 180px;
  background-color: #fff;
  margin-bottom: 10px;
  padding: 35px 48px 0 40px;
}
.user-info .user-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  border: 1px solid #464646;
}
.user-info .user-img span {
  display: none;
  width: 100%;
  height: 24px;
  text-align: center;
  line-height: 24px;
  position: absolute;
  left: 0;
  bottom: 0;
  font-size: 12px;
  color: #f0f0f5;
  background: rgba(0, 0, 0, 0.8);
}
.user-info .user-img:hover span {
  display: block;
}
.user-info .user-img img {
  width: 100%;
  height: 100%;
}
.user-info .user-img input {
  filter: alpha(opacity=0);
  opacity: 0;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 24px;
  line-height: 24px;
  text-align: center;
}
.username {
  margin-top: 10px;
  margin-left: 15px;
}
.user-info .user-info-base {
  width: 100%;
  background-color: #fff;
  padding-top: 40px;
  color: #555666;
  font-size: 16px;
  padding-right: 24px;
}
.user-info .user-info-base .title {
}
.user-info .user-info-base .el-row {
  margin-bottom: 20px;
}
.user-info .user-info-base .info-box {
  padding: 16px;
  padding-bottom: 10px;
  background-color: #f8f8f8;
}
.user-info .user-info-base .info-box .show-box {
  position: relative;
}
.user-info .user-info-base .info-box .show-box .edit {
  position: absolute;
  top: 0;
  right: 0;
}

</style>