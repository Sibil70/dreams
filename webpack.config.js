const webpack = require ('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
    entry: {
        index: "./src/assets/scripts/index.js",
        reviews: "./src/assets/scripts/reviews.js",
        prices: "./src/assets/scripts/prices.js",
        main: "./src/assets/scripts/main.js"
    },
    output: {
        filename: "[name].bundle.js"
    },
    plugins:[
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = config;