const webpack = require('webpack');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new webpack.optimize.OccurrenceOrderPlugin()
];
if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({ minimize: true }));
} else {
  plugins.push(new BundleAnalyzerPlugin({ analyzerPort: 8188 }));
}

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'index.js')
  },
  output: {
    path: path.join(__dirname, 'public', 'assets', 'js'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 3000
  }
};
