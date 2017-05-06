const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('./helpers')
const consts = require('./consts')
const path = require('path')
const webpack = require('webpack')

const config = {
  entry: helpers.getEntry(consts.PAGES),
  output: {
    path: path.resolve('dist'),
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [
          path.resolve('src/themes')
        ],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          loader: 'css-loader!sass-loader!postcss-loader',
          publicPath: '../'
        })
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              interpolate: true,
              minimize: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              publicPath: '/',
              outputPath: 'themes/images/',
              name: '[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
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
        ]
      }
    }),
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),
    ...helpers.getPlugins(consts.PAGES)
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.html', '.scss']
  }
}

module.exports = config
