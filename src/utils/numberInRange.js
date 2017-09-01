export default function numberInRange (min, max) {
  return (props, propName, componentName) => {
    const propValue = props[propName];
    const typeOfPropValue = typeof propValue;

    if (typeOfPropValue !== 'number') {
      return new Error(`Ivalid prop '${propName}' of type '${typeOfPropValue}' supplied to '${componentName}',
        expected 'number'.`);
    }

    if (propValue < min || propValue > max) {
      return new Error(`Prop '${propName}' supplied to '${componentName}' should be between ${min} and ${max}.`);
    }

    return null;
  };
}
