const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';
const config = require('./public/config')[isDev ? 'dev' : 'build'];

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'), //必须绝对路径
    filename: 'bundle.[hash:6].js',
    publicPath: '/' //CDN地址
  },
  mode: isDev ? 'development' : 'production',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: '3000',
    quiet: false, //除初始启动信息之外的内容不会被打印到控制台,默认不启动 ，启动之后会看不到错误和报警信息
    inline: false,
    stats: 'errors-only', //仅打印error
    overlay: false,
    clientLogLevel: 'silent',
    compress: true //是否启用gzip压缩
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
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
        exclude: /node_modules/ //排除node_modules文件
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
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
        exclude: /node_module/
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
        exclude: /node_module/
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
    new CleanWebpackPlugin()
  ]
};
