const path = require('path');
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
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
 }
}