const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('../utils/helpers')
const consts = require('../utils/consts')

const config = {
  entry: helpers.getEntry(),
  output: {
    path: consts.DIST,
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?minimize!sass?includePaths[]=' + consts.SRC + '/styles!postcss')
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'html?interpolate&minimize=false'
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-compiled'
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: `url?limit=8192&name=${consts.IMAGES}[hash].[ext]`
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
        browserslist: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ],
  plugins: [
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),
    ...helpers.getPlugins()
  ],
  resolve: {
    root: __dirname,
    modulesDirectories: ['src', 'node_modules'],
    extensions: ['', '.js', '.html', '.scss']
  }
}

module.exports = config
