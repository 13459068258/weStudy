const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
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
        }),
        new VueLoaderPlugin()
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
              }
        ]
    },
    // 解析完整版 vue.js
    // resolve:{
    //     alias:{
    //         'vue$':'vue/dist/vue.js'
    //     }
    // }
}