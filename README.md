<div align="center" markdown="1">

<img src="src/images/toolset-logo-dark.png" alt="React Toolset" width="380" />

<h1 style="margin-top: 5px;">React Toolset</h1>

[![Build Status](https://travis-ci.org/codespec/react-toolset.svg?branch=master)](https://travis-ci.org/codespec/react-toolset)
[![npm](https://img.shields.io/npm/v/@codespec/react-toolset.svg)](https://www.npmjs.com/package/@codespec/react-toolset)
[![npm](https://img.shields.io/npm/dm/@codespec/react-toolset.svg)](https://www.npmjs.com/package/@codespec/react-toolset)

Independent set of React UI Components for your application.

</div>

### Install

```sh
# npm users
$ npm i --save @codespec/react-toolset

# yarn users
$ yarn add @codespec/react-toolset
```

### Documentation

- <a href="https://codespec.github.io/react-toolset/docs/" target="_blank">https://codespec.github.io/react-toolset/docs/</a>

### How to use

#### When using not complied source

1. Set up Webpack configuration
  ```js
  // Add this loaders in your webpack.config.js
  // You should not exclude node_modules directory from it.
  // This is just an example.
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules:true,
              localIdentName: '[local]-[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          }
        ]
      },
    ]
  }
  ```
2. Import individual component from your application

  ```jsx
  import { Button } from '@codespec/react-toolset/src'
  ```

If you are using `create-react-app`, use need to follow this.

1. Eject your predefined configuration

  ```sh
  yarn eject
  ```

2. Configure the Webpack like as follow

  ```js
  // Process JS with Babel.
  {
    test: /\.(js|jsx)$/,
    include: [paths.appSrc, /node_modules\/@codespec/],     // add @codespec module to include
    loader: require.resolve('babel-loader'),
    options: {

      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
    },
  },
  ```

3. Configure SCSS as above

#### When using compiled source

1. Import a component from your application like as below

  ```js
  import { Button } from '@codespec/react-toolset'
  ```
