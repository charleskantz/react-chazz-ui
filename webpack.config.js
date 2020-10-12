const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './docs/entry.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'react-chazz-ui': path.join(__filename, '..', 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'docs/',
    port: 3000,
    onListening: function(server) {
      const port = server.listeningApp.address().port;
      setTimeout(() => {
        console.log("\x1b[46m%s\x1b[0m", "///////////////////////////");
        console.log("\x1b[46m%s\x1b[0m", `  Live on localhost:${port}!  `);
        console.log("\x1b[46m%s\x1b[0m", "///////////////////////////");
      }, 4000)

    }
  }
}