### Usage

```jsx static
import { Column, Row } from '@codespec/react-toolset'
```

### Description

A grid can be used to layout a page in the typical CSS 12 column grid format. The grid consists of 2 React Components: `<Row>` and `<Column>`.
A `<Column>` must always be a child of a `<Row>`, and a `<Row>`'s immediate children may only be `<Column>`s.
