<template>
  <div class="login">
    <div class="title">注册</div>
    <el-form :model="registerForm" ref="registerForm" :rules="rules">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          show-password
          v-model="registerForm.password"
        ></el-input>
      </el-form-item>
      <el-button @click="submitForm('registerForm')">注册</el-button>
      <el-button @click="toLogin">返回</el-button>
    </el-form>
  </div>
</template>

<script>
import { register } from '@/services/userService.js'
export default {
  data() {
    return {
      registerForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.registerForm).then((v) => {
            if (v.data.code === 0) {
              this.$message('注册成功！')
              this.$router.push({
                path: '/login',
              })
            } else {
              this.$router.push({
                path: '/register',
              })
              this.$message(v.data.msg)
            }
          })
        } else {
          return false
        }
      })
    },
    toLogin() {
      this.$router.push({
        path: '/login'
      })
    }
  },
}
</script>

<style scoped>
.login {
  width: 500px;
  height: 360px;
  padding: 60px 20px;
  text-align: center;
  border: 1px solid #fff;
  background-color: #fff;
  margin: 100px auto;
}
.login .title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}
.login .el-input {
  width: 360px;
}
</style>
