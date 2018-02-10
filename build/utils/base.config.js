const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const helpers = require('./helpers')
const consts = require('./consts')
const path = require('path')

const config = {
  entry: helpers.getEntry(),
  output: {
    path: path.resolve('dist'),
    publicPath: consts.CDN,
    filename: `${consts.SCRIPTS}[name].js`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'post',
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
        include: [consts.SRC],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [`${consts.SRC}/styles`]
              }
            },
            'postcss-loader'
          ],
          publicPath: '../'
        })
      },
      {
        test: /\.json$/,
        use: ['json-loader']
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
        test: /\.hbs$/,
        use: [
          {
            loader: 'handlebars-loader',
            options: {
              inlineRequires: '\/images\/',
              helperDirs: [__dirname + '/../handlebars/helpers']
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
              outputPath: consts.IMAGES,
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
          require('cssnano')(),
          require('postcss-utilities')({
            ie8: true
          })
        ]
      }
    }),
    new ExtractTextPlugin(`${consts.STYLES}[name].css`),
    ...helpers.getPlugins()
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.html', '.scss'],
    alias: {
      '@': path.resolve('src')
    }
  }
}

module.exports = config
