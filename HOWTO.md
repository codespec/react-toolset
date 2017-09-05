react-toolset is list of react components which can be adopted easily. It is using [classnames] module for conditional class name injection.

## Developing / viewing examples
```sh
$ npm install
$ npm run docs
```

## Creating pull requests

Before creating pull request please follow these steps.

```sh
$ yarn run docs:build
$ yarn run build
```

## Component files structure
```
react-toolset/
  src/
    components/
      component-name/
        index.jsx
        style.scss(optional)
        Readme.md
    elements/
      component-name/
        index.jsx
        style.scss(optional)
        Readme.md
    layouts/
      component-name/
        index.jsx
        style.scss(optional)
        Readme.md
```

Always provide `index.jsx` so your component can be imported as `{path}/component-name` in the `index.js` of root directory. Main stylesheet `style.scss` is not meant to be exposed but keep it named so for clarify.

Always document new components and component prop additions in the `index.jsx` and `Readme.md` files. And, be sure to include at least one example in `Readme.md`.

## Component boilerplate

### index.jsx
```jsx
import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'
const cls = cx.bind(style)

const ComponentName = props => {
  const { className, ...otherProps } = props
  return <div className={cls('ComponentName', className)} {...otherProps}></div>
}

ComponentName.propTypes = {}

ComponentName.defaultProps = {}

export default ComponentName
```

### style.scss
```scss
:local {
  @import '../../../styles/config';
  .ComponentName {
    // component root element style
  }
  .ComponentName__elementName {
    // keep style as flat as possible
  }
}
```

When creating compoennt scss:
- import the config scss fiel to ensure access to standardized style variables
- use BEM naming convention for class names, `:local` scope lets you not worry about names uniqueness
- keep your scss as flat as possible to ensure that additional styles passed into your component through `className` or `cls` props will be applied

### Component API conventions

#### Keep the data flow outside of component

Make your component consume and return data without holding it in internal state. Do not make assumptions on how data is being handled outside of component. Let's say you have toaster message on top of your page. Straight forward but inappropriate solution might be following:

```scss
:local {
  .Toaster {
    position: relative;
    ...
  }
  .Toaster__close-btn {
    ...
    &:before {
      content: 'x';
    }
  }
}
```

and JS somewhat like this

```jsx
export default class Toaster extends Component {
  state: { isOpen: true }

  onClose = () => this.setState({ isOpen: !this.state.isOpen })

  render () {
    const { content, cls } = this.props
    const { isOpen } = this.state

    if (!isOpen) return null

    return (
      <div className={cx('Toaster', cls.root)}>
        <div>
          {content}
          <span className={cx('Toaster__close-btn', cls.close)} onClick={this.onClose}></span>
        </div>
      </div>
    )
  }
}
```

This approach has number of problems:
- how to tell message to show up?
- what's the initial state?
- how to revert `state.isOpen`?

But if you leave this decisions to the App itself, then component would be simplified down to this

```jsx
const Toaster = ({ content, onClose, cls = {} }) => (
  <div className={cx('Toaster', cls.root)}>
    {content}
    <span className={cx('Toaster__close-btn', cls.close)} onClick={onClose} />
  </div>
)
```

and the usage of this component from App would be

```jsx
{state.msg && <Toaster content={state.msg} onClose={() => this.setState({ msg: null })} />}
```

#### Delegate event handlers

Let's say you make an Icon component and want it to be clickable, or ideally accept all attributes arbitrary element would do

```jsx
const Icon = ({ name, classNames, ...otherProps }) => {
  <span className={cx('Icon', `Icon-${name}`, className)} ...otherProps />
}
```


[classnames]: https://github.com/JedWatson/classnames
