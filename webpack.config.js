module.exports = {
  entry: "./src/app.js",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_exports/,
        loader: 'babel-loader'
      }
    ]
  },
  output: {
    "filename": "bundle.js",
    "path": "./dist"
  }
}
