<template>
  <div class="focus-container">
    <mainSideContainerSidebar
      :width="$store.state.sidebarWidth"
      :maximumWidth="600"
      :minimumWidth="200"
      :onResize="onResize" />
  </div>
</template>

<script>
import mainSideContainerSidebar from '@/renderer-process/container/mainSideContainerSidebar.vue'
export default {
  components: {
    mainSideContainerSidebar
  },
  methods: {
    onResize (width) {
      this.$store.dispatch('SIDEBAR_WIDTH', width)
    }
  }
}
</script>

<style>
</style>
