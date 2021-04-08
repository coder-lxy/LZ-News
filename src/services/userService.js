import axios from "axios";
import { URL } from "./config";
// 注册
export async function register(data) {
  var resp = await axios.post(URL+"register/", data)
  return resp;
}
// 登录
export async function login(data) {
  var resp = await axios.post(URL + "login/", data)
  return resp;
}
// 登出
export async function logout() {
  var resp = await axios.get(URL + "user/logout/")
  return resp;
}
// 修改用户信息
export async function updateUserInfo(data) {
  var resp = await axios.post(URL + "user/updateUserByUserId/", data)
  return resp;
}
// 获取用户信息
export async function getUserInfo(id) {
  var resp = await axios.get(URL + "all/info/" + id)
  return resp.data;
}
