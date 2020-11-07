require("@babel/polyfill");
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const mode = 'development';
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = ()=>{
    var config = {
        splitChunks: {
            chunks: 'all'
        }
    };

    if(isProd){
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
}

module.exports = {
    mode,

    // entry: { main: './src/index.js' },
    entry: ["@babel/polyfill", './src/assets/js/index.js' ],

    output: {
        // filename: 'bundle.js',
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'build')
    },

    resolve: {
        extensions: ['.js', '.json', '.png'],
        alias: {
            '@components': path.resolve(__dirname, 'src/assets/js/components'),
            '@': path.resolve(__dirname, 'src')
        }
    },

    optimization: optimization(),

    devServer: {
        // contentBase: path.resolve(__dirname, 'build'),
        // compress: true,
        port: 9000
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                  { from: 'src/assets/styles/images', to: 'assets/styles/images' },
            ],
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash].css',
        }),
    ],

    module: {
        rules: [
            // {
            //     test: /\.css$/i,
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
                
            // },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    { 
                        loader: 'css-loader',
                        options: {
                          url: false
                        }
                    },
                    'sass-loader'
                ] 
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'assets/fonts/'
                    }
                  }
                ]
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)$/i,
            //     use: [{ 
            //         loader: 'file-loader', 
            //         options: {
            //             name: '[name].[ext]',
            //             context: 'images',
            //             outputPath: 'images'
            //         }
            //     }],
            // },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env', "@babel/preset-react"]
                  }
                }
            }
        ]
    }
}  