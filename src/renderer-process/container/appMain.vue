<template>
  <div id="desktop-app-chrome" class="focused">
  <!-- <div id="desktop-app-chrome" class="blurred"> -->
    <appTitleBar />
    <appContents />
  </div>
</template>

<script>
import appTitleBar from '@/renderer-process/container/appTitleBar.vue'
import appContents from '@/renderer-process/container/appContents.vue'

import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

export default {
  components: {
    appTitleBar,
    appContents

  },
  created () {
    window.ipcRenderer.on('showAbout', (event, res) => {
      this.$store.dispatch('SHOW_ABOUT', true)
    })
  }
}
</script>

<style>

</style>
