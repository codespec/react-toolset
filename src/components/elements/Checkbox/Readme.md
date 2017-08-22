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
    Default Checkbox
  </Checkbox>
  <br />
  <Checkbox
    id="primary_checkbox_example"
    size="medium"
    type="primary"
    isChecked={state.primary}
    onChange={() => setState({ primary: !state.primary})}>
    Primary Checkbox
  </Checkbox>
</div>
```

### Sizes

```jsx
initialState = {
  small: false, medium: false, large: false, xlarge: false,
  priamrySmall: false, primaryMedium: false, primaryLarge: false, primaryXlarge: false,
};
<div>
  <div className="checkboxExampleSection">
    <Checkbox
      id="small_checkbox_example"
      size="small"
      isChecked={state.small}
      onChange={() => setState({ small: !state.small})}
      cls={{root: "checkboxInlineExample"}}>
      Small
    </Checkbox>
    <Checkbox
      id="medium_checkbox_example"
      size="medium"
      isChecked={state.medium}
      onChange={() => setState({ medium: !state.medium})}
      cls={{root: 'checkboxInlineExample'}}>
      Medium
    </Checkbox>
    <Checkbox
      id="large_checkbox_example"
      size="large"
      isChecked={state.large}
      onChange={() => setState({ large: !state.large})}
      cls={{root: 'checkboxInlineExample'}}>
      Large
    </Checkbox>
    <Checkbox
      id="xlarge_checkbox_example"
      size="xlarge"
      isChecked={state.xlarge}
      onChange={() => setState({ xlarge: !state.xlarge})}
      cls={{root: 'checkboxInlineExample'}}>
      Extra Large
    </Checkbox>
  </div>
  <div className="checkboxExampleSection">
    <Checkbox
      id="primary_small_checkbox_example"
      size="small"
      type="primary"
      isChecked={state.primarySmall}
      onChange={() => setState({ primarySmall: !state.primarySmall})}
      cls={{root: "checkboxInlineExample"}}>
      Small
    </Checkbox>
    <Checkbox
      id="primary_medium_checkbox_example"
      size="medium"
      type="primary"
      isChecked={state.primaryMedium}
      onChange={() => setState({ primaryMedium: !state.primaryMedium})}
      cls={{root: "checkboxInlineExample"}}>
      Medium
    </Checkbox>
    <Checkbox
      id="primary_large_checkbox_example"
      size="large"
      type="primary"
      isChecked={state.primaryLarge}
      onChange={() => setState({ primaryLarge: !state.primaryLarge})}
      cls={{root: "checkboxInlineExample"}}>
      Large
    </Checkbox>
    <Checkbox
      id="primary_xlarge_checkbox_example"
      size="xlarge"
      type="primary"
      isChecked={state.primaryXlarge}
      onChange={() => setState({ primaryXlarge: !state.primaryXlarge})}
      cls={{root: "checkboxInlineExample"}}>
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
