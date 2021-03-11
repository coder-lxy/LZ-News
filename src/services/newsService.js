import axios from "axios";
import { URL } from "./config";
// 发布新闻
export async function publish(data) {
  var resp = await axios.post(URL + "user/editor/", data)
  // console.log(resp);
  return resp;
}
// 编辑新闻
export async function updateNews(data) {
  var resp = await axios.post(URL + "user/update/", data)
  // console.log(resp);
  return resp;
}
// 获取新闻列表
export async function getNewsList(data) {
  var resp = await axios.post(URL + "all/getBlogByTypeName/", data)
  return resp;
}
// 获取新闻详情
export async function getNews(id) {
  var resp = await axios.get(URL + "all/detail/"+ id)
  return resp.data;
}
// 获取评论
export async function getComment(blogId) {
  var resp = await axios.get(URL + "comment/" + blogId)
  return resp;
}
// 发布评论
export async function pubComment(comment) {
  var resp = await axios.post(URL + "user/publishcomment/", comment)
  return resp;
}
// 推荐
export async function getRecList(data) {
  var resp = await axios.post(URL + "user/recommend/", data)
  return resp;
}
// 热榜
export async function getHotList(data) {
  var resp = await axios.post(URL + "all/hot/" , data)
  return resp;
}
// 根据用户id 获取新闻列表(按最后发布时间)
export async function getUserNewsList(data) {
  var resp = await axios.post(URL + "all/user", data)
  console.log(resp);
  return resp;
}
// 点赞
export async function like(id) {
  var resp = await axios.get(URL + "user/like/" + id)
  return resp.data;
}
// 搜索
export async function search(msg) {
  var resp = await axios.get(URL + "search/" + msg)
  return resp;
}
// 收藏文章
export async function collect(arg1, arg2) {
  var resp = await axios.get(URL + 'collect/add/' + arg1 +'/' + arg2) 
    return resp
}
// 获取收藏的文章
export async function collectList(id) {
  var resp = await axios.get(URL + 'collect/select/' + id) 
    console.log(resp);
    return resp
}
// 获取动态
export async function getFollow(page) {
  var resp = await axios.get(URL + "user/follow/"+ page)
  // console.log(resp);
  return resp;
}



export async function renewal() {
  var resp = await axios.post(URL + "islogin/")
  // console.log(resp);
  return resp;
}
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "uploadimage/", formData)
  // console.log(resp);
  return resp;
}
// 上传文章内图片
export async function uploadEditorImg(formData) {
  var resp = await axios.post(URL + "uploadeditorimage/", formData)
  // console.log(resp);
  return resp;
}
export async function getClassify(id) {
  var resp = await axios.post(URL + "gettype/" + id)
  // console.log(resp);
  return resp;
}



export async function getUserBlogs(userId) {
  var resp = await axios.post(URL + "publishcomment/", userId)
  // console.log(resp);
  return resp;
}
export async function likeMsg() {
  var resp = await axios.post(URL + "msg/like/")
  console.log(resp);
  return resp;
}
export async function lookLike() {
  var resp = await axios.post(URL + "msg/likedetail/")
  console.log(resp);
  return resp;
}
export async function commentMsg() {
  var resp = await axios.post(URL + "msg/comment/")
  console.log(resp);
  return resp;
}
export async function lookComment() {
  var resp = await axios.post(URL + "msg/commentdetail/")
  console.log(resp);
  return resp;
}
// 获取公告数量
export async function noticeMsg() {
  var resp = await axios.post(URL + "msg/notice/")
  console.log(resp);
  return resp;
}
// 获取公告列表
export async function getNotice() {
  var resp = await axios.post(URL + "msg/noticedetail/")
  console.log(resp);
  return resp;
}
// 查看公告
export async function lookNotice(id) {
  var resp = await axios.post(URL + "msg/noticedetail/"+id)
  console.log(resp);
  return resp;
}
// 发布公告
export async function pubNotice(obj) {
  var resp = await axios.post(URL + "admin/notice/",obj)
  console.log(resp);
  return resp;
}



