### Basic Column

Many of the column properties accept a "size".  A "size" is always a number between 1 and 12 (inclusive)

```jsx
<div>
  <strong>If just small is set, small, medium, and large displays will have the same column configuration</strong>
  <Row>
    <Column small={4} className='customColumnClass'>
      <p>4 small</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small</p>
    </Column>
    <Column small={4} className='customColumnClass'>
      <p>4 small</p>
    </Column>
  </Row>
  <br />
  <strong>If just medium is set, medium and large displays will have the same column configuration
  and all columns will be full width on a small display.</strong>
  <Row>
    <Column medium={4} print={4} className='customColumnClass'>
      <p>4 medium</p>
    </Column>
    <Column medium={4} print={4} className='customColumnClass'>
      <p>4 medium</p>
    </Column>
    <Column medium={4} print={4} className='customColumnClass'>
      <p>4 medium</p>
    </Column>
  </Row>
  <br />
  <strong>If just large is set, columns will be full width on medium and small displays</strong>
  <br />
  <Row>
    <Column large={4} className='customColumnClass'>
      <p>4 large</p>
    </Column>
    <Column large={4} className='customColumnClass'>
      <p>4 large</p>
    </Column>
    <Column large={4} className='customColumnClass'>
      <p>4 large</p>
    </Column>
  </Row>
  <br />
  <strong>Set any combination of small, medium, and large to create more complex responsive
  layouts between various screen sizes.</strong>
  <Row>
    <Column medium={6} large={4} className='customColumnClass'>
      <p>6 medium, 4 large</p>
    </Column>
    <Column medium={3} large={4} className='customColumnClass'>
      <p>3 medium, 4 large</p>
    </Column>
    <Column medium={3} large={4} className='customColumnClass'>
      <p>3 medium, 4 large</p>
    </Column>
  </Row>
  <br />
  <Row>
    <Column small={8} medium={5} large={4} className='customColumnClass'>
      <p>8 small, 5 medium, 4 large</p>
    </Column>
    <Column small={4} medium={2} large={3} className='customColumnClass'>
      <p>4 small, 2 medium, 3 large</p>
    </Column>
    <Column small={12} medium={5} className='customColumnClass'>
      <p>12 small, 5 medium (5 large automatically)</p>
    </Column>
  </Row>
</div>
```

### Offset Column

Typically, the column values within each of your rows will add up to 12 (e.g. 6 + 6 or 4 + 4 + 4). If your layout instead includes 'missing' columns, you may use offsets to nudge columns into position while having blank space for 'missing' columns.

```jsx
<div>
  <Row className='customRowClass'>
    <Column medium={4} print={4} className='customColumnClass'>
      <p>4 medium</p>
    </Column>
    <Column medium={4} print={4} offset={{medium: 4, print: 4}} className='customColumnClass'>
      <p>4 medium offset by 4</p>
    </Column>
  </Row>
  <br />
  <Row className='customRowClass'>
    <Column medium={8} offset={{medium: 2, large: 0}} large={12} className='customColumnClass'>
      <p>8 medium offset by 2 medium, 12 large offset by 0 large</p>
    </Column>
  </Row>
</div>
```

### Incomplete Row

Typically, the column values within each of your rows will add up to 12 (e.g. 6 + 6 or 4 + 4 + 4). If your layout instead includes white space ('missing' columns) on the right hand side of your row, use end on the last column to signify that you want it to sit adjacent to the other columns and that the rest of the row should remain empty.

```jsx
<div>
  <Row className='customRowClass'>
    <Column small={5} className='customColumnClass'>
      <p>5 small</p>
    </Column>
    <Column small={5} className='customColumnClass'>
      <p>5 small (without end it is automatically pushed to the right of the row)</p>
    </Column>
  </Row>
  <br />
  <Row className='customRowClass'>
    <Column small={5} className='customColumnClass'>
      <p>5 small</p>
    </Column>
    <Column small={5} className='customColumnClass' end>
      <p>5 small as end</p>
    </Column>
  </Row>
</div>
```
