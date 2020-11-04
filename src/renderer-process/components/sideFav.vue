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
          <div class="file">
            <div>
              <v-icon medium>mdi-folder</v-icon>
            </div>
            <label class="path-label-component">
              <div class="path-text-component">
                <!-- <span v-if="indexDb !== null && items[item] !== null && items[item] !== undefined">
                  <span class="dirname">{{items[item].label}}</span>
                </span> -->
                <span>
                  <span class="dirname">{{item.nodeKey}}</span>
                </span>
              </div>
            </label>
            <v-icon medium>mdi-bookmark</v-icon>
          </div>
        </div>

      </div>
<!--
      <v-simple-table>
          <template v-slot:default>
            <tbody>
              <tr v-for="item in $store.state.folderContents" :key="item.label" @dblclick="onDbClickItem(item)" @click="onClickItem(item)">
                <td >

                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table> -->
    </div>
    <div></div>
  </div>
</template>

<script>
import { openDB } from 'idb'
import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

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
      console.log('initialize2 indexDb : ', this.indexDb)
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

    async getItemLabel (itemKey) {
      // const db = await openDB(this.dbName, 1, {
      //   upgrade: db => {
      //     db.createObjectStore(this.dbTbName)
      //   }
      // })

      // const value = await db.get(this.dbTbName, itemKey)
      // console.log('getItemLabel value : ', value)

      // const node = await this.indexDb.get(this.dbTbName, itemKey)
      // console.log('getItemLabel node : ', node.label)
      // return node.label + ''

      return 'ddd eee'

      // const node = await this.indexDb.get(this.dbTbName, itemKey).then(
      //   console.log
      // )
      // console.log('getItemLabel node : ', node)
      // return node.label
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
    }
  }

}
</script>

<style lang="scss" >
.v-treeview--dense .v-treeview-node__root {
  min-height: 35px !important;
}
.pc-icon {
  color: rgba($color: rgb(43, 22, 7), $alpha: 0.5) !important
}
.folder-icon {
  color: rgba($color: #ccc, $alpha: 0.3) !important
}
</style>
