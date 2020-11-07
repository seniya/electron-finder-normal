<template>
  <div class="panel">
    <div class="changes-list-container file-list" style="overflow: auto; padding-top: 5px;">
      <v-treeview
        :items="$store.state.folders"
        activatable
        hoverable
        dense
        loading-icon
        :load-children="onSelectedFolder"
        :active.sync="active"
        :open.sync="$store.state.openFolder"
        @update:active="onUpdateActiveFolder">
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="item.nodeKey === 'ROOT'" medium left class="pc-icon">
            mdi-desktop-classic
          </v-icon>
          <v-icon v-else medium left class="folder-icon">
            {{open ? 'mdi-folder-open' : 'mdi-folder'}}
          </v-icon>
        </template>
        <template v-slot:label="{ item }">
          <span class="folder-label-text">{{item.label}}</span>
        </template>
        <template v-slot:append="{ item }">
          <v-btn icon v-if="isAbleFav(item)" @click.stop="onFavorite(item)">
            <v-icon medium>
              {{isFav(item) ? ' mdi-bookmark' : ' mdi-bookmark-outline'}}
            </v-icon>
            <!-- <v-icon medium left class="pc-icon">
              mdi-bookmark-outline
            </v-icon> -->
          </v-btn>

        </template>
      </v-treeview>
    </div>
    <div></div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

export default {
  components: {},
  data () {
    return {
      active: []
    }
  },
  created () {
    this.initSystem()
    console.log('this.$store.state.favKeys : ', this.$store.state.favKeys)
  },
  computed: {},
  watch: {},
  methods: {
    initSystem () {
      // console.log('window.ipcRenderer : ', window.ipcRenderer)
      const res = window.ipcRenderer.sendSync('req_system')
      // console.log('window.ipcRenderer res : ', res)
      const resObj = JSON.parse(res)
      this.$store.dispatch('DRIVES', resObj.drives)
      this.$store.dispatch('FOLDERS', resObj.folders)
    },
    onUpdateActiveFolder (items) {
      // console.log('onUpdateActiveFolder items[0] :', items[0])
      // console.log('onUpdateActiveFolder this.active[0] :', this.active[0])
      // console.log('onUpdateActiveFolder this.$store.state.selectedFolder :', this.$store.state.selectedFolder)

      if (this.$store.state.selectedFolder !== this.active[0]) {
        // console.log('this.selectedFolder : ', this.selectedFolder)
        // console.log('this.$store.state.folders : ', this.$store.state.folders)
        // console.log('this.$store.state.drives : ', this.$store.state.drives)
        if (items.length > 0) {
          if (items[0] === 'ROOT') {
            this.$store.dispatch('FOLDER_CONTENTS', this.$store.state.drives)
          } else {
            // console.log('onUpdateActiveFolder items[0] : ', items[0])
            // this.selectedFolder = items[0] + this.pathSep
            // this.selectedFolder = items[0]
            this.$store.dispatch('SELECTED_FOLDER', items[0])
            // this.$store.state.selectedFolder
            const res = window.ipcRenderer.sendSync('req_folderContents', this.$store.state.selectedFolder)
            const resParse = JSON.parse(res)
            const newContents = resParse.contents
            const folders = resParse.folders
            this.$store.dispatch('FOLDER_CHILD', { item: this.$store.state.selectedFolder, folders })
            this.$store.dispatch('FOLDER_CONTENTS', newContents)
          }
        }
        if (items[0] === undefined) {
          const res = window.ipcRenderer.sendSync('req_folderContents', this.$store.state.selectedFolder)
          const resParse = JSON.parse(res)
          const newContents = resParse.contents
          const folders = resParse.folders
          this.$store.dispatch('FOLDER_CHILD', { item: this.$store.state.selectedFolder, folders })
          this.$store.dispatch('FOLDER_CONTENTS', newContents)
        }
      }
    },
    onSelectedFolder (node) {
      console.log('onSelectedFolder start node: ', node)
      const res = window.ipcRenderer.sendSync('req_folders', node)
      const resObj = JSON.parse(res)
      if (node.children.length) {
        node.children.splice(0, node.children.length)
      }
      node.children.push(...resObj)
      console.log('onSelectedFolder end')
    },
    onFavorite (item) {
      console.log('onFavorite item : ', item)
      console.log('onFavorite item.ino : ', item.data.stat.ino)
      this.$emit('save-fav', item)
    },
    isAbleFav (item) {
      if (item.id === 'ROOT') {
        return false
      }
      const rootDir = item.data.rootDir + '\\'
      if (item.id === rootDir) {
        return false
      }
      if ((item.label).includes('RECYCLE.BIN')) {
        return false
      }
      return true
    },
    isFav (item) {
      if (item.id === 'ROOT') {
        return false
      }
      const rootDir = item.data.rootDir + '\\'
      if (item.id === rootDir) {
        return false
      }
      if ((item.label).includes('RECYCLE.BIN')) {
        return false
      }
      const allKeys = this.$store.state.favKeys
      if (allKeys.includes(item.data.stat.ino)) {
        return true
      }
      return false
    }
  }

}
</script>

<style lang="scss" >
.v-treeview--dense .v-treeview-node__root {
  min-height: 35px !important;
}
.pc-icon {
  color: rgba($color: rgb(43, 22, 7), $alpha: 0.5) !important
}
.folder-icon {
  color: rgba($color: #ccc, $alpha: 0.3) !important
}
</style>
