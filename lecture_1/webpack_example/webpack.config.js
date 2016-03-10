var path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: path.join(__dirname, 'es6'),
        query: {
          presets: 'es2015',
        },
      }
    ]
  },
};
