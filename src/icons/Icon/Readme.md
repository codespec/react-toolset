react-toolset is using <a href="https://github.com/gorangajic/react-icons" target="_blank">react-icons</a> for its icon sets.

### Usage

```jsx static
import { Icon } from '@codespec/react-toolset'
```

### List of Icons

You can find out the list of icons and each icon names from here:
- <a href="https://gorangajic.github.io/react-icons/fa.html" target="_blank">Font Awesome</a>
- <a href="https://gorangajic.github.io/react-icons/md.html" target="_blank">Material Design</a>
- <a href="https://gorangajic.github.io/react-icons/ti.html" target="_blank">Typicons</a>
- <a href="https://gorangajic.github.io/react-icons/go.html" target="_blank">Github Octicons</a>

### Size of Icons

Set any integer value for size of pixel. `iconExample` class is used for the documentation purpose.

```jsx
<div>
  <Icon type='fontAwesome' name='FaCheckCircle' size={12} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={24} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={32} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={45} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={56} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={64} className='iconExample' />
  <Icon type='fontAwesome' name='FaCheckCircle' size={82} />
</div>
```

### Custom Colors
```jsx
<div>
  <Icon type='materialDesign' name='MdAccountCircle' size={45} color='#29BF12' />
  <Icon type='githubOcticons' name='GoAlert' size={45} color='#F44336' />
  <Icon type='typicons' name='TiFilter' size={45} color='#2196F3' />
</div>
```
