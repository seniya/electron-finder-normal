<template>
  <div id="repository" class="ui-view">
    <repositoryFocusContainer />
    <repositoryHistory />
  </div>
</template>

<script>
import repositoryFocusContainer from '@/renderer-process/container/repositoryFocusContainer.vue'
import repositoryHistory from '@/renderer-process/container/repositoryHistory.vue'

export default {
  components: {
    repositoryFocusContainer,
    repositoryHistory
  }

}
</script>

<style>

</style>
