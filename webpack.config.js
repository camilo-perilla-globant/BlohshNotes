const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
    mode: process.env.NODE_ENV,
    devtool: 'source-map',
    entry: ['@babel/polyfill', './client/src/index.js'],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'server/public/')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './client/public/index.html',
            favicon: './client/public/post-it.png',
            inject: true
        })
    ],
    
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            })
        ]
    },
    
    resolve: {
        extensions: ['.jsx', '.js']
    },

    devServer:{
        historyApiFallback: true,
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.s[ac]ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.html$/,
                use: ['html-loader']
            },

            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: 'assets/images'
                    }
                }
            }
        ]
    }
}