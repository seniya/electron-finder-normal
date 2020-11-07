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
</style>
