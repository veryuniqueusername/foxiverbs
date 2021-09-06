import path from 'path';
import { DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

module.exports = {
	entry: './src/index',
	...(process.env.production || !process.env.development
		? {}
		: { devtool: 'eval-source-map' }),

	resolve: {
		extensions: ['.ts', '.tsx', '.js', 'jsx'],
		plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
	},
	output: {
		path: path.join(__dirname, '/build'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				exclude: /build/,
			},
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		port: 3000,
		open: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			// HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles
			template: './public/index.html',
		}),
		// DefinePlugin allows you to create global constants which can be configured at compile time
		new DefinePlugin({
			'process.env': process.env.production || !process.env.development,
		}),
		new ForkTsCheckerWebpackPlugin({
			// Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
			eslint: {
				files: './src/**/*.{ts,tsx,js,jsx}',
			},
		}),
	],
};
