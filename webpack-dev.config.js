let webpackConfig = require('./webpack.config');
const devServer = {
  disableHostCheck: true,
  host: 'localhost',
  port: 8080
}
webpackConfig.devServer = devServer;
module.exports = webpackConfig;
