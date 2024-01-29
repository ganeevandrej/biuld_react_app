import { merge } from 'webpack-merge';
import ESLintPlugin from 'eslint-webpack-plugin';
import common from './webpack.common';
import 'webpack-dev-server';

export default merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            // loading CSS
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
    plugins: [
        new ESLintPlugin({
            extensions: ['js', 'ts', 'tsx', 'jsx']
        })
    ],
    devServer: {
        open: true,
        hot: true,
        historyApiFallback: true,
    },
});