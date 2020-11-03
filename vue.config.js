module.exports = {
  configureWebpack: {},
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessWatch: [
        'src/main-process',
        'src/background.js'
      ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
