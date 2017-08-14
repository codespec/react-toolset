react-toolset is list of react components which can be adopted easily. It is using [classnames] module for conditional class name injection.

### Install

```sh
# npm users
$ npm i --save @codespec/react-toolset

# yarn users
$ yarn add @codespec/react-toolset
```

### Documentation

- [https://codespec.github.io/react-toolset/docs/](https://codespec.github.io/react-toolset/docs/)

### How to use

Since this react-toolset library is not compiling production package, you need to set up more things.

1. Install SCSS related loaders

  ```sh
  $ yarn add --dev sass-loader node-sass autoprefixer
  ```

2. Set up Webpack configuration
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

3. Import individual component from your application

  ```jsx
  import Button from '@codespec/react-toolset'
  ```

[classnames]: https://github.com/JedWatson/classnames
