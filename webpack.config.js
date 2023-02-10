const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: "svg-url-loader",
      //       options: {
      //         encoding: "base64",
      //       },
      //     },
      //   ],
      // },
    ]
  },
  devServer: {
    'static': {
      directory: './dist'
    }
  },
  plugins: [new NodePolyfillPlugin()],
};

module.exports = config;