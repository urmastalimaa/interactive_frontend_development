var path = require('path');

var port = process.env.port || 3000;
var host = 'localhost';

module.exports = {
  entry: [
    `webpack-dev-server/client?http://${host}:${port}`,
    './main.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/'),
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        query: {
          presets: ['react', 'es2015'],
        },
      }
    ]
  }
};
