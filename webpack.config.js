// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: false,
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'facerecognition-sdk.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: 'faceRecognitionLib',
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.SourceMapDevToolPlugin({
            filename: 'facerecognition-sdk.js.map'
        }),
    ],
    externals: {
        jquery: "jQuery",
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: undefined,
                parse: {},
                compress: {},
                mangle: true, // Note `mangle.properties` is `false` by default.
                module: false,
                // Deprecated
                output: null,
                format: null,
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            },
        })],
    }
}
