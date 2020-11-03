<template>
  <div id="desktop-app-contents">
    <contentsToolbar />
    <contentsRepository />
  </div>
</template>

<script>
import contentsToolbar from '@/renderer-process/container/contentsToolbar.vue'
import contentsRepository from '@/renderer-process/container/contentsRepository.vue'

export default {
  components: {
    contentsToolbar,
    contentsRepository
  }
}
</script>

<style>

</style>
