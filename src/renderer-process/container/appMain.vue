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

export default {
  components: {
    // contentsToolbar,
    // contentsRepository,
    appTitleBar,
    appContents
  }
}
</script>

<style>

</style>
