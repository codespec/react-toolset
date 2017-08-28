`ListItem` should be used inside of `List`. Based on the type property of `List` component the `ListItem` can be shown in various style.

### Default Vertical List

```jsx
<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

### Instruction List

```jsx
<List type='instruction'>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

### Bullet List

```jsx
<List type='bullet'>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

### Horizontal List

```jsx
<List type='horizontal'>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

### Pipe List

```jsx
<List type='pipe'>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```
