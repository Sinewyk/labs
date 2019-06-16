const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './public/bootstrap.ts',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Life Assistance',
      author: "Serge 'Sinewyk' Havas",
      keywords: 'life,tool,assistance',
      description:
        'Not sure the exact form, but should help figuring out your life & stuff',
      template: 'public/index.ejs',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.ts?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
};
