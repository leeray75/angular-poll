let webpackConfig = require('./webpack.config');
const devServer = {
  disableHostCheck: true,
  host: 'localhost',
  port: 8080,
  headers: { 'Access-Control-Allow-Origin': '*' },
	proxy: {
	  '/polls':{
	    target: 'http://api.open-agora.com'
	  }
	}
}

webpackConfig.devServer = devServer;
module.exports = webpackConfig;
