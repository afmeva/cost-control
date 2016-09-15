var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.vue'],
    alias: {
    //  'dist': path.resolve(__dirname, './dist'),
    //  'assets': path.resolve(__dirname, '../src/assets'),
    //  'components': path.resolve(__dirname, '../src/components')
   }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  vue: {
    loaders: {
      scss: 'vue-style-loader!css-loader!sass'
    },
  },
  devServer: {
    contentBase: ["./src", "./dist"]
  }
}
