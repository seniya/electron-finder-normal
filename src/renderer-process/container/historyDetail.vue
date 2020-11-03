<template>
  <div class="commit-details">
    <historyDetailSidebar
      :width="$store.state.detailbarWidth"
      :maximumWidth="1000"
      :minimumWidth="400"
      :onResize="onResize" />
    <preview />
  </div>
</template>

<script>
import historyDetailSidebar from '@/renderer-process/container/historyDetailSidebar.vue'
import preview from '@/renderer-process/components/preview.vue'
export default {
  components: {
    historyDetailSidebar,
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
