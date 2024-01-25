const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            // loading SASS
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { modules: true } },
                ]
            },
            // loading SASS
            {
                test: /\.(s[ca]ss$)/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
          }),
    ]
});