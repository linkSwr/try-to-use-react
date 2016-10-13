const path = require('path');
const webpack = require('webpack');
const commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    // devtool: 'eval',
    // context: __dirname,
    entry: {
        // 为了开发时的热加载用的
        entry: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            // 'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            './dep/js/entry'
        ],
        // devTools: [
        //     'react-hot-loader/patch',
        //     'webpack-dev-server/client?http://localhost:3000',
        //     'webpack/hot/only-dev-server'
        // ],
        vendor: [
            "react",
            "react-dom"
        ],
        prod: [
            './dep/js/entry'
        ],
        entryMobX: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:3000',
            // 'webpack/hot/dev-server',
            'webpack/hot/only-dev-server',
            './dep/js/entry-mobX'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'prod'),
        publicPath: "/static/",
        // filename: 'bundle.js'
        filename: '[name].js'
        // library: 'WebSdk',
        // libraryTarget: 'var'

    },
    resolve: {
        //查找module的话从这里开始查找
//         root: __dirname, //绝对路径
//         //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: ['', '.js', '.json', '.jsx', '.less'],
//         //模块别名定义，方便后续直接引用别名，无须多写长长的地址
//         alias: {}
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            {
                test: /\.jsx$/,
                loaders: [
                    // 'react-hot',
                    // 'react-hot-loader/webpack',
                    'babel',
                    'jsx-loader?harmony'
                ]
            },
            {
                test: /\.js$/,
                loaders: [
                    // 'react-hot-loader/webpack',
                    'babel'
                ]
                // include: path.join(__dirname, 'dep/js')
                // exclude: './node_modules/'
            },
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.less$/, loader: 'style!css!less?sourceMap'},
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    // }
    },
    plugins: [
        // commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                filename: "vendor.bundle.js",
                chunks: ["prod", "vendor"],
        })
        // new webpack.NoErrorsPlugin()
    ]
}