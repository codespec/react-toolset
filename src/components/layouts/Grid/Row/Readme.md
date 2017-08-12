### Collapse

```jsx
<div>
  <strong>Like column sizes, collapse is inherited. So, if you set collapse at small,
    columns at small, medium, and large displays will be collapsed.</strong>
  <Row className='customRowClass' collapse={{small: true}}>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed</p>
    </Column>
  </Row>
  <br />
  <strong>Set collapse for one display size and uncollapse for another display
  size for a more complex gutter configuration.</strong>
  <Row className='customRowClass' collapse={{small: true}} uncollapse={{medium: true}}>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed, medium uncollapsed</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed, medium uncollapsed</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small collapsed, medium uncollapsed</p>
    </Column>
  </Row>
</div>
```
