const webpack = require('webpack');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react']
                }
            }
        },
        {
            test: /\.scss$/,
            use: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test: /\.(s(a|c)ss)$/,
            use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
            use: {
              loader: 'url-loader',
            }
        },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        static: path.resolve(__dirname, './public')
    },
};