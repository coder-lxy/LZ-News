import axios from "axios";
import { URL } from "./config";
// 搜索文章
export async function searchNews(data) {
  var resp = await axios.post(URL + "all/search/", data)
  return resp;
}