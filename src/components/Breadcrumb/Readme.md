### Usage

```jsx static
import { Breadcrumb } from '@codespec/react-toolset'
```

### Basic Breadcrumb

```jsx
<Breadcrumb>
  <a href="/">Home</a>
  <a href="/route">Route</a>
  You are here
</Breadcrumb>
```

### Custom Breadcrumb

```jsx
<div>
  <div>
    <Breadcrumb icon={{ type: 'fontAwesome', name: 'FaCaretRight', size: 24 }}>
      <a href="/">Home</a>
      <a href="/route">Route</a>
      You are here
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb icon={{ type: 'typicons', name: 'TiChevronRightOutline' }}>
      <a href="/">Home</a>
      <a href="/route">Route</a>
      You are here
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb icon={{ type: 'githubOcticons', name: 'GoDash' }}>
      <a href="/">Home</a>
      <a href="/route">Route</a>
      You are here
    </Breadcrumb>
  </div>
  <div>
    <Breadcrumb icon={{ type: 'materialDesign', name: 'MdFiberManualRecord', size: 8 }}>
      <a href="/">Home</a>
      <a href="/route">Route</a>
      You are here
    </Breadcrumb>
  </div>
</div>
```
