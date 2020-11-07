<template>
  <div  v-if="false" class="" id="desktop-app-title-bar">
    <div class="resize-handle top"></div>
    <div class="resize-handle left"></div>
    <img src="/favicon.ico" style="width:22px; height:22px;">

    <div id="app-menu-bar" role="menubar" aria-label="Application menu">

      <menuFile  />

      <div class="toolbar-dropdown closed" role="menuitem" aria-expanded="false">
        <div class="toolbar-button">
          <button class="button-component" type="button" tabindex="-1">
            <div class="menu-item">
              <div class="label">
                <span aria-label="Help">
                  <span aria-hidden="true" class="access-key">H</span>
                  <span aria-hidden="true">elp</span>
                </span>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="window-controls">
      <button aria-label="minimize" title="Minimize" tabindex="-1" class="window-control minimize">
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,5 10,5 10,6 0,6 Z"></path>
        </svg>
      </button>
      <button aria-label="maximize" title="Maximize" tabindex="-1" class="window-control maximize">
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"></path>
        </svg>
      </button>
      <button aria-label="close" title="Close" tabindex="-1" class="window-control close">
        <svg aria-hidden="true" version="1.1" width="10" height="10">
          <path d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>

import menuFile from '@/renderer-process/components/menuFile.vue'
export default {
  components: {
    menuFile
  },
  created () {

  }

}
</script>

<style>

</style>
