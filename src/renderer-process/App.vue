<template>
  <div id="desktop-app-container">
    <appMain />
  </div>
</template>

<script>
import appMain from '@/renderer-process/container/appMain.vue'
// import customTitlebar from 'custom-electron-titlebar'

export default {
  name: 'App',
  components: {
    appMain
  }

}
</script>

<style lang="scss">

</style>
