### Usage

```jsx static
import { Breadcrumb } from '@codespec/react-toolset'
```

`<Breadcrumb>` is a navigation component representing the site hierarchy.

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
<Breadcrumb className='Breadcrumb--double'>
  <a href="/">Home</a>
  <a href="/route">Route</a>
  You are here
</Breadcrumb>
```
