var path = require('path')

module.exports = {
  // 入口文件
  entry: './src/main.js',
  // 输出
  output: {
    path:path.resolve(__dirname,'./dist'),
    publicPath: '/dist/',
    // 名字叫 bundle.js
    filename: 'bundle.js'
  },

  // 导入的时候就可以不添加后缀后了
  resolve:{
    extensions: ['.js', '.vue']
  },

  module: {
    rules:[
      {
        test: /\.vue$/,
          loader: 'vue-loader',
          options: {
              loaders: {}
              // other vue-loader options go here
        }
      },
      {
        test:/\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
      },
    ]
  },

  devServer: {//webpack-dev-server配置
    historyApiFallback: true,//不跳转
    noInfo: true,
    inline: true,//实时刷新
    hot:true
  }
}
