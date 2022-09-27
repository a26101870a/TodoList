const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => ({
    mode: env.production ? "production" : "development",
    entry: './src/index.jsx',
    module: {
        rules: [
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env', '@babel/preset-react'] } } },
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            { test: /\.s[ca]ss$/, exclude: /node_modules/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.scss', 'js', '...'],
        alias: {
            Pages: path.resolve(__dirname, 'src/pages'),
            Layout: path.resolve(__dirname, 'src/components/Layout'),
            Input: path.resolve(__dirname, 'src/components/Input'),
            Task: path.resolve(__dirname, 'src/components/Task'),
            SubInput: path.resolve(__dirname, 'src/components/Input/SubInput'),
            AddTask: path.resolve(__dirname, 'src/components/AddTask'),
            List: path.resolve(__dirname, 'src/components/List'),
            Scss: path.resolve(__dirname, 'src/scss'),
            Redux: path.resolve(__dirname, 'src/redux'),
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
            watch: true,
        },
        open: true,
        hot: true,
    },
});
