var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'node',
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].server-chunk.js',
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      { 
        test: /\.html$/, 
        loader: "html-loader",
        query: {
          minimize: true,
        } 
      },
      { 
        test: /\.css$/, 
        loader: "css-loader" 
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: path.resolve(__dirname, 'dist'),
      filename: 'html/index.html',
      template: `${__dirname}/src/pages/index.html`,
      inject: false,
    }),
  ],
  stats: {
    colors: true
  },
  node: {
    __dirname: true,
    fs: "empty",
    net: "empty"
 },
  devtool: 'source-map'
};