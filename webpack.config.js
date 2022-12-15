const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.handlebars$/, loader: 'handlebars-loader' },
            { test: /\.jpg$/, type: 'asset/resource' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/index.html'
        })
    ],
    devServer: {
        proxy: {
        }
    }
};