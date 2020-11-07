<template>
  <div class="file-list">
    <div class="list flex-wrapper-scroll">
      <div class="focus-container list-focus-container flex-wrapper-grid" style="">
        <div
          class="flex-item"
          v-for="item in $store.state.folderContents" :key="item.label"
          @dblclick="onDbClickItem(item)" @click="onClickItem(item)">
          <div class="item-icon-wrapper">
            <div v-if="!item.data.isDir && item.data.mimeType && ((item.data.mimeType).startsWith('image') || (item.data.mimeType).startsWith('audio'))">
              <thumbnailPic :item_="item"/>
            </div>
            <v-icon v-else class="folder-icon item-icon">{{$getFileIcon(item.data)}}</v-icon>
          </div>
          <div class="item-text-wrapper">
            {{item.label}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'
import thumbnailPic from '@/renderer-process/components/thumbnailPic.vue'
window.ipcRenderer = ipcRenderer

export default {
  components: {
    thumbnailPic
  },
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
  .flex-wrapper-scroll {
   overflow-y: auto !important;
  }
  .flex-wrapper-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;

    .flex-item {
      width: 150px;
      min-height: 150px;
      height: auto;

      .item-icon-wrapper {
        text-align: center;

        .item-icon {
          font-size: 90px !important;
        }
      }
      .item-text-wrapper {
        text-align: center;
        padding: 5px;
        display: -webkit-box;
        max-width: 200px;
        height: 62px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.625;
      }
    }
    .flex-item:hover {
      background-color: rgba($color: #eeeeee, $alpha: 0.3)
    }
  }

</style>
