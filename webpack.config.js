const path = require('path')
const plugs = require('./webpack-plugins.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
    mode : 'production',
    plugins : [new MiniCssExtractPlugin(),...plugs],
    output : {
        filename : 'main-[fullhash].js',
        path : path.resolve(__dirname,'dist'),
        clean : true
    },
    devServer:{
        static : {directory : path.resolve(__dirname,'dist')},
        hot : true,
        open : true,
        
    },
    module :{
        rules : [
            {
                test : /\.(scss|css)$/i,
                use : [MiniCssExtractPlugin.loader,{
                    loader : 'css-loader',
                    options : {
                        url : false
                    }
                }, 'sass-loader']
            },
            {
                test :/\.(woff2|woff|png|svg|jpg|gif)$/i,
                type : 'asset/resource',
                generator :{
                    filename : function(dp){
                        let np = path.dirname(dp.filename).split('/').slice(1).join('/');
                            return  '/assets/' +np + '/[name][ext]'
                    }
                }
            }
        ]
    },
    // performance: {
    //     assetFilter: function (assetFilename) {
    //       return assetFilename.endsWith('.js');
    //     }
    // }
}