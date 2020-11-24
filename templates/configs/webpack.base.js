const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const CopyPlugin = require('copy-webpack-plugin');

const devMode = process.env.NODE_ENV === 'development';

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_OUTPUT_DIR_NAME = 'output';

const entry = {
  index: './src/index.tsx'
};

const plugins = [
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'assets/css/[name].[hash].css'
  }),
  new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  new HtmlWebpackPlugin({
    filename: `index.html`,
    excludeChunks: [],
    template: path.resolve(__dirname, '../src/public/index.html')
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, '../src/public/'),
        to: path.resolve(__dirname, `../${BUILD_OUTPUT_DIR_NAME}/`)
      }
    ]
  })

  // Other plugins...
];

const config = {
  mode: 'development',
  entry,
  output: {
    path: path.resolve(__dirname, `../${BUILD_OUTPUT_DIR_NAME}`), // string
    filename: 'assets/js/[name].[hash].js'
  },

  target: 'web',
  watch: false,
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
      '@': path.resolve(__dirname, '../src')
    },
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js']
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      // svg
      {
        test: /\.svg$/i,
        exclude: [path.resolve('./src/svg')],
        use: [
          '@svgr/webpack',
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // png|jpg|gif|ogv
      {
        test: /\.(png|jpg|gif|ogv)$/i,
        exclude: [path.resolve('./src/svg')],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      // css
      {
        test: /\.css$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader'
        ]
      },
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        include: path.resolve('./src'),
        exclude: /(node_modules|bower_components)/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader'
          }
        ]
      }
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     {
      //       loader: 'css-loader' // translates CSS into CommonJS
      //     },
      //     {
      //       loader: 'less-loader', // compiles Less to CSS
      //       options: {
      //         lessOptions: {
      //           // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
      //           modifyVars: {},
      //           javascriptEnabled: true
      //         }
      //       }
      //     }
      //   ]
      // },
      // {
      //   test: /\.s[ac]ss$/i,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     // Translates CSS into CommonJS
      //     'css-loader',
      //     // Compiles Sass to CSS
      //     'sass-loader'
      //   ]
      // }
    ]
  },
  plugins
};

module.exports = { config, BUILD_OUTPUT_DIR_NAME };
