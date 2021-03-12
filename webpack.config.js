const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    target: process.env.NODE_ENV === 'production' ? 'browserslist' : 'web', // hot reload bug on webpack due to which we have done this
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node-modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    devtool: "source-map",

    devServer: {
        contentBase: "./dist",
        hot: true
    }
}