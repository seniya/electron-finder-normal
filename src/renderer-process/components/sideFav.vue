<template>
  <div class="panel">
    <div class="changes-list-container file-list" style="">
      <div class="header">
        <div class="checkbox-component">
          <label>{{$store.state.favList.length}} Favs</label>
        </div>
      </div>

      <div class="list" role="listbox">

        <div
          v-for="item in $store.state.favList" :key="item.label"
          class="list-item"
          tabindex="0"
          style="height: 40px; left: 0px; width: 100%;">
          <div class="file" @click="onUpdateActiveFolder(item)">
            <div>
              <v-icon medium>mdi-folder</v-icon>
            </div>
            <label class="path-label-component">
              <div class="path-text-component">
                <span>
                  <span class="dirname">{{item.nodeKey}}</span>
                </span>
              </div>
            </label>
            <v-icon medium>mdi-bookmark</v-icon>
          </div>
        </div>

      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { openDB } from 'idb'

export default {
  components: {},
  props: {
    width: Number
  },
  data () {
    return {
      indexDb: null,
      dbName: 'finder',
      dbTbName: 'fav',
      tabValue: 'system',
      items: [],
      active: []
    }
  },
  async created () {
    // await this.initialize()
    console.log(this.$store.state.favList)
  },
  computed: {
    // displayLabel () { }
  },
  watch: {},
  methods: {

    async initialize () {
      this.initIndexDb()
      this.indexDb = await this.initIndexDb()
      // console.log('initialize2 indexDb : ', this.indexDb)
      this.getItemLabels()
    },
    async initIndexDb () {
      return await openDB(this.dbName, 1, {
        upgrade: db => {
          db.createObjectStore(this.dbTbName)
        }
      })
    },

    getItemLabels () {
      for (const itemKey in this.$store.state.favList) {
        console.log('itemKey : ', itemKey)
        this.indexDb.get(this.dbTbName, this.$store.state.favList[itemKey])
          .then(item => {
            this.items[this.$store.state.favList[itemKey]] = item
            console.log(item)
          })
      }
    },

    onFavorite (item) {
      console.log('onFavorite item : ', item)
      console.log('onFavorite item.ino : ', item.data.stat.ino)
      this.$emit('save-fav', item)
    },
    isAbleFav (item) {
      if (item.id === 'ROOT') {
        return false
      }
      const rootDir = item.data.rootDir + '\\'
      if (item.id === rootDir) {
        return false
      }
      if ((item.label).includes('RECYCLE.BIN')) {
        return false
      }
      return true
    },

    onUpdateActiveFolder (item) {
      console.log('onUpdateActiveFolder item : ', item)
      this.$store.dispatch('SELECTED_FOLDER', item.nodeKey)

      const res = window.ipcRenderer.sendSync('req_folderContents', this.$store.state.selectedFolder)
      const resParse = JSON.parse(res)
      const newContents = resParse.contents
      // const folders = resParse.folders
      // this.$store.dispatch('FOLDER_CHILD', { item: this.$store.state.selectedFolder, folders })
      this.$store.dispatch('FOLDER_CONTENTS', newContents)
    }
  }

}
</script>

<style lang="scss">
</style>
