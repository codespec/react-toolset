const path = require('path')

module.exports = {
  title: 'React Toolset',
  webpackConfig: require('./config/webpack.config.dev.js'),
  styleguideDir: path.join(__dirname, 'docs'),
  highlightTheme: 'material',
  require: [path.join(__dirname, 'src/styles/docs/styles.css')],
  getComponentPathLine(componentPath) {
    return;
  },
  showUsage: true,
  sections: [
    {
      name: 'Introduction',
      content: './src/Readme.md'
    },
    {
      name: 'Icons',
      components: './src/icons/**/index.jsx'
    },
    {
      name: 'Elements',
      components: './src/elements/**/index.jsx'
    },
    {
      name: 'Components',
      components: './src/components/**/index.jsx'
    },
    {
      name: 'Layouts',
      sections: [
        {
          name: 'Grid',
          content: './src/layouts/Grid/Readme.md',
          components: './src/layouts/Grid/**/index.jsx'
        }
      ]
    }
  ]
}
