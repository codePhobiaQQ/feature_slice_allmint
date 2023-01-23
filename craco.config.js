const path = require('path');
const cracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: cracoAlias,
      options: {
        baseUrl: './src',
        source: 'tsconfig',
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
  // webpack: {
  //   alias: {
  //     '@': path.resolve(__dirname, 'src'),
  //     '@shared': path.resolve(__dirname, 'src', 'shared'),
  //     '@entities': path.resolve(__dirname, 'src', 'entities'),
  //     '@features': path.resolve(__dirname, 'src', 'features'),
  //     '@widgets': path.resolve(__dirname, 'src', 'widgets'),
  //     '@pages': path.resolve(__dirname, 'src', 'pages'),
  //     '@app': path.resolve(__dirname, 'src', 'app'),
  //   },
  // },
};
