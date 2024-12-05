const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // ... outras configurações
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [process.env.NODE_ENV === 'development' && require.resolve('react-refresh/babel')].filter(Boolean),
            },
          },
        ],
      },
      // ... outras regras
    ],
  },
  plugins: [
    // ... outros plugins
    process.env.NODE_ENV === 'development' && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
