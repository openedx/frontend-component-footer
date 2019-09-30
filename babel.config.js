// These preset packages are included by frontend-build.
// TODO: Add to frontend-build and leverage that config.
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-class-properties',
  ],
  env: {
    i18n: {
      plugins: [
        [
          'react-intl',
          {
            messagesDir: './temp/babel-plugin-react-intl',
            moduleSourceName: '@edx/frontend-i18n',
          },
        ],
      ],
    },
    test: {
      presets: [
        '@babel/preset-env',
      ],
    },
  },
};
