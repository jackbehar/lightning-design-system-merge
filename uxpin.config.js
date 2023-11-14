module.exports = {
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Button/Button.js',
          'src/components/Tooltip/Tooltip.js',
          'src/components/Icon/Icon.jsx',
          'src/components/Breadcrumb/Breadcrumb.jsx',
          'src/components/Card/Card.jsx',
        ],
      },
    ],
    wrapper: 'src/components/UXPinWrapper/UXPinWrapper.js',
    webpackConfig: 'webpack.config.js',
  },
  name: 'Example Design System'
};
