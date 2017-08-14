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
      name: 'Elements',
      components: './src/components/elements/**/index.jsx'
    },
    {
      name: 'Layouts',
      sections: [
        {
          name: 'Grid',
          content: './src/components/layouts/Grid/Readme.md',
          components: './src/components/layouts/Grid/**/index.jsx'
        }
      ]
    }
  ]
}
