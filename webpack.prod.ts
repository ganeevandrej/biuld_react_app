import { merge } from 'webpack-merge';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';
import common from './webpack.common';

export default merge(common, {
    mode: 'production',
    module: {
        rules: [
            // loading SASS
            {
                test: /\.css$/,
                use: [_loader,
                { loader: 'css-loader', options: { modules: true } },
                ]
            },
            // loading SASS
            {
                test: /\.(s[ca]ss$)/,
                use: [_loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main-[hash:8].css'
          }),
    ]
});