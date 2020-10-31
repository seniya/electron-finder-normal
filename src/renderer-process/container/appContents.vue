<template>
  <div id="desktop-app-contents">
    <appToolbar />
    <div></div>
    <appRepository />
    <div></div>
    <div></div>
  </div>
</template>

<script>
import appToolbar from '@/renderer-process/container/appToolbar.vue'
import appRepository from '@/renderer-process/container/appRepository.vue'

export default {
  components: {
    appToolbar,
    appRepository
  }

}
</script>

<style>

</style>
