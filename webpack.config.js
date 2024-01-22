const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env = {}) => {
  const { mode = 'production' } = env;

  const isProd = mode === 'production';
  const isDev = mode === 'development';

  const getStyleLoaders = () => {
    return [
      isProd ? MiniCssExtractPlugin.loader : 'style-loader'
    ]
  }

  const getPlugins = () => {
    const plugins = [
      new HTMLWebpackPlugin({
        title: 'Hello Andrey',
        template: 'public/index.html'
      }),
    ]
    if (isProd) {
      plugins.push(new MiniCssExtractPlugin({
        filename: 'main-[hash:8].css'
      }))
    }

    return plugins;
  }

  return {
    mode: isProd ? 'production' : isDev && 'development',
    output: {
      filename: isProd ? 'main-[hash:8].js' : undefined
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        // loading images
        {
          test: /\.(png|jpg|jpeg|gif|ico)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
        },
        // loading fonts
        {
          test: /\.(ttf|otf|eot|woff|woff2)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'fonts',
                name: '[name].[ext]'
              }
            }
          ]
        },
        // loading css
        { 
          test: /\.css$/,
          use: [ ...getStyleLoaders(),
            { loader: 'css-loader', options: { modules: true } },
          ]
        }, 
        // loading SASS
        {
          test: /\.(s[ca]ss$)/,
          use: [ ...getStyleLoaders(), 'css-loader', 'sass-loader' ]
        }
      ]
    },
    plugins: getPlugins(),
    devServer: {
      open: true
    }
  }
}