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
      </v-treeview>
    </div>
    <div></div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

export default {
  components: {

  },
  data () {
    return {
      pathSep: '',
      selectedFolder: null,
      contents: [],
      active: []
    }
  },
  created () {
    this.initSystem()
  },
  computed: {
  },
  watch: {
    selected: 'randomAvatar'
  },
  methods: {
    initSystem () {
      const res = window.ipcRenderer.sendSync('req_system')
      const resObj = JSON.parse(res)
      this.pathSep = resObj.pathSep
      this.$store.dispatch('DRIVES', resObj.orderItems)
      this.$store.dispatch('FOLDERS', resObj.folders)
    },
    clearAllContentItems () {
      this.contents.splice(0, this.contents.length)
    },
    onUpdateActiveFolder (items) {
      if (this.selectedFolder !== this.active[0]) {
        console.log('this.selectedFolder : ', this.selectedFolder)
        if (items.length > 0) {
          if (items[0] === 'ROOT') {
            this.clearAllContentItems()
            this.contents.push(...this.$store.state.drives)
          } else {
            this.selectedFolder = items[0] + this.pathSep
            this.clearAllContentItems()
            const res = window.ipcRenderer.sendSync('req_folderContents', this.selectedFolder)
            const newContents = JSON.parse(res)
            this.contents.push(...newContents)
          }
          this.$store.dispatch('FOLDER_CONTENTS', this.contents)
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
