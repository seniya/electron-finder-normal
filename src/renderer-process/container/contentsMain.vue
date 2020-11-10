<template>
  <div id="repository" class="ui-view">
    <mainSideContainer />
    <mainListContainer />
  </div>
</template>

<script>
import mainSideContainer from '@/renderer-process/container/mainSideContainer.vue'
import mainListContainer from '@/renderer-process/container/mainListContainer.vue'

export default {
  components: {
    mainSideContainer,
    mainListContainer
  }

}
</script>

<style>
</style>
