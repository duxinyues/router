const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env'], ['@babel/preset-react', { runtime: 'classic' }]],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
            ],
          },
        },
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                javascriptEnabled: true, // 不加这个会报这个错https://github.com/ant-design/ant-design/issues/7927#issuecomment-372513256
              },
            },
          },
        ],
      },
      {
        test: /\.(pag|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)/,
        exclude: /node_modules/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10240,
            esModule: false,
            name: '[name]_[contenthash:6].[ext]',
            outPath: 'assets/images',
          },
        }],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ESLintPlugin({ extensions: ['.js', '.jsx'] }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    minimize: false,
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'),
    },
    hot: true,
    compress: true,
    port: 2022,
  },
};
module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    // ...
  }

  return config;
};
