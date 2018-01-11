let path = require("path");
let webpack = require("webpack");
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    "common": "./src/common.js",
    "angular-poll": "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    publicPath: "/js/",
    filename: "[name].bundle.js"
  },
  plugins: [
    new CommonsChunkPlugin({
      // The order of this array matters
      names: ["common"],
      minChunks: 2
    })
  ],
  resolve: {
      modules: [ 'node_modules' ],
      extensions: ['.js','.ts'],
      alias: {
        poll: path.resolve(__dirname, "src"),
        npm: path.resolve(__dirname, 'node_modules'),
        styles: path.resolve(__dirname, "src/styles"),
        images: path.resolve(__dirname, "src/images")
      }
    },
    module: {
      rules:[
        {
          test: /\.ts?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(scss|css)$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
        },
        {
          test: /\.(svg|png|jpg|gif|woff|woff2|eot|ttf)$/,
          loader: 'url-loader'
        },
        {
          test: /\.html$/,
          use: [
            { loader: 'raw-loader' }
          ]
        }
      ]
    },
    devtool: "source-map"
};