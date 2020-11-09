<template>
  <div class="file-list">
    <div class="list">
      <div class="focus-container list-focus-container">
        <v-simple-table fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="folder-contents-table-th">NAME</th>
                <th class="folder-contents-table-th">TYPE</th>
                <th class="folder-contents-table-th">DATE</th>
                <th class="folder-contents-table-th">SIZE</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in $store.state.folderContents" :key="item.label"
                @dblclick="onDbClickItem(item)"
                @click="onClickItem(item)">
                <td class="folder-contents-table-td-1">
                  <div class="folder-contents-table-td-div">
                    <v-icon medium left class="folder-icon">{{$getFileIcon(item.data)}}</v-icon>
                    {{item.label}}
                  </div>
                </td>
                <td class="folder-contents-table-td-2">
                  <span v-if="!item.data.isDir">{{$getFileType(item.label)}}</span>
                  <span v-else>폴더</span>
                </td>
                <td class="folder-contents-table-td-3">
                  <span>{{$getFileTime(item.data.stat.birthtimeMs)}}</span>
                </td>
                <td class="folder-contents-table-td-4">
                  <span v-if="!item.data.isDir">{{$getFileSizeIEC(item.data.stat.size)}}</span>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  created () { },
  computed: { },
  methods: {
    onClickItem (item) {
      console.log('onClickItem item: ', item)
      this.$store.dispatch('SELECTED_CONTENT', item)
      // const res = window.ipcRenderer.sendSync('req_imageData', item)
      // const resParse = JSON.parse(res)
      // console.log('onClickItem resParse : ', resParse)
    },
    onDbClickItem (item) {
      // console.log('onDbClickItem item', item)
      // console.log('onDbClickItem $store.state.openFolder', this.$store.state.openFolder)
      // this.$store.dispatch('OPEN_FOLDER', this.selectedFolder)
      // console.log('onDbClickItem $store.state.openFolder', this.$store.state.openFolder)

      const res = window.ipcRenderer.sendSync('req_folderContents', item.nodeKey)
      const resParse = JSON.parse(res)
      const newContents = resParse.contents
      const folders = resParse.folders
      this.$store.dispatch('FOLDER_CHILD', { item: item.nodeKey, folders })
      this.$store.dispatch('FOLDER_CONTENTS', newContents)

      const rootDir = (item.data.rootDir).substring(0, (item.data.rootDir).length - 1)
      this.$store.dispatch('OPEN_FOLDER', rootDir)
      this.$store.dispatch('OPEN_FOLDER', item.nodeKey)

      // this.$store.dispatch('SELECTED_CONTENT', null)
      // this.$store.dispatch('SELECTED_FOLDER', item.nodeKey)
    }
  }
}
</script>

<style lang="scss" >
</style>
