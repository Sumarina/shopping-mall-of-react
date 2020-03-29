const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpeedMeasureWebpackPlugin = require('speed-measure-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const config = require('../public/config')[isDev ? 'dev' : 'build'];

const webpackConfig = {
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx']
    // modules: ['./src/components', 'node_modules'] //resolve配置webpack如何寻找模块所对应的文件 注意坑，如果引入的模块中也存在node_modules，则会提示找不到对应模块
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.[hash:6].js',
    publicPath: '/' //CDN地址
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader', 'babel-loader'], //在耗时较长的loader前添加cache-loader，缓存结果，节省性能
        // options: {
        //   presets: ['@babel/preset-env'],
        //   plugins: [
        //     [
        //       '@babel/plugin-transform-runtime',
        //       {
        //         corejs: 3
        //       }
        //     ]
        //   ]
        // },
        include: [path.resolve(__dirname, '../src')]
        // exclude: /node_modules/ //排除node_modules文件
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')({
                    overrideBrowserslist: ['>0.25%', 'not dead']
                  })
                ];
              }
            }
          },
          'less-loader'
        ],
        include: [path.resolve(__dirname, '../src/css')]
        // exclude: /node_module/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'assets',
              limit: 10240,
              esModule: false,
              name: '[name]_[hash:6].[ext]'
            }
          }
        ],
        include: [path.resolve(__dirname, '../src/img')]
        // exclude: /node_module/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: false,
        collapseWhitespace: false
      },
      config: config
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: './public/js/*.js',
        to: path.resolve(__dirname, '../dist', 'js'),
        flatten: true
      }
    ]),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = new SpeedMeasureWebpackPlugin().wrap(webpackConfig);
