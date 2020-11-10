<template>
  <div id="no-changes">
    <div v-if="item" class="content">
      <div>
        <div class="text">
          <h1>{{item.label}}</h1>
        </div>
        <div style="position: relative;">
          <img v-if="item.srcData" :src="item.srcData" style="width: 100%; border: 1px solid #ccc;">
        </div>
      </div>
      <div class="suggested-action-group primary replace-height" style="height: 0px;"></div>
      <div class="suggested-action-group normal">
        <div class="suggested-action">
          <div class="text-wrapper">
            <h2>General Info</h2>
            <hr style="margin-bottom: 10px; margin-top: 5px;">
            <p class="description">isDir : {{item.data.isDir}}</p>
            <p class="description">mimeType : {{item.data.mimeType}}</p>
            <p class="description">rootDir : {{item.data.rootDir}}</p>
            <p class="description">ino : {{item.data.stat.ino}}</p>
            <p class="description">size : {{item.data.stat.size}} bytes</p>
          </div>
        </div>
        <div v-if="item.exifrInfo" class="suggested-action">
          <div class="text-wrapper">
            <h2>Image Meta Info</h2>
            <hr style="margin-bottom: 10px; margin-top: 5px;">
            <p v-for="(value, name) in item.exifrInfo" :key="name" class="description">
              <span>{{name}}</span> : <span>{{value}}</span>
            </p>
          </div>
        </div>
        <div v-if="item.metadata" class="suggested-action">
          <div class="text-wrapper">
            <h2>Audio Meta Info</h2>
            <hr style="margin-bottom: 10px; margin-top: 5px;">
            <p v-for="(value, name) in item.metadata" :key="name" class="description">
              <span>{{name}}</span> : <span>{{value}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      item: null // node
    }
  },
  computed: {
    selectedContent () {
      return this.$store.state.selectedContent
    }
  },
  watch: {
    selectedContent (newVal, oldVal) {
      // console.log('selectedContent change newVal : ', newVal)
      // console.log('selectedContent change oldVal : ', oldVal)
      if (newVal === null) {
        this.item = null
        return
      }
      if (newVal === undefined) {
        this.item = null
        return
      }
      this.actionsUpdateInfo(newVal)
    }
  },
  methods: {
    actionsUpdateInfo (item) {
      if (this.item !== null) {
        if (this.item.nodeKey === item.nodeKey) {
          return
        }
      }

      if (item.data.isDir === true) {
        console.log('폴더 입니다.')
      } else if ((item.data.mimeType).startsWith('image')) {
        const res = window.ipcRenderer.sendSync('req_imageData', item)
        const resParse = JSON.parse(res)
        item.srcData = `data:${item.data.mimeType};base64, ${resParse.base64}`
        item.exifrInfo = resParse.exifrInfo
      } else if ((item.data.mimeType).startsWith('audio')) {
        const res = window.ipcRenderer.sendSync('req_audioData', item)
        const resParse = JSON.parse(res)
        if (resParse.cover && resParse.base64) {
          item.srcData = `data:${resParse.cover.format};base64, ${resParse.base64}`
        }
        item.metadata = resParse.metadata
        // console.log('audio item.metadata :', item.metadata)
        // console.log('audio resParse.base64 :', resParse.base64)
      }

      this.item = item
    }
  }
}
</script>

<style>
</style>
