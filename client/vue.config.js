
module.exports = {
  devServer: {
    proxy: 'http://localhost:7071/api/',
  },
  configureWebpack: {
    devtool: 'source-map'
  }
}