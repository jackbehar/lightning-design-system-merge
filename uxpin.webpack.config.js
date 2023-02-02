const path = require("path");
const webpack = require("webpack");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/"
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.min\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
        options: {
        }
      },
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        options: {
          presets: [
            require.resolve('@babel/preset-env', { paths: ['./node_modules/@uxpin/merge-cli'] }),
            require.resolve('@babel/preset-react', { paths: ['./node_modules/@uxpin/merge-cli'] })
          ],
        }
      },
    ]
  }
}
