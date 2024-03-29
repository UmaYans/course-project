import path  from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'


export function buildPlugins (pathHtml: string): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: pathHtml
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        })
    ]
}