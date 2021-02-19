import VueRouter from "vue-router";
import Vue from "vue"
import config from "./config"
// import store from "../store";
Vue.use(VueRouter);
//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
var router = new VueRouter(config)
export default router;
// if (localStorage.getItem('token')) {
//   store.state.token=localStorage.getItem('token')
// }
