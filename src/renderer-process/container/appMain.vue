<template>
  <div id="desktop-app-chrome" class="focused">
    <appContents />
  </div>
</template>

<script>

import appContents from '@/renderer-process/container/appContents.vue'
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

export default {
  components: {
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
