//引入一个包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin'); 
//引入clean插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
//webpack中所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在的目录
    output: {
        //path 指定打包文件的目录
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    //指定webpack打包时要用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test 指定规则生效的文件
                test: /\.ts$/,
                //指定要使用的loader
                use: 'ts-loader',
                //要排除的文件
                exclude: /node_modules/
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "自定义title",
            template: "./src/index.html"
        }),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts','.js']
    },

    mode: 'development'
}