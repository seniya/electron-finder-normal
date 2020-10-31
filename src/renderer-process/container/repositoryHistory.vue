<template>
  <div id="history" class="collapsed">
    <historySummary />
    <historyDetail />
  </div>
</template>

<script>
import historySummary from '@/renderer-process/container/historySummary.vue'
import historyDetail from '@/renderer-process/container/historyDetail.vue'

export default {
  components: {
    historySummary,
    historyDetail
  }

}
</script>

<style>

</style>
