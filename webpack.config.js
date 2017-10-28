var path = require('path');

module.exports = {
  target: 'node',
  entry: './src/server.js',
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ]
  },
  stats: {
    colors: true
  },
  node: {
    fs: "empty",
    net: "empty"
 },
  devtool: 'source-map'
};