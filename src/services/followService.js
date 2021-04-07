import axios from "axios";
import { URL } from "./config";
// 关注模块
// 获取关注列表
export async function getFollowList(id) {
  var resp = await axios.get(URL + 'user/selectFollowUserByUserId?userId=' + id) 
    return resp
}
// 获取粉丝列表
export async function getFansList(id) {
  var resp = await axios.get(URL + 'user/selectFansByUserId?userId=' + id) 
    return resp
}
// 关注和取消关注
export async function follow(data) {
  var resp = await axios.post(URL + 'user/followUser', data) 
    return resp
}
// 获取关注状态
export async function isFollow(data) {
  var resp = await axios.post(URL + 'user/isFollow', data) 
    return resp
}