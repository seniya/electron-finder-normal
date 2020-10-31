import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarWidth: 400
  },
  mutations: {
    setSidebarWidth (state, width) {
      state.sidebarWidth = width
    }
  },
  actions: {
    SIDEBAR_WIDTH (context, payload) {
      context.commit('setSidebarWidth', payload)
    }
  },
  modules: {}
})
