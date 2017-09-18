### Basic Pagination
```jsx
  <Pagination currentPage={9} itemsPerPage={10} totalItems={124} onChange={(page) => {}} />
```

### Pagination with different maximum pagination size
```jsx
<div>
  <Pagination currentPage={5} itemsPerPage={10} totalItems={114} maxPaginationSize={6} onChange={(page) => {}} />
  <Pagination currentPage={1} itemsPerPage={10} totalItems={114} maxPaginationSize={8} onChange={(page) => {}} />
  <Pagination currentPage={12} itemsPerPage={10} totalItems={114} maxPaginationSize={9} onChange={(page) => {}} />
</div>
```

### Pagination with large font size
```jsx
  <Pagination currentPage={2} itemsPerPage={10} totalItems={114} fontSize="large" onChange={(page) => {}} />
```

### Pagination with custom caret icon
```jsx
  const caret = {
    type: "materialDesign",
    left: "MdKeyboardArrowLeft",
    right: "MdKeyboardArrowRight",
    size: 20
  };

  <Pagination currentPage={2} itemsPerPage={10} totalItems={114} caretIcon={caret} onChange={(page) => {}} />
```
