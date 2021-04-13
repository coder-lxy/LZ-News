import axios from "axios";
import { URL } from "./config";
// 收藏文章
export async function collect(data) {
  var resp = await axios.post(URL + 'collect/addCollect/', data) 
    return resp
}
// 获取文章被收藏的次数
export async function getCollectCount(id) {
  var resp = await axios.get(URL + 'collect/selectCollectCountByBlogId/'+ id) 
    return resp
}
// 获取收藏的文章
export async function collectList(id) {
  var resp = await axios.get(URL + 'collect/select/' + id) 
    return resp
}
// 获取文章的收藏状态
export async function isCollect(data) {
  var resp = await axios.post(URL + 'collect/isCollect', data) 
    return resp
}