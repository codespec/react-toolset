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

There are 4 different sizes for icons. `iconExample` class is used for the documentation purpose.

```jsx
<div>
  <Icon className='iconExample' type='fontAwesome' name='FaCcAmex' size='small' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDinersClub' size='small' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDiscover' size='small' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcJcb' size='small' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcMastercard' size='small' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcVisa' size='small' />
  <Icon type='fontAwesome' name='FaCcPaypal' size='small' />
  <br />
  <Icon className='iconExample' type='fontAwesome' name='FaCcAmex' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDinersClub' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDiscover' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcJcb' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcMastercard' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcVisa' />
  <Icon type='fontAwesome' name='FaCcPaypal' />
  <br />
  <Icon className='iconExample' type='fontAwesome' name='FaCcAmex' size='large' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDinersClub' size='large' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDiscover' size='large' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcJcb' size='large' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcMastercard' size='large' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcVisa' size='large' />
  <Icon type='fontAwesome' name='FaCcPaypal' size='large' />
  <br />
  <Icon className='iconExample' type='fontAwesome' name='FaCcAmex' size='xlarge' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDinersClub' size='xlarge' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcDiscover' size='xlarge' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcJcb' size='xlarge' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcMastercard' size='xlarge' />
  <Icon className='iconExample' type='fontAwesome' name='FaCcVisa' size='xlarge' />
  <Icon type='fontAwesome' name='FaCcPaypal' size='xlarge' />
</div>
```

### Custom Colors
```jsx
<div>
  <Icon type='materialDesign' name='MdAccountCircle' size='xlarge' color='#29BF12' />
  <Icon type='githubOcticons' name='GoAlert' size='xlarge' color='#F44336' />
  <Icon type='typicons' name='TiFilter' size='xlarge' color='#2196F3' />
</div>
```
