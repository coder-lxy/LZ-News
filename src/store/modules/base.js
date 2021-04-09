import { BASE } from '@/store/type'
export default {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: null,
      searhKey: ''
    }
  },
  getters: {
    // 获取state
    [BASE.TOKEN](state) {
      return state.token || window.localStorage.getItem('token')
    },
    [BASE.USER_INFO](state) {
      return state.userInfo || JSON.parse(window.localStorage.getItem('userInfo'))
    },
    [BASE.SEARCH_KEY](state) {
      return state.searhKey
    }
  },
  mutations: {
    // 改变state
    [BASE.TOKEN] (state, payload) {
      state.token = payload
    },
    [BASE.USER_INFO] (state, payload) {
      state.userInfo = payload
      window.localStorage.setItem('userInfo', JSON.stringify(payload))
    },
    [BASE.SEARCH_KEY](state, payload) {
      state.searhKey = payload
    }
  },
}