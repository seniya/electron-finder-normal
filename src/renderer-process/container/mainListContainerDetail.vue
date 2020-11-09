<template>
  <div class="commit-details">
    <mainListContainerDetailSidebar
      :width="$store.state.detailbarWidth"
      :maximumWidth="1000"
      :minimumWidth="400"
      :onResize="onResize" />
    <preview />
  </div>
</template>

<script>
import mainListContainerDetailSidebar from '@/renderer-process/container/mainListContainerDetailSidebar.vue'
import preview from '@/renderer-process/components/preview.vue'
export default {
  components: {
    mainListContainerDetailSidebar,
    preview
  },
  methods: {
    onResize (width) {
      this.$store.dispatch('DETAILBAR_WIDTH', width)
    }
  }
}
</script>

<style>
</style>
