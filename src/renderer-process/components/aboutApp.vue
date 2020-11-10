<template>

  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-logo">
            <img src="/favicon.ico" />
          </div>
          <div class="modal-header">
            <h2>Electron-Finder for study</h2>
          </div>

          <div class="modal-body">
            <span class="selectable-text">Version 1.0.0</span>
            (<a class="link-button-component">Source at</a>)
            <p class="no-padding"><a class="link-button-component">Terms and Conditions</a></p>
            <p><a class="link-button-component">License and Open Source Notices</a></p>
            <p>Main Icon made by <a href="https://www.flaticon.com/kr/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/kr/" title="Flaticon"> www.flaticon.com</a></p>
            <p>말 Icon mady by Me!</p>
          </div>

          <div class="modal-footer">
            <div class="button-group">
              <!-- <button class="modal-default-button" @click="closeAbout"> -->
              <button class="button-component" type="submit" @click="closeAbout">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  methods: {
    closeAbout () {
      this.$store.dispatch('SHOW_ABOUT', false)
    }
  }
}
</script>

<style lang="scss" scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 450px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  text-align: center;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.button-group {
  text-align: right;
}

.button-component {
  width: 100px;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
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

.flex-wrapper-scroll {
   overflow-y: auto !important;
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
  color: rgba($color: #ccc, $alpha: 0.3) !important
}
</style>
