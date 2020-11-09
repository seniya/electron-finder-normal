<template>
  <div class="toolbar-button push-pull-button">
    <button class="button-component" type="button" @click="onSelectPreview">
      <div class="text">
        <div class="title">Preview Side</div>
        <div class="description">
          <span>{{displayPreviewValue}}</span>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    displayPreviewValue () {
      if (this.$store.state.isPreview) {
        return 'Visiable'
      }
      return 'Hide'
    }
  },
  methods: {
    onSelectPreview () {
      this.$store.dispatch('IS_PREVIEW', !this.$store.state.isPreview)
    }
  }

}
</script>

<style>
</style>
