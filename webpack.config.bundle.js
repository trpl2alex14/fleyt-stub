const path = require('path');
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist_bundle'),
  },

  resolve: {
    alias: {
      '@scripts': path.join(__dirname, 'src/js'),
      '@styles': path.join(__dirname, 'src/sass'),
      '@images': path.join(__dirname, 'src/img'),
      'img': path.join(__dirname, 'src/img'),
      '@node': path.join(__dirname, 'node_modules'),
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlBundlerPlugin({
      // path to templates
      entry: {
        index: 'src/views/index.njk',
        home: 'src/views/home.njk'
      },
      js: {
        // output filename of compiled JavaScript
        filename: 'js/[name].[contenthash:8].js',
      },
      css: {
        // output filename of extracted CSS
        filename: 'css/[name].[contenthash:8].css',
      },
      hotUpdate: true,
      preprocessor: 'nunjucks',
      preprocessorOptions: {
        watch: true,
        views: [
          'src/views',
        ],
      }
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['css-loader', 'sass-loader'],
      },
      {
        test: /\.(ico|png|jp?g|svg|gif)/,
        type: 'asset',
        generator: {
          filename: 'img/[name].[hash:8][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 2 * 1024, // inline images < 2 KB
          },
        },
      },
      {
        test: /\.(woff|woff2)/,
        type: 'asset',
        generator: {
          filename: 'css/font/[name].[hash:8][ext]',
        },
      },
    ],
  },

  // enable HMR with live reload
  devServer: {
    static: path.resolve(__dirname, 'dist_bundle'),
    hot: true,
    open: false,
    watchFiles: {
      paths: ['src/**/**/*.*'],
      options: {
        usePolling: true,
      },
    },
  },
};
