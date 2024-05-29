const path = require('path');

module.exports = {
  mode: 'development', // Change to 'production' for builds
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Inline images below 8KB
              name: '[name].[ext]',
              outputPath: 'assets', // Output to assets folder
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map', // Enable source maps for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'public'),
    },
  },
};
