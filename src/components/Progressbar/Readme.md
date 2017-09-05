### Usage

```jsx static
import { Progressbar } from '@codespec/react-toolset'
```

### Basic Progressbar
```jsx
<Progressbar percentage={8} />
```

### Progressbar With Percentage
```jsx
<Progressbar percentage={37} showPercentageNum={true} className="my-progress-bar" />
```

### Progressbar With Colors
```jsx
<div>
  <Progressbar percentage={30} showPercentageNum={true} color="success" />
  <br/>
  <Progressbar percentage={30} showPercentageNum={true} color="warning" />
  <br/>
  <Progressbar percentage={30} showPercentageNum={true} color="error" />
</div>
```

### Progressbar With Flat Corner
```jsx
<Progressbar percentage={45} showPercentageNum={true} isFlat={true} />
```

### Progressbar With Different Size
```jsx
<div>
  <Progressbar percentage={86} showPercentageNum={true} size="large"/>
  <br/>
  <Progressbar percentage={86} showPercentageNum={true}/>
  <br/>
  <Progressbar percentage={86} showPercentageNum={true} size="small"/>
</div>
```
