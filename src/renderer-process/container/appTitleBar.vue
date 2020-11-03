<template>
  <div class="" id="desktop-app-title-bar">
    <div class="resize-handle top"></div>
    <div class="resize-handle left"></div>
    <svg aria-hidden="true" class="octicon app-icon" version="1.1" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
    </svg>
    <div id="app-menu-bar" role="menubar" aria-label="Application menu">
      <div class="toolbar-dropdown closed" role="menuitem" aria-expanded="false">
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
export default {

}
</script>

<style>

</style>
