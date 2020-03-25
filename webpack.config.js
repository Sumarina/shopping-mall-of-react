const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
  mode:"development",
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
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      template:'./public/index.html',
      filename:'index.html',
      minify:{
        removeAttributeQuotes:false,
        collapseWhitespace:false
      }
    })
  ]
};
