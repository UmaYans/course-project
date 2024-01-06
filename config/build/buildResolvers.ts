import path  from 'path'
import webpack from 'webpack'

export function buildResolvers (srcPath: string): webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [srcPath, 'node_modules'],
        mainFiles: ['index'],
        alias: {

        }
    }
}