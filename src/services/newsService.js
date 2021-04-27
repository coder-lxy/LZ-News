import axios from "axios";
import { URL } from "./config";
// 发布新闻
export async function publish(data) {
  var resp = await axios.post(URL + "user/publish/", data)
  return resp;
}
// 删除新闻
export async function deleteNews(id) {
  var resp = await axios.get(URL + "user/deleteBlogById?blogId="+ id)
  return resp;
}
// 编辑新闻
export async function updateNews(data) {
  var resp = await axios.post(URL + "user/update/", data)
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
export async function getComment(data) {
  var resp = await axios.post(URL + "all/getCommentVOByBlogId/", data)
  return resp;
}
// 发布评论
export async function pubComment(comment) {
  var resp = await axios.post(URL + "user/addComment/", comment)
  return resp;
}
// 删除评论
export async function delComment(id) {
  var resp = await axios.get(URL + "user/deleteCommentByCommentId?commentId=" + id)
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
// 最新
export async function getnewList(data) {
  var resp = await axios.post(URL + "all/newest/" , data)
  return resp;
}
// 获取今日推荐新闻
export async function getTodayRec() {
  var resp = await axios.get(URL + "all/todayRecommend/")
  // console.log(resp);
  return resp.data;
}
// 根据用户id 获取新闻列表(按最后发布时间)
export async function getUserNewsList(data) {
  var resp = await axios.post(URL + "all/user", data)
  return resp;
}
// 获取动态
export async function getFollow(data) {
  var resp = await axios.post(URL + "user/follow/", data)
  return resp;
}
// 点赞
export async function like(id) {
  var resp = await axios.get(URL + "user/like/" + id)
  return resp;
}
// 搜索
export async function search(msg) {
  var resp = await axios.get(URL + "search/" + msg)
  return resp;
}
// 分类
export async function getClassify(id) {
  var resp = await axios.get(URL + "gettype/" + id)
  return resp;
}
// 根据类名和用户名获取文章
export async function getTypeNews(data) {
  var resp = await axios.post(URL + "all/getBlogByTypeNameAndUserId/", data)
  return resp;
}

export async function renewal() {
  var resp = await axios.post(URL + "islogin/")
  return resp;
}



export async function getUserBlogs(userId) {
  var resp = await axios.post(URL + "publishcomment/", userId)
  return resp;
}




