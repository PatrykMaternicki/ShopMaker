
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

var baseConfig = {
  resolve: {
    alias: {
      services: path.resolve(__dirname, './src/services/'),
      helpers:  path.resolve(__dirname, './src/helpers/'),
    }
  },

  entry: {
    app: './src/App.js',
  },

  output: {
    path: path.resolve( __dirname, '../build/js/vue'),
    filename: "[name].js",
    library: '[name]',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test:/\.css/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
          }
        ]  
      }
    ]
  },

  plugins: [
      new VueLoaderPlugin()
  ]
}

module.exports = baseConfig;
