<template>
  <div
    v-if="$store.state.isPreview"
    id="repository-sidebar"
    class="resizable-component"
    :style="{width: width + 'px', maxWidth: maximumWidth + 'px', minWidth: minimumWidth+ 'px'}" >
    <folderContentsList v-if="$store.state.listType === 'TableView'"/>
    <folderContentsGrid v-if="$store.state.listType === 'GridView'"/>
    <folderContentsSimple v-if="$store.state.listType === 'SimpleView'"/>
    <div @mousedown="handleDragStart" class="resize-handle"></div>
  </div>

  <div
    v-else
    id="repository-sidebar"
    class="resizable-component"
    :style="{width: '100%'}" >
    <folderContentsList v-if="$store.state.listType === 'TableView'"/>
    <folderContentsGrid v-if="$store.state.listType === 'GridView'"/>
    <folderContentsSimple v-if="$store.state.listType === 'SimpleView'"/>
    <div @mousedown="handleDragStart" class="resize-handle"></div>
  </div>
</template>

<script>
import folderContentsList from '@/renderer-process/components/folderContentsList.vue'
import folderContentsGrid from '@/renderer-process/components/folderContentsGrid.vue'
import folderContentsSimple from '@/renderer-process/components/folderContentsSimple.vue'

export default {
  props: {
    width: Number,
    maximumWidth: Number,
    minimumWidth: Number,
    onResize: Function
  },

  components: {
    folderContentsList,
    folderContentsGrid,
    folderContentsSimple
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
