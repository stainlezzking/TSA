const path = require('path')
const HWP  = require('html-webpack-plugin')

module.exports = {
    mode : 'production',
    plugins : [new HWP({
        title : "THE SEVEN APEX STUDIO | BUILD WEBSITES AND BUSINESS BRANDING",
        template : path.resolve(__dirname, "src/template.ejs"),
        filename : 'index.html'
    })],
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
                use : ['style-loader','css-loader', 'sass-loader']
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