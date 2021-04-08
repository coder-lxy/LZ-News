import axios from "axios";
import { URL } from "./config";
// 上传头像
export async function uploadImg(formData) {
  var resp = await axios.post(URL + "user/uploadImage/", formData)
  return resp;
}
// 上传文章内图片
export async function uploadEditorImg(formData) {
  var resp = await axios.post(URL + "user/uploadEditorImage/", formData)
  return resp;
}