module.exports = {
  css: {
    extract: false
  },
  chainWebpack(config) {
    config.entry('app').clear().add('./test/main.js')
  },
}
