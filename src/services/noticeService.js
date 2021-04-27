import axios from "axios";
import { URL } from "./config";
// 评论通知
export async function commentNotice(id) {
  var resp = await axios.get(URL + "msg/comment?userId="+ id)
  return resp;
}
// 点赞通知
export async function likeNotice(id) {
  var resp = await axios.get(URL + "msg/like?userId="+ id)
  return resp;
}
// 关注通知
export async function followNotice(id) {
  var resp = await axios.get(URL + "msg/follow?userId="+ id)
  return resp;
}
// 评论详情
export async function lookComment(id) {
  var resp = await axios.get(URL + "msg/commentDetail?userId=" + id)
  return resp;
}
// 点赞详情
export async function lookLike(id) {
  var resp = await axios.get(URL + "msg/likeDetail?userId="+ id)
  return resp;
}
// 关注详情
export async function lookFollow(id) {
  var resp = await axios.get(URL + "msg/followDetail?userId="+ id)
  return resp;
}
// 获取公告数量
export async function noticeMsg() {
  var resp = await axios.get(URL + "msg/notice/")
  return resp;
}
// 获取公告列表
export async function getNotice() {
  var resp = await axios.get(URL + "msg/noticeDetail/")
  return resp;
}
// 查看公告
export async function lookNotice(id) {
  var resp = await axios.get(URL + "msg/noticeDetail/"+id)
  return resp;
}
// 发布公告
export async function pubNotice(obj) {
  var resp = await axios.post(URL + "msg/admin/notice/", obj)
  return resp;
}

