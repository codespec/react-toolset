react-toolset is using [react-icons] for its icon sets.

### Usage

```jsx static
import { Icon } from '@codespec/react-toolset'
```

### List of Icons

You can find out the list of icons and each icon names from here:
- [Font Awesome]
- [Material Design]
- [Typicons]
- [Github Octicons]

### Size of Icons
```jsx
<div>
  <Icon type='materialDesign' name='MdNearMe' size='small' />
  <br />
  <Icon type='materialDesign' name='MdNearMe' />
  <br />
  <Icon type='materialDesign' name='MdNearMe' size='large' />
  <br />
  <Icon type='materialDesign' name='MdNearMe' size='xlarge' />
</div>
```

### Custom Colors
```jsx
<div>
  <Icon type='fontAwesome' name='FaAt' size='xlarge' color='#29BF12' />
  <Icon type='githubOcticons' name='GoAlert' size='xlarge' color='#F44336' />
  <Icon type='typicons' name='TiFilter' size='xlarge' color='#2196F3' />
</div>
```

[react-icons]: https://github.com/gorangajic/react-icons
[Font Awesome]: https://gorangajic.github.io/react-icons/fa.html
[Typicons]: https://gorangajic.github.io/react-icons/ti.html
[Github Octicons]: https://gorangajic.github.io/react-icons/go.html
