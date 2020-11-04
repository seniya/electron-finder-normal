<template>
  <div
    id="repository-sidebar"
    class="resizable-component"
    :style="{width: width + 'px', maxWidth: maximumWidth + 'px', minWidth: minimumWidth+ 'px'}" >
    <div class="tab-bar tabs" role="tablist">
      <button :class="tabValue === 'system' ? 'selected' : ''" class="tab-bar-item" type="button" @click="onChangeTab('system')">
        <span class="with-indicator"><span>System</span></span>
      </button>
      <button :class="tabValue === 'fav' ? 'selected' : ''" class="tab-bar-item" type="button" @click="onChangeTab('fav')">
        <div class="with-indicator"><span>Favorite</span></div>
      </button>
    </div>
    <sideSystem v-if="tabValue === 'system'" @save-fav="handleSaveFav"/>
    <sideFav v-if="tabValue === 'fav'" :maximumWidth="maximumWidth" @save-fav="handleSaveFav"/>
    <div @mousedown="handleDragStart" class="resize-handle"></div>
  </div>
</template>

<script>
import { openDB } from 'idb'
import sideSystem from '@/renderer-process/components/sideSystem.vue'
import sideFav from '@/renderer-process/components/sideFav.vue'

export default {
  props: {
    width: Number,
    maximumWidth: Number,
    minimumWidth: Number,
    onResize: Function
  },

  components: {
    sideSystem,
    sideFav
  },

  data () {
    return {
      startWidth: null,
      startX: null,
      indexDb: null,
      dbName: 'finder',
      dbTbName: 'fav',
      tabValue: 'system'
    }
  },

  async created () {
    this.initialize()
  },

  methods: {
    async initialize () {
      this.initIndexDb()
      this.indexDb = await this.initIndexDb()
      console.log('initialize indexDb : ', this.indexDb)
      this.setFavList()
    },
    async initIndexDb  () {
      return await openDB(this.dbName, 1, {
        upgrade: db => {
          db.createObjectStore(this.dbTbName)
        }
      })
    },
    onChangeTab (tabValue) {
      this.tabValue = tabValue
    },
    async handleSaveFav (item) {
      const allKeys = await this.indexDb.getAllKeys(this.dbTbName)
      console.log('handleSaveFav allKeys : ', allKeys)
      if (allKeys.includes(item.data.stat.ino) === false) {
        await this.indexDb.add(this.dbTbName, item, item.data.stat.ino)
      } else {
        const transaction = this.indexDb.transaction([this.dbTbName], 'readwrite')
        await transaction.objectStore(this.dbTbName).delete(item.data.stat.ino)
      }
      this.setFavList()
    },

    async setFavList () {
      const allItems = await this.indexDb.getAll(this.dbTbName)
      const allKeys = await this.indexDb.getAllKeys(this.dbTbName)
      this.$store.dispatch('FAV_LIST', allItems)
      this.$store.dispatch('FAV_KEYS', allKeys)
    },

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
