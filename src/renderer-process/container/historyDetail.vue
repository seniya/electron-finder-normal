<template>
  <div class="commit-details">
    <historyDetailSidebar
      :width="$store.state.detailbarWidth"
      :maximumWidth="1000"
      :minimumWidth="400"
      :onResize="onResize" />
    <div class="seamless-diff-switcher has-diff">메타정보의 표시</div>
  </div>
</template>

<script>
import historyDetailSidebar from '@/renderer-process/container/historyDetailSidebar.vue'
export default {
  components: {
    historyDetailSidebar
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
