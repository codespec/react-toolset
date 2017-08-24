### Usage

```jsx static
import { Checkbox } from '@codespec/react-toolset'
```

### Description

`<Checkbox>` is a react component of native checkbox.

### Basic Checkbox

```jsx
initialState = { value: false, primary: false };
<div>
  <Checkbox
    id="checkbox_example"
    isChecked={state.value}
    onChange={() => setState({ value: !state.value})}>
    Light Checkbox
  </Checkbox>
  <br />
  <Checkbox
    id="primary_checkbox_example"
    type="dark"
    isChecked={state.primary}
    onChange={() => setState({ primary: !state.primary})}>
    Dark Checkbox
  </Checkbox>
</div>
```

### Sizes

```jsx
initialState = {
  small: false, medium: false, large: false, xlarge: false,
  darkSmall: false, darkMedium: false, darkLarge: false, darkXlarge: false,
};
<div>
  <div className="checkboxExampleSection">
    <Checkbox
      id="small_checkbox_example"
      size="small"
      isChecked={state.small}
      onChange={() => setState({ small: !state.small})}
      className={{root: "checkboxInlineExample"}}>
      Small
    </Checkbox>
    <Checkbox
      id="medium_checkbox_example"
      size="medium"
      isChecked={state.medium}
      onChange={() => setState({ medium: !state.medium})}
      className={{root: 'checkboxInlineExample'}}>
      Medium
    </Checkbox>
    <Checkbox
      id="large_checkbox_example"
      size="large"
      isChecked={state.large}
      onChange={() => setState({ large: !state.large})}
      className={{root: 'checkboxInlineExample'}}>
      Large
    </Checkbox>
    <Checkbox
      id="xlarge_checkbox_example"
      size="xlarge"
      isChecked={state.xlarge}
      onChange={() => setState({ xlarge: !state.xlarge})}
      className={{root: 'checkboxInlineExample'}}>
      Extra Large
    </Checkbox>
  </div>
  <div className="checkboxExampleSection">
    <Checkbox
      id="dark_small_checkbox_example"
      size="small"
      type="dark"
      isChecked={state.darkSmall}
      onChange={() => setState({ darkSmall: !state.darkSmall})}
      className={{root: "checkboxInlineExample"}}>
      Small
    </Checkbox>
    <Checkbox
      id="dark_medium_checkbox_example"
      size="medium"
      type="dark"
      isChecked={state.darkMedium}
      onChange={() => setState({ darkMedium: !state.darkMedium})}
      className={{root: "checkboxInlineExample"}}>
      Medium
    </Checkbox>
    <Checkbox
      id="dark_large_checkbox_example"
      size="large"
      type="dark"
      isChecked={state.darkLarge}
      onChange={() => setState({ darkLarge: !state.darkLarge})}
      className={{root: "checkboxInlineExample"}}>
      Large
    </Checkbox>
    <Checkbox
      id="dark_xlarge_checkbox_example"
      size="xlarge"
      type="dark"
      isChecked={state.darkXlarge}
      onChange={() => setState({ darkXlarge: !state.darkXlarge})}
      className={{root: "checkboxInlineExample"}}>
      Extra Large
    </Checkbox>
  </div>
</div>
```

### Disabled Checkbox

```jsx
initialState = { value: false };
<Checkbox
  id="disabled_checkbox_example"
  isChecked={state.value}
  isDisabled={true}
  iconSize="small"
  onChange={() => setState({ value: !state.value})}>
  Disabled
</Checkbox>
```
