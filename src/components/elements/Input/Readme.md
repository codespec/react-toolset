### Usage

```jsx static
import { Input } from '@codespec/react-toolset'
```

### Description

`<Input>` is a react component of native input.

### Basic Input

```jsx
initialState = { value: '' };   // This is for using state in react-styleguidist
<div>
  <Input
    id="input_example"
    label='My Field'
    type='text'
    name='myField'
    placeholder="type something"
    // This is react-styleguidist syntax. You should use `this.setState`
    onChange={(e) => { setState({ value: e.target.value }) }} />
  <pre>State: {JSON.stringify(state, null, 2)}</pre>
</div>
```

### Disabled Input

```jsx
<Input
  id="disabled_input_example"
  label='My Field'
  type='text'
  name='myField'
  placeholder="type something"
  disabled />
```
