const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
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
        test: /\.scss$/,
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
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new ESLintPlugin({ extensions: ['.js', '.jsx'] }),
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
  console.log('process.env.NODE_ENV', process.env.NODE_ENV); // 除非npm run start语句加上set NODE_ENV=development这条语句可以正常打印到值
  console.log('argv.mode', argv.mode); // start 命令设置了 --mode=development
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
  }

  if (argv.mode === 'production') {
    // ...
  }

  return config;
};
