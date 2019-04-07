const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: { main: './src/index.js' },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[main].[chunkhash].js'
    },
    module: {
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use:  [
                    'style-loader', 
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader', 
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [ 
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "main.[contenthash].css"
        }),
        new HtmlWebPackPlugin({
            inject: false,
            hash: true,
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}