<template>
  <div id="desktop-app-toolbar" class="toolbar">
    <toolbarTitle />
    <listType />
    <previewCheck />
  </div>
</template>

<script>
import toolbarTitle from '@/renderer-process/components/toolbarTitle.vue'
import listType from '@/renderer-process/components/listType.vue'
import previewCheck from '@/renderer-process/components/previewCheck.vue'

export default {
  components: {
    toolbarTitle,
    listType,
    previewCheck
  }

}
</script>

<style lang="scss">
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    font-size: 1rem !important;
  }

</style>
