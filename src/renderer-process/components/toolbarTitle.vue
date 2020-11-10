<template>
  <div class="sidebar-section" :style="{width: $store.state.sidebarWidth + 'px'}">
    <div class="toolbar-dropdown closed" aria-expanded="false">
      <div class="toolbar-button">
        <button class="button-component" type="button">
          <div class="text">
            <div class="title">{{$store.state.selectedFolder || '내PC'}}</div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>
