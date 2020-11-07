<template>
  <div id="desktop-app-contents">
    <contentsToolbar />
    <contentsRepository />
    <aboutApp v-if="$store.state.isAbout" />
  </div>
</template>

<script>
import contentsToolbar from '@/renderer-process/container/contentsToolbar.vue'
import contentsRepository from '@/renderer-process/container/contentsRepository.vue'
import aboutApp from '@/renderer-process/components/aboutApp.vue'

export default {
  components: {
    contentsToolbar,
    contentsRepository,
    aboutApp
  }
}
</script>

<style>

</style>
