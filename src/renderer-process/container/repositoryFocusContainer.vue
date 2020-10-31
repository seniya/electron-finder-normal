<template>
  <div class="focus-container">
    <repositoryFocusContainerSidebar
      :width="$store.state.sidebarWidth"
      :maximumWidth="600"
      :minimumWidth="200"
      :onResize="onResize" />
  </div>
</template>

<script>
import repositoryFocusContainerSidebar from '@/renderer-process/container/repositoryFocusContainerSidebar.vue'
export default {
  components: {
    repositoryFocusContainerSidebar
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
