const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    port: '3000',
    hot: true,
    quiet: false, //除初始启动信息之外的内容不会被打印到控制台,默认不启动 ，启动之后会看不到错误和报警信息
    inline: false,
    // stats: 'errors-only', //仅打印error
    overlay: false,
    clientLogLevel: 'silent',
    compress: true, //是否启用gzip压缩
    // proxy: {
    //   '/api': {
    //     target: 'http://192.168.2.213:9090', //坑:写localhost不行，改成IP地址即可
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  }
});
