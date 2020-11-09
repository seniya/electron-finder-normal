<template>
  <div id="desktop-app-contents">
    <contentsToolbar />
    <contentsMain />
    <aboutApp v-if="$store.state.isAbout" />
  </div>
</template>

<script>
import contentsToolbar from '@/renderer-process/container/contentsToolbar.vue'
import contentsMain from '@/renderer-process/container/contentsMain.vue'
import aboutApp from '@/renderer-process/components/aboutApp.vue'

export default {
  components: {
    contentsToolbar,
    contentsMain,
    aboutApp
  }
}
</script>

<style>
</style>
