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

</style>
