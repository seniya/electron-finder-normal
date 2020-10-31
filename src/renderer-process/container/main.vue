<template>
  <div id="desktop-app-chrome" class="blurred">
    <appTitleBar />
    <appContents />
  </div>
</template>

<script>
import appTitleBar from '@/renderer-process/container/appTitleBar.vue'
import appContents from '@/renderer-process/container/appContents.vue'

export default {
  components: {
    appTitleBar,
    appContents
  }
}
</script>

<style>

</style>
