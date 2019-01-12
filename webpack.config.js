const path = require('path');
const ExtractTextPlugin= require('extract-text-webpack-plugin')

module.exports = {
  entry: {
    home: './src/app/clients/home.js',
    test: './src/app/clients/test.js'
  },
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /\.scss$/, //que tipo de archivo quiero reconocer exp regular
        use: ExtractTextPlugin.extract({
          use:['css-loader','sass-loader']
        }) 
      }
    ]
 },
 plugins:[ new ExtractTextPlugin('css/[name].css')]
}