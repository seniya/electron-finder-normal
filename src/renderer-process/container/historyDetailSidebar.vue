<template>
  <div
    id="repository-sidebar"
    class="resizable-component"
    :style="{width: width + 'px', maxWidth: maximumWidth + 'px', minWidth: minimumWidth+ 'px'}" >
    <folderContents />
    <div @mousedown="handleDragStart" class="resize-handle"></div>
  </div>
</template>

<script>
import folderContents from '@/renderer-process/components/folderContents.vue'

export default {
  props: {
    width: Number,
    maximumWidth: Number,
    minimumWidth: Number,
    onResize: Function
  },

  components: {
    folderContents
  },

  data () {
    return {
      startWidth: null,
      startX: null
    }
  },

  methods: {
    getCurrentWidth () {
      return this.clampWidth(this.width)
    },
    clampWidth (width) {
      return Math.max(this.minimumWidth, Math.min(this.maximumWidth, width))
    },
    handleDragStart (e) {
      this.startX = e.clientX
      this.startWidth = this.getCurrentWidth() || null
      document.addEventListener('mousemove', this.handleDragMove)
      document.addEventListener('mouseup', this.handleDragStop)
      e.preventDefault()
    },
    handleDragMove (e) {
      if (this.startWidth == null || this.startX == null) {
        return
      }
      const deltaX = e.clientX - this.startX
      const newWidth = this.startWidth + deltaX
      const newWidthClamped = this.clampWidth(newWidth)
      this.onResize(newWidthClamped)
      e.preventDefault()
    },
    handleDragStop  (e) {
      document.removeEventListener('mousemove', this.handleDragMove)
      document.removeEventListener('mouseup', this.handleDragStop)
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>
