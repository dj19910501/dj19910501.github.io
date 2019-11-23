var path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        'App': path.resolve(__dirname, 'src/App.jsx'),
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js']
    },
    output: {
        path: path.resolve(__dirname),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }, {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname),
        compress: true,
        port: 9000,
        hot: true
    },
};
