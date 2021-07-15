module.exports = {
  publicPath:
    process.env.NODE_ENV === 'production' ? '/SimpleTwitter-vue/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "./src/assets/scss/style.scss";'
      }
    }
  }
}
