const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('./helpers')
const consts = require('./consts')

const config = {
  entry: helpers.getEntry(consts.PAGES),
  output: {
    path: 'dist',
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`,
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass!postcss')
      },
      {
        test: /\.html$/,
        loader: 'html?interpolate&minimize=false'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=8192&name=themes/images/[hash].[ext]'
      }
    ]
  },
  postcss: [
    require('postcss-font-magician')(),
    require('cssnano')({
      filterPlugins: false,
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ],
  plugins: [
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),
    ...helpers.getPlugins(consts.PAGES)
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.html', '.scss']
  }
}

module.exports = config
