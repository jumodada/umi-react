import { resolve } from 'path';
const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');
const isDevelopment = process.env.NODE_ENV === 'development';

export default {
  publicPath: '/',
  // dva: { immer: true },
  //  dynamicImport: {
  //    loading: 'components/Loader/Loader',
  //  },
  hash: true,
  ignoreMomentLocale: true,
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  webpack5: {},
  chainWebpack(config: any, { webpack }: any) {
    config.merge({
      optimization: {
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 30000,
          minChunks: 3,
          automaticNameDelimiter: '.',
          cacheGroups: {
            react: {
              name: 'react',
              priority: 20,
              test: /[\\/]node_modules[\\/](react|react-dom|react-dom-router)[\\/]/,
            },
          },
        },
      },
    });
  },
};
