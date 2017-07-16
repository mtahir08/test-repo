const webpack = require("webpack");
const path = require("path");

let HtmlWebpackPlugin = require("html-webpack-plugin");

let HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "src/index.html"),
    filename: "index.html",
    inject: "body"
})
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        alias: {
            'react-redux': path.join(__dirname, '/node_modules/react-redux/dist/react-redux.min')
        }
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-decorators-legacy']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
            {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
                limit: 250000,
                }
            },
            {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
                name: './images/[hash].[ext]',
               },
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.jsx']
    },
    plugins: [HtmlWebpackPluginConfig]
}

module.exports = config