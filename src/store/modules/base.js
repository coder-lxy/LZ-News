import { BASE } from '@/store/type'
export default {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: null,
    }
  },
  getters: {
    // 获取state
    [BASE.TOKEN](state) {
      return state.token || window.localStorage.getItem('token')
    },
    [BASE.USER_INFO](state) {
      console.log(JSON.parse(window.localStorage.getItem('userInfo')));
      return state.userInfo || JSON.parse(window.localStorage.getItem('userInfo'))
    }
  },
  mutations: {
    // 改变state
    [BASE.TOKEN] (state, payload) {
      state.token = payload
      window.localStorage.setItem('token', payload)
    },
    [BASE.USER_INFO] (state, payload) {
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    }
  },
  actions: {

  }
}