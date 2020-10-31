<template>
  <div id="desktop-app-container">
    <mainContainer />
  </div>
</template>

<script>
import mainContainer from '@/renderer-process/container/main.vue'
export default {
  name: 'App',
  components: {
    mainContainer
  }
}
</script>

<style lang="scss">

</style>
