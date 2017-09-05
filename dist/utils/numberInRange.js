var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

export default function numberInRange(min, max) {
  return function (props, propName, componentName) {
    var propValue = props[propName];
    var typeOfPropValue = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);

    if (typeOfPropValue !== 'number') {
      return new Error('Ivalid prop \'' + propName + '\' of type \'' + typeOfPropValue + '\' supplied to \'' + componentName + '\',\n        expected \'number\'.');
    }

    if (propValue < min || propValue > max) {
      return new Error('Prop \'' + propName + '\' supplied to \'' + componentName + '\' should be between ' + min + ' and ' + max + '.');
    }

    return null;
  };
}