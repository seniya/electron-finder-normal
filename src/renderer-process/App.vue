<template>
  <div id="desktop-app-container">
    <appMain />
  </div>
</template>

<script>
import appMain from '@/renderer-process/container/appMain.vue'
// import customTitlebar from 'custom-electron-titlebar'

export default {
  name: 'App',
  components: {
    appMain
  }

}
</script>

<style lang="scss">
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    font-size: 1rem !important;
  }

  .flex-wrapper-scroll {
   overflow-y: auto !important;
  }
  .flex-wrapper-grid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;

    .flex-item {
      width: 150px;
      min-height: 150px;
      height: auto;

      .item-icon-wrapper {
        text-align: center;

        .item-icon {
          font-size: 90px !important;
        }
      }
      .item-text-wrapper {
        text-align: center;
        padding: 5px;
        display: -webkit-box;
        max-width: 200px;
        height: 62px;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.625;
      }
    }
    .flex-item:hover {
      background-color: rgba($color: #eeeeee, $alpha: 0.3)
    }
  }

  .flex-wrapper-simple {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 20px;
    padding-top: 20px;

    .flex-item {
      width: 200px;
      min-height: 50px;
      height: auto;
      display: flex;
      flex-direction: row;

      .item-icon-wrapper {
        text-align: center;

        .item-icon {
          font-size: 30px !important;
        }
      }
      .item-text-wrapper {
        font-size: 12px;
        text-align: left;
        padding: 5px;
        display: -webkit-box;
        max-width: 170px;
        height: 41px;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.625;
      }
    }

    .flex-item:hover {
      background-color: rgba($color: #eeeeee, $alpha: 0.3)
    }
  }

  .v-data-table__wrapper {
    height: calc(100vh - 70px) !important;
    overflow: auto !important;
  }
  .folder-contents-table-th {
    font-size: 1rem !important;
  }
  .folder-contents-table-td-1 {
    min-width: 100px;
    max-width: 500px;
    font-size: 1rem !important;
  }
  .folder-contents-table-td-2 {
    width: 100px;
    text-align: center;
    font-size: 1rem !important;
  }
  .folder-contents-table-td-3 {
    text-align: center;
    font-size: 1rem !important;
  }
  .folder-contents-table-td-4 {
    width: 100px;
    text-align: right;
    font-size: 1rem !important;
  }
  .folder-contents-table-td-div {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .v-treeview--dense .v-treeview-node__root {
    min-height: 35px !important;
  }
  .pc-icon {
    color: rgba($color: rgb(43, 22, 7), $alpha: 0.5) !important
  }
  .folder-icon {
    color: rgba($color: #ccc, $alpha: 0.3) !important
  }

  .v-treeview--dense .v-treeview-node__root {
    min-height: 35px !important;
  }
  .pc-icon {
    color: rgba($color: rgb(43, 22, 7), $alpha: 0.5) !important
  }
  .folder-icon {
    color: rgba($color: #aaaaaa, $alpha: 0.8) !important
  }
</style>
