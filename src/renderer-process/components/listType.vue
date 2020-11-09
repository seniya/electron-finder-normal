<template>
  <div class="toolbar-dropdown branch-button" :class="isOpenListType ? 'open' : ''">
    <div v-if="isOpenListType" id="foldout-container" style="z-index: 18; position: absolute; top: 50px; left: 0px; width: 100%; height: 100%;">
      <div class="overlay" tabindex="-1" style="background: rgba(0, 0, 0, 0.4); height: 100%;"></div>
      <div class="foldout" tabindex="-1" :style="{marginLeft: $store.state.sidebarWidth + 'px'}" style="position: absolute; margin-left: 388px; min-width: 230px; height: 100%; top: 0px;">
        <v-simple-table >
          <template v-slot:default>
            <tbody>
              <tr @click="onSelectListType('TableView')">
                <td >
                  <div >
                    <v-icon medium left>mdi-view-list</v-icon>
                    <span>TableView - Detail List</span>
                  </div>
                </td>
              </tr>
              <tr @click="onSelectListType('GridView')">
                <td >
                  <div >
                    <v-icon medium left>mdi-view-grid</v-icon>
                    <span>GridView - Icon Gird</span>
                  </div>
                </td>
              </tr>
              <tr @click="onSelectListType('SimpleView')">
                <td >
                  <div >
                    <v-icon medium left>mdi-view-agenda</v-icon>
                    <span>SimpleView - Short Title</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </div>
    </div>
    <div class="toolbar-button push-pull-button">
      <button class="button-component" type="button" @click="onClickListType">
        <div class="text">
          <div class="title">List Type</div>
          <div class="description">
            <span>{{$store.state.listType}}</span>
          </div>
        </div>
        <v-icon style="color:#cccccc;">
          {{displayListTypeIcon}}
        </v-icon>
      </button>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpenListType: false
    }
  },

  computed: {
    displayListTypeIcon () {
      if (this.$store.state.listType === 'TableView') {
        return 'mdi-view-list'
      } else if (this.$store.state.listType === 'GridView') {
        return 'mdi-view-grid'
      } else if (this.$store.state.listType === 'SimpleView') {
        return 'mdi-view-agenda'
      }
      return 'mdi-view-list'
    }
  },

  methods: {
    onClickListType () {
      this.isOpenListType = !this.isOpenListType
    },
    onSelectListType (type) {
      console.log(type)
      this.$store.dispatch('LIST_TYPE', type)
      this.isOpenListType = false
    }
  }
}
</script>

<style>
</style>
