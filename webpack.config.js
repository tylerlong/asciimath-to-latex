const path = require('path')

module.exports = {
  entry: {
    index: './test/index.js'
  },
  output: {
    path: path.join(__dirname, 'test'),
    filename: '[name].bundle.js'
  }
}
