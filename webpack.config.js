const webpack = require ('webpack');

const config = {
    entry: {
        main: "./src/assets/scripts/main.js"
    },
    output: {
        filename: "[name].bundle.js"
    }
};

module.exports = config;