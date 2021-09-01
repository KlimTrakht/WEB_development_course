var path = require('path')

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        use: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000,
    static: './build',
    liveReload: true
  }

}