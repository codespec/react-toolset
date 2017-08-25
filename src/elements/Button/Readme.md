### Usage

```jsx static
import { Button } from '@codespec/react-toolset'
```

### Description

`<Button>` is standardized button component with `button`, `a`, or `div`

### Roles

- Use `role` (string) to style the button with a standard style of `default`, `primary`, `secondary`, `success`, `warning`, `error`, `info` role
- Add the `disabled` attribute to make the button look and act disabled

```jsx
<div>
  <div>
    <Button>Default</Button> <Button disabled>Disabled Default</Button>
  </div>
  <br />
  <div>
    <Button role='primary'>Primary</Button> <Button role='primary' disabled>Disabled Primary</Button>
  </div>
  <br />
  <div>
    <Button role='secondary'>Secondary</Button> <Button role='secondary' disabled>Disabled Secondary</Button>
  </div>
  <br />
  <div>
    <Button role='success'>Success</Button> <Button role='success' disabled>Disabled Success</Button>
  </div>
  <br />
  <div>
    <Button role='warning'>Warning</Button> <Button role='warning' disabled>Disabled Warning</Button>
  </div>
  <br />
  <div>
    <Button role='error'>Error</Button> <Button role='error' disabled>Disabled Error</Button>
  </div>
  <br />
  <div>
    <Button role='info'>Info</Button> <Button role='info' disabled>Disabled Info</Button>
  </div>
</div>
```

### Button Styles

Two types of button styles: flat, rounded.

```jsx
<div>
  <div>
    <Button isFlat={true} role='primary' className='buttonExample'>Primary</Button>
    <Button isFlat={true} role='secondary' className='buttonExample'>Secondary</Button>
    <Button isFlat={true} role='success' className='buttonExample'>Success</Button>
    <Button isFlat={true} role='warning' className='buttonExample'>Warning</Button>
    <Button isFlat={true} role='error' className='buttonExample'>Error</Button>
    <Button isFlat={true} role='info'>Info</Button>
  </div>
  <br />
  <div>
    <Button role='primary' className='buttonExample'>Primary</Button>
    <Button role='secondary' className='buttonExample'>Secondary</Button>
    <Button role='success' className='buttonExample'>Success</Button>
    <Button role='warning' className='buttonExample'>Warning</Button>
    <Button role='error' className='buttonExample'>Error</Button>
    <Button role='info'>Info</Button>
  </div>
</div>
```

### Sizes

- `size` set the button height
- `isStretched` applies a block display to create a button a button which spans the full width of its container

```jsx
<div>
  <div>
    <Button size='small'>Small</Button> <Button>Default</Button> <Button size='large'>Large</Button>
  </div>
  <br />
  <div>
    <Button isStretched={true}>Stretched</Button>
  </div>
</div>
```

### Toggle Selection

- `isSelected` give a default button a selected (pressed) look

```jsx
<div>
  <div>
    <Button>Unselected</Button>
  </div>
  <br />
  <div>
    <Button isSelected={true}>Selected</Button>
  </div>
</div>
```

### Link Buttons
- `link` specifies an url to which the button should navigate to. By setting this property, the underlying html element will be an `<a>` instead of `<button>`. This may be useful for SEO purposes.

```jsx
<Button link='http://www.google.com' role='secondary'>Link</Button>
```

### Alternative Tag

- `tag` gives the user the option to make the underlying html element a `<div>` instead of `<button>`. This can be handy if any of the children need to handle click events since the native `<button>` element will block this in IE and FF.

```jsx
<Button tag='div' role='primary' style={{position: 'relative'}}>
  Upload File
  <input type='file' style={{
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    margin: 0,
    padding: 0,
    opacity: 0,
    filter: 'alpha(opacity=0)',
    cursor: 'pointer'
  }} />
</Button>
```
