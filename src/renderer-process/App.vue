<template>
  <div id="desktop-app-container">
    <appMain />
  </div>
</template>

<script>
import appMain from '@/renderer-process/container/appMain.vue'
export default {
  name: 'App',
  components: {
    appMain
  }
}
</script>

<style lang="scss">
@import '../assets/styles/desktop.scss'
</style>
