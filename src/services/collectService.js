import axios from "axios";
import { URL } from "./config";
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