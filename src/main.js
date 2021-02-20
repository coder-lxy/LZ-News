import Vue from 'vue'
import App from './App.vue'
import "./assets/style/reset.css"
import "./assets/style/global.css"
import router from "./routes/index"
import store from "./store/index"
import axios from "axios";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.use(ElementUI)
store.commit('base/token', localStorage.getItem('token'));
store.commit('base/userInfo', JSON.parse(localStorage.getItem('userInfo')))
// http response 响应拦截器
var isLock = false
axios.interceptors.request.use(config => {
  //登录成功后将后台返回的TOKEN在本地存下来,每次请求从sessionStorage中拿到存储的TOKEN值 
  config.headers.token = localStorage.getItem('token');
    // var expirTime = 60480000
    // var startTime = localStorage.getItem("startTime")
    // var endTime = Date.now()
    // if ((endTime - startTime) > expirTime) {
    //   if (!isLock) {
    //     isLock = true
    //     // renewal()
    //   }
    // }
  return config;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});

// http response 响应拦截器
axios.interceptors.response.use(response => {
  // 在接收响应做些什么，例如跳转到登录页
  // console.log(response);
  if (response.data.code == -1) {
    router.push({
      path: '/login'
    })
  }
  let token = response.headers.token;
  if (token) {
    let userInfo = response.data.data
    //如果请求时TOKEN存在,就为每次请求的headers中设置好TOKEN,后台根据headers中的TOKEN判断是否放行 
    store.commit('base/token', token);
    store.commit('base/userInfo', userInfo)
  }
  return response;
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error);
});
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
