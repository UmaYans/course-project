import webpack from "webpack";
import path  from 'path'
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig ({
    mode,
    paths,
    port,
    isDev
}: BuildOptions): webpack.Configuration {

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(paths.html) ,
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(paths.src),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined
    }
}