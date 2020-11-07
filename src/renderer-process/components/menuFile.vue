<template>
  <div class="toolbar-dropdown " >

    <div v-if="false" id="foldout-container" style="position: absolute; top: 27px; left: 0px; width: 100%; height: calc(100% - 27px);">
      <div class="overlay" tabindex="-1"></div>
      <div class="foldout" tabindex="-1" style="position: absolute; margin-left: 22px; min-width: 38.3125px; height: 100%; top: 0px;">
        <div id="app-menu-foldout">
          <div class="menu-pane menu-pane-file" style="height: 215px; max-height: 100%;">
            <div class="list" >
              <div class="focus-container list-focus-container">
                <div class="ReactVirtualized__Grid" tabindex="-1" style="box-sizing: border-box; direction: ltr; height: 215px; position: relative; width: 205px; will-change: transform; overflow: hidden;">
                  <div class="ReactVirtualized__Grid__innerScrollContainer" style="width: auto; height: 210px; max-width: 205px; max-height: 210px; overflow: hidden; position: relative;">
                    <div id="__ListRow-0" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 0px; width: 100%;">
                      <div class="menu-item">
                        <div class="label">
                          <span>Toogle full screen</span>
                        </div>
                        <div class="accelerator">F11</div>
                      </div>
                    </div>
                    <div id="__ListRow-1" class="list-item not-selectable" style="height: 10px; left: 0px; position: absolute; top: 30px; width: 100%;">
                      <hr>
                    </div>
                    <div id="__ListRow-2" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 40px; width: 100%;">
                      <div class="menu-item" @click="onClickZoom('reset')">
                        <div class="label">
                          <span>Reset Zoom</span>
                        </div>
                        <div class="accelerator">Ctrl+0</div>
                      </div>
                    </div>
                    <div id="__ListRow-3" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 70px; width: 100%;">
                      <div class="menu-item" @click="onClickZoom('in')">
                        <div class="label">
                          <span>Zoom in</span>
                        </div>
                        <div class="accelerator">Ctrl+=</div>
                      </div>
                    </div>
                    <div id="__ListRow-4" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 100px; width: 100%;">
                      <div class="menu-item" @click="onClickZoom('out')">
                        <div class="label">
                          <span>Zoom out</span>
                        </div>
                        <div class="accelerator">Ctrl+-</div>
                      </div>
                    </div>
                    <div id="__ListRow-5" role="menuitem" class="list-item not-selectable" style="height: 10px; left: 0px; position: absolute; top: 130px; width: 100%;">
                      <hr>
                    </div>
                    <div id="__ListRow-6" role="menuitem" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 140px; width: 100%;">
                      <div class="menu-item">
                        <div class="label">
                          <span>Toogle developer tools</span>
                        </div>
                        <div class="accelerator">Ctrl+Shift+I</div>
                      </div>
                    </div>
                    <div id="__ListRow-7" role="menuitem" class="list-item not-selectable" style="height: 10px; left: 0px; position: absolute; top: 170px; width: 100%;"><hr></div>
                    <div id="__ListRow-8" role="menuitem" class="list-item" tabindex="-1" style="height: 30px; left: 0px; position: absolute; top: 180px; width: 100%;">
                      <div class="menu-item">
                        <div class="label">
                          <span>Exit</span>
                        </div>
                        <div class="accelerator">Alt+F4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="fake-scroll" style="height: 185px;">
                <div style="height: 180px; pointer-events: none;"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="toolbar-button">
      <button class="button-component" type="button" tabindex="-1">
        <div class="menu-item">
          <div class="label">
            <span aria-label="File">
              <span aria-hidden="true" class="access-key">F</span>
              <span aria-hidden="true">ile</span>
            </span>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>

import { ipcRenderer } from 'electron'
window.ipcRenderer = ipcRenderer

export default {

  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    onClickMenuFile () {
      this.isOpen = !this.isOpen
    },
    onClickZoom (type) {
      console.log('onClickZoom : ', type)
      window.ipcRenderer.sendSync('req_window_zoom', type)

      // const { webContents } = window
      // console.log('zoom window : ', window)
      // console.log('zoom webContents : ', webContents)
    }
  }
}
</script>

<style>

</style>
