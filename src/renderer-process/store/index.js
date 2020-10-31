import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebarWidth: 300,
    detailbarWidth: 800,
    drives: [],
    folders: [],
    folderContents: []
  },
  mutations: {
    setSidebarWidth (state, width) {
      state.sidebarWidth = width
    },
    setDetailbarWidth (state, width) {
      state.detailbarWidth = width
    },
    setDrives (state, drives) {
      state.drives = drives
    },
    setFolders (state, folders) {
      state.folders = folders
    },
    setFolderContents (state, folderContents) {
      state.folderContents = folderContents
    }
  },
  actions: {
    SIDEBAR_WIDTH (context, payload) {
      context.commit('setSidebarWidth', payload)
    },
    DETAILBAR_WIDTH (context, payload) {
      context.commit('setDetailbarWidth', payload)
    },
    DRIVES (context, payload) {
      context.commit('setDrives', payload)
    },
    FOLDERS (context, payload) {
      context.commit('setFolders', payload)
    },
    FOLDER_CONTENTS (context, payload) {
      context.commit('setFolderContents', payload)
    }
  },
  modules: {}
})
