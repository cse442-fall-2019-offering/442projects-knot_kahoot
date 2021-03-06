import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    email: '',
    authenticated: false
  },
  mutations: {
    login(state, email) {
      state.email = email
      state.authenticated = true 
    },
    logout(state) {
      state.email = ""
      state.authenticated = false
    }
  },
  getters: {
    email: state => state.email,
    authenticated: state => state.authenticated
  },
  actions: {

  }
})
