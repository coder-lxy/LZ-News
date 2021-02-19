import Vue from 'vue';
import Vuex from 'vuex'
import modules from './modules'
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    ...modules
  }
  // state:{
  //   token: '',
  //   userInfo: {},
  //   isLogin: false,
  //   searchKey: '',
  //   blogListIndex: 0,
  //   userListIndex: 0,
  //   likeList: [],
  //   commentList: [],
  //   noticeList: []
  // },
  // mutations:{
  //   // 存储token方法
  //   // 设置token等于外部传递进来的值
  //   setToken(state,token) {
  //     state.token = token
  //     localStorage.setItem('token',token) // 同步存储token至localStorage
  //   },
  //   setUserInfo(state,userInfo) {
  //     localStorage.setItem('userInfo',JSON.stringify(userInfo))
  //     state.userInfo=userInfo
  //   },
  //   removeUserInfo(state) {
  //     state.token = '';
  //     state.userInfo = {}
  //   },
  //   changeIsLogin(state, isLogin) {
  //     state.isLogin=isLogin
  //   },
  //   changeSearchKey(state,value){
  //     state.searchKey = value
  //   },
  //   changeBlogListIndex(state,value) {
  //     state.blogListIndex=value
  //   },
  //   changeUserListIndex(state,value) {
  //     state.userListIndex=value
  //   },
  //   setLikeList(state,value) {
  //     state.likeList=value
  //   },
  //   setCommentList(state,value) {
  //     state.commentList=value
  //   },
  //   setNoticeList(state,value) {
  //     state.noticeList=value
  //   }
  // },
  
  // actions: {                 //推荐使用的异步修改数据仓库
  //   setSearchKey(context,value){   
  //     context.commit('changeSearchKey',value)
  //  },
  // //  setBlogListIndex(context,value) {
  // //    context.commit('changeBlogListIndex',value)
  // //  }
  // }

});
export default store;
