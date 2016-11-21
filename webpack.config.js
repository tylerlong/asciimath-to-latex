module.exports = {
  entry: './index.js',
  output: {
    path: __dirname,
    filename: 'index.bundle.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0'],
        },
      },
    ],
  },
};
