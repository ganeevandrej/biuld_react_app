const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            // loading SASS
            {
                test: /\.css$/,
                use: ['style-loader',
                { loader: 'css-loader', options: { modules: true } },
                ]
            },
            // loading SASS
            {
                test: /\.(s[ca]ss$)/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        open: true,
        hot: true
    },
});