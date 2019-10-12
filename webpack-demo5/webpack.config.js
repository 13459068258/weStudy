const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {

    mode: 'production',


    entry: './src/main.js',

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new HtmlWebpackPlugin({
            // 指定要打包的模板页面
            template: './index.html'
        })
    ],
    output: {
        // path:'./dist/',
        path: path.join(__dirname, './dist/'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules)/,//排除的目录
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] //babel中内容的转换规则工具
                    }
                }
            }
        ]
    }
}