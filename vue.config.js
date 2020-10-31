module.exports = {
  configureWebpack: {},
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      mainProcessFile: 'src/main-process.js',
      rendererProcessFile: 'src/renderer-process.js',
      mainProcessWatch: [
        'src/main-process',
        'src/main-process.js'
      ]
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
