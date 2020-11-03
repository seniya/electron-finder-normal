<template>
  <div id="no-changes">
    <div v-if="item" class="content">
      <div>
        <div class="text">
          <h1>{{item.label}}</h1>
        </div>
        <img v-if="item.srcData" :src="item.srcData">
<!--
        <div v-if="$store.state.selectedContent">nodeKey: {{$store.state.selectedContent.nodeKey}}</div>
        <img src="file:///C:/workspace/desktop/dist/GitHubDesktop-dev-win32-x64/resources/app/static/paper-stack.svg" class="blankslate-image">
         -->
      </div>
      <div class="suggested-action-group primary replace-height" style="height: 0px;"></div>
      <div class="suggested-action-group normal">
        <div class="suggested-action">
          <div class="text-wrapper">
            <h2>General Info</h2>
            <p>&nbsp;</p>
            <p class="description">mimeType : {{item.data.mimeType}}</p>
            <p class="description">mimeType : {{item.data.mimeType}}</p>
            <p class="description">mimeType : {{item.data.mimeType}}</p>
          </div>
        </div>
        <div v-if="item.exifrInfo" class="suggested-action">
          <div class="text-wrapper">
            <h2>Image Meta Info</h2>
            <p>&nbsp;</p>
            <p v-for="(value, name) in item.exifrInfo" :key="name" class="description">
              <span>{{name}}</span> : <span>{{value}}</span>
            </p>
          </div>
        </div>
        <!--
        <div class="suggested-action"><div class="text-wrapper"><h2>Open the repository in your external editor</h2><p class="description">Select your editor in <a class="link-button-component" href="">Options</a></p><p class="discoverability">Repository menu or <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>A</kbd></p></div><button class="button-component" type="button">Open in Visual Studio Code</button></div>
        <div class="suggested-action"><div class="text-wrapper"><h2>View the files of your repository in Explorer</h2><p class="discoverability">Repository menu or <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>F</kbd></p></div><button class="button-component" type="button">Show in Explorer</button></div>
        <div class="suggested-action"><div class="text-wrapper"><h2>Open the repository page on GitHub in your browser</h2><p class="discoverability">Repository menu or <kbd>Ctrl</kbd><kbd>Shift</kbd><kbd>G</kbd></p></div><button class="button-component" type="button">View on GitHub</button></div>
         -->
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
      console.log('selectedContent change newVal : ', newVal)
      console.log('selectedContent change oldVal : ', oldVal)
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

      if (item.data.mimeType === false) {
        console.log('폴더 입니다.')
      } else if ((item.data.mimeType).startsWith('image')) {
        console.log('이미지 파일입니다.')

        const res = window.ipcRenderer.sendSync('req_imageData', item)
        const resParse = JSON.parse(res)
        item.srcData = `data:${item.data.mimeType};base64, ${resParse.base64}`
        item.exifrInfo = resParse.exifrInfo
        console.log('exifrInfo : ', resParse.exifrInfo)
      }

      this.item = item

      console.log('actionsUpdateInfo')
    }
  }
}
</script>

<style>

</style>
