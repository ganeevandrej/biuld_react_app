
module.exports = {
    mode: "development",
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
          use: [ 'style-loader',
            { loader: 'css-loader', options: { modules: true } },
          ]
        }, 
        // loading SASS
        {
          test: /\.(s[ca]ss$)/,
          use: [ 'style-loader', 'css-loader', 'sass-loader' ]
        }
      ]
    }
}