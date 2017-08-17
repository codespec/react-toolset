### Basic Column

Many of the column properties accept a "size".  A "size" is always a number between 1 and 12 (inclusive)

```jsx
<div>
  <strong>1 row is divided by 12 columns basic. Please try decreasing browser width to see the how it looks like of below examples</strong>
  <Row className='customRowClass'>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
    <Column small={12} medium={6} large={1} className='customColumnClass'><p>1 large</p></Column>
  </Row>
  <br />
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

### Push/Pull Column

By using push and pull on your columns, you can reverse the placement of columns based on screen size. For example, if you want to show column A to the right of column B on desktop browser, and show column A above column B on mobile, you can achieve this by push/pull.

```jsx
<div>
  <strong>Simple push/pull for all display sizes (A, B indicates source order)</strong>
  <Row>
    <Column small={4} push={{small: 8}} className='customColumnClass'>
      <p>A (4 small, push 8)</p>
    </Column>
    <Column small={8} pull={{small: 4}} className='customColumnClass'>
      <p>B (8 small, pull 4)</p>
    </Column>
  </Row>
  <br />
  <strong>Simple push/pull for medium up (A, B indicates source order)</strong>
  <Row>
    <Column medium={4} print={4} push={{medium: 8, print: 8}} className='customColumnClass'>
      <p>A (12 small, 4 medium, push 8 medium)</p>
    </Column>
    <Column medium={8} print={8} pull={{medium: 4, print: 4}} className='customColumnClass'>
      <p>B (12 small, 8 medium, pull 4 medium)</p>
    </Column>
  </Row>
  <br />
  <strong>Complex layout involving nested grid and push/pull for large (A, B, C indicates source order)</strong>
  <Row className='customRowClass'>
    <Column large={8} push={{large: 4}} className='customColumnClass'>
      <Row className='customRowClass'>
        <Column large={6} push={{large: 6}} className='customColumnClass'>
          A (nested col pushed at large)
        </Column>
        <Column large={6} pull={{large: 6}} className='customColumnClass'>
          B (nested col pulled at large)
        </Column>
      </Row>
    </Column>
    <Column large={4} pull={{large: 8}} className='customColumnClass'>
      C (non-nested col pull at large)
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
