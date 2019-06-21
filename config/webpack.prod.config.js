// This is the prod Webpack config. All settings here should prefer smaller,
// optimized bundles at the expense of a longer build time.
const Merge = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const commonConfig = require('./webpack.common.config.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = Merge.smart(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/lib/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    library: 'frontend-component-footer',
    libraryTarget: 'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      react: path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
    },
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM',
    },
    '@edx/frontend-i18n': {
      commonjs: '@edx/frontend-i18n',
      commonjs2: '@edx/frontend-i18n',
      amd: '@edx/frontend-i18n',
      root: '@edx/frontend-i18n',
    },
    '@edx/frontend-logging': {
      commonjs: '@edx/frontend-logging',
      commonjs2: '@edx/frontend-logging',
      amd: '@edx/frontend-logging',
      root: '@edx/frontend-logging',
    },
  },
  plugins: [
    // Cleans the dist directory before each build
    new CleanWebpackPlugin(['dist'], {
      root: path.join(__dirname, '../'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, '../src/lib'),
        ],
        exclude: /(node_modules)/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
    ],
  },
});
