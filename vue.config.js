module.exports = {
  configureWebpack: { },
  pluginOptions: {
    electronBuilder: {
      chainWebpackMainProcess: (config) => { },
      chainWebpackRendererProcess: (config) => { },
      mainProcessFile: 'src/main-process.js',
      rendererProcessFile: 'src/renderer-process.js',
      mainProcessWatch: ['src/main-process', 'src/main-process.js']
    }
  }
}
