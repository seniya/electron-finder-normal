<template>
  <div id="desktop-app-toolbar" class="toolbar">
    <div class="sidebar-section" :style="{width: $store.state.sidebarWidth + 'px'}">
      <div class="toolbar-dropdown closed" aria-expanded="false">
        <div class="toolbar-button" title="C:\workspace\electron-finder">
          <button class="button-component" type="button">
            <svg aria-hidden="true" class="octicon icon" version="1.1" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 2.5c1.645 0 3.123.722 4.131 1.869l-1.204 1.204a.25.25 0 0 0 .177.427h3.646a.25.25 0 0 0 .25-.25V2.104a.25.25 0 0 0-.427-.177l-1.38 1.38A7.001 7.001 0 0 0 1.05 7.16a.75.75 0 1 0 1.49.178A5.501 5.501 0 0 1 8 2.5zm6.294 5.505a.75.75 0 0 0-.833.656 5.501 5.501 0 0 1-9.592 2.97l1.204-1.204A.25.25 0 0 0 4.896 10H1.25a.25.25 0 0 0-.25.25v3.646c0 .223.27.335.427.177l1.38-1.38A7.001 7.001 0 0 0 14.95 8.84a.75.75 0 0 0-.657-.834z"></path>
            </svg>
            <div class="text">
              <div class="description">Current repository</div>
              <div class="title">electron-finder</div>
            </div>
          </button>
        </div>
      </div>
    </div>

    <div class="toolbar-button push-pull-button">
      <button class="button-component" type="button">
        <svg aria-hidden="true" class="octicon icon" version="1.1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2.5c1.645 0 3.123.722 4.131 1.869l-1.204 1.204a.25.25 0 0 0 .177.427h3.646a.25.25 0 0 0 .25-.25V2.104a.25.25 0 0 0-.427-.177l-1.38 1.38A7.001 7.001 0 0 0 1.05 7.16a.75.75 0 1 0 1.49.178A5.501 5.501 0 0 1 8 2.5zm6.294 5.505a.75.75 0 0 0-.833.656 5.501 5.501 0 0 1-9.592 2.97l1.204-1.204A.25.25 0 0 0 4.896 10H1.25a.25.25 0 0 0-.25.25v3.646c0 .223.27.335.427.177l1.38-1.38A7.001 7.001 0 0 0 14.95 8.84a.75.75 0 0 0-.657-.834z"></path>
        </svg>
        <div class="text">
          <div class="title">List Type</div>
          <div class="description">
            <span>Table View</span>
          </div>
        </div>
        <svg aria-hidden="true" class="octicon dropdownArrow" version="1.1" viewBox="0 0 16 16">
          <path d="M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z"></path>
        </svg>
      </button>
    </div>

    <div class="toolbar-button push-pull-button">
      <button class="button-component" type="button">
        <svg aria-hidden="true" class="octicon icon" version="1.1" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 2.5c1.645 0 3.123.722 4.131 1.869l-1.204 1.204a.25.25 0 0 0 .177.427h3.646a.25.25 0 0 0 .25-.25V2.104a.25.25 0 0 0-.427-.177l-1.38 1.38A7.001 7.001 0 0 0 1.05 7.16a.75.75 0 1 0 1.49.178A5.501 5.501 0 0 1 8 2.5zm6.294 5.505a.75.75 0 0 0-.833.656 5.501 5.501 0 0 1-9.592 2.97l1.204-1.204A.25.25 0 0 0 4.896 10H1.25a.25.25 0 0 0-.25.25v3.646c0 .223.27.335.427.177l1.38-1.38A7.001 7.001 0 0 0 14.95 8.84a.75.75 0 0 0-.657-.834z"></path>
        </svg>
        <div class="text">
          <div class="title">Preview Side</div>
          <div class="description">
            <span>Visiable</span>
          </div>
        </div>
        <svg aria-hidden="true" class="octicon dropdownArrow" version="1.1" viewBox="0 0 16 16">
          <path d="M4.427 6.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 6H4.604a.25.25 0 00-.177.427z"></path>
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
