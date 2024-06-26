const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', 
    entry: './src/scripts/first.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, 
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 8100,
        open: true, 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/scripts/index.html', 
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i, 
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.js$/i, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], 
                    },
                },
            },
        ],
    },
};

