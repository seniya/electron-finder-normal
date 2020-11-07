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
// import { openDB } from 'idb'
// const dbName = 'finder'
// const dbTbName = 'fav'

// function initIndexDb () {
//   return openDB(dbName, 1, {
//     upgrade: db => {
//       db.createObjectStore(dbTbName)
//     }
//   })
// }
// const indexDb = initIndexDb()

export default new Vuex.Store({
  state: {
    sidebarWidth: 300,
    detailbarWidth: 800,
    drives: [],
    folders: [],
    folderContents: [],
    openFolder: [],
    selectedFolder: null,
    selectedContent: null,
    favList: [],
    favKeys: [],
    isPreview: true,
    listType: 'TableView',
    currentTitle: '내PC',
    isAbout: false
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
    },
    setSelectedContent (state, selectedContent) {
      state.selectedContent = selectedContent
    },
    setFavList (state, favList) {
      state.favList = favList
    },
    setFavKeys (state, favKeys) {
      state.favKeys = favKeys
    },
    setIsPreview (state, isPreview) {
      state.isPreview = isPreview
    },
    setListType (state, listType) {
      state.listType = listType
    },
    setCurrentTitle (state, currentTitle) {
      state.currentTitle = currentTitle
    },
    setIsAbout (state, isAbout) {
      state.isAbout = isAbout
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
    },
    SELECTED_CONTENT (context, payload) {
      context.commit('setSelectedContent', payload)
    },
    FAV_LIST (context, payload) {
      context.commit('setFavList', payload)
    },
    FAV_KEYS (context, payload) {
      context.commit('setFavKeys', payload)
    },
    IS_PREVIEW (context, payload) {
      context.commit('setIsPreview', payload)
    },
    LIST_TYPE (context, payload) {
      context.commit('setListType', payload)
    },
    CURRENT_TITLE (context, payload) {
      context.commit('setCurrentTitle', payload)
    },
    SHOW_ABOUT (context, payload) {
      context.commit('setIsAbout', payload)
    }

    // async SAVE_FAV (context, payload) {
    //   const indexDb = await openDB(dbName, 1, {
    //     upgrade: db => {
    //       db.createObjectStore(dbTbName)
    //     }
    //   })
    //   console.log('SAVE_FAV indexDb : ', indexDb)
    //   const allKeys = await indexDb.getAllKeys(dbTbName)
    //   if (allKeys.includes(payload.data.stat.ino) === false) {
    //     await indexDb.add(dbTbName, payload, payload.data.stat.ino)
    //     context.dispatch('SYNC_FAV', allKeys)
    //   }
    // },
    // async SYNC_FAV (context, payload) {
    //   const indexDb = await openDB(dbName, 1, {
    //     upgrade: db => {
    //       db.createObjectStore(dbTbName)
    //     }
    //   })
    //   const allKeys = await indexDb.getAllKeys(dbTbName)
    //   context.commit('setFavList', allKeys)
    // }
  },
  modules: {}
})
