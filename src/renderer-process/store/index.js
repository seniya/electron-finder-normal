import Vue from 'vue'
import Vuex from 'vuex'
// import _ from 'lodash'

Vue.use(Vuex)

function getObject (array, key, value) {
  let o
  array.some(function iter (a) {
    if (a[key] === value) {
      o = a
      return true
    }
    return Array.isArray(a.children) && a.children.some(iter)
  })
  return o
}

export default new Vuex.Store({
  state: {
    sidebarWidth: 300,
    detailbarWidth: 800,
    drives: [],
    folders: [],
    folderContents: [],
    openFolder: [],
    selectedFolder: null
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
    setFolderChild (state, payload) {
      // console.log('setFolderChild payload folders: ', payload.folders)
      // console.log('setFolderChild item: ', payload.item)
      // console.log('setFolderChild state folders: ', state.folders)
      // const nodes = _.find(state.folders, { nodeKey: payload.item })
      const nodes = getObject(state.folders, 'nodeKey', payload.item)
      // console.log('node : ', nodes)
      if (payload.folders && payload.folders !== undefined && payload.folders.length > 0) {
        if (nodes.children.length === 0) {
          nodes.children.push(...payload.folders)
        }
      }
    },
    setFolderContents (state, folderContents) {
      state.folderContents = folderContents
    },
    setOpenFolder (state, openFolder) {
      state.openFolder.push(openFolder)
    },
    setSelectedFolder (state, selectedFolder) {
      state.selectedFolder = selectedFolder
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
    FOLDER_CHILD (context, payload) {
      context.commit('setFolderChild', payload)
    },
    FOLDER_CONTENTS (context, payload) {
      context.commit('setFolderContents', payload)
    },
    OPEN_FOLDER (context, payload) {
      context.commit('setOpenFolder', payload)
    },
    SELECTED_FOLDER (context, payload) {
      context.commit('setSelectedFolder', payload)
    }
  },
  modules: {}
})
