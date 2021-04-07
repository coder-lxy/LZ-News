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
// 关注通知
export async function followNotice(id) {
  var resp = await axios.get(URL + "msg/followRemind?userId="+ id)
  return resp;
}

