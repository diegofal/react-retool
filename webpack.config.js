const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './index.web.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(react-native-vector-icons|@react-native-async-storage|@react-navigation|react-native-tab-view)\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
              '@babel/preset-flow'
            ],
            plugins: [
              '@babel/plugin-transform-class-properties',
              '@babel/plugin-transform-private-methods',
              '@babel/plugin-transform-private-property-in-object',
              'react-native-web'
            ]
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.web.js', '.web.jsx', '.web.ts', '.web.tsx', '.js', '.jsx', '.ts', '.tsx'],
    alias: {
      'react-native$': 'react-native-web',
      'victory-native': 'victory',
      '@react-native-async-storage/async-storage': '@react-native-async-storage/async-storage/lib/module/AsyncStorage.js',
      'react-native-vector-icons': '@expo/vector-icons',
      'react-native-tab-view': 'react-native-tab-view/lib/module/index.js',
      '@react-navigation/material-top-tabs': '@react-navigation/material-top-tabs/lib/module/index.js'
    },
    fallback: {
      '@shopify/react-native-skia': false,
      'react-native-gesture-handler': false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true
  }
}; 