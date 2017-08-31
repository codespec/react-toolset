function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from '../style.css';

var classNames = cx.bind(style);

var Column = function Column(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['className', 'onClick', 'children']);

  var ColumnSizes = ['small', 'medium', 'large', 'print'];

  var columnClasses = [classNames('column'), className];

  ColumnSizes.forEach(function (size) {
    if (props[size]) {
      columnClasses.push(classNames(size + '-' + props[size]));
    }
    if (props.offset && typeof props.offset[size] !== 'undefined') {
      columnClasses.push(classNames(size + '-offset-' + props.offset[size]));
    }
    if (props.push && typeof props.push[size] !== 'undefined') {
      columnClasses.push(classNames(size + '-push-' + props.push[size]));
    }
    if (props.pull && typeof props.pull[size] !== 'undefined') {
      columnClasses.push(classNames(size + '-pull-' + props.pull[size]));
    }
    if (props.end) {
      columnClasses.push(classNames('end'));
    }
  });

  return React.createElement(
    'div',
    { className: classNames(columnClasses.join(' ')), onClick: onClick },
    children
  );
};

/* eslint-disable react/no-unused-prop-types */
Column.propTypes = {
  /** Addtional classes on root of `Column` component */
  className: PropTypes.string,
  /** Number of columns when the browser width is up to 320px */
  small: PropTypes.number,
  /** Number of columns when the browser width is up to 768px */
  medium: PropTypes.number,
  /** Number of columns when the browser width is greater than 768px */
  large: PropTypes.number,
  /* eslint-disable max-len */
  /** A mapping of column offsets on various screen sizes. "Offset"ing a column adds space to the left of the column */
  /* eslint-enable max-len */
  offset: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** A mapping of push columns to right */
  push: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** A mapping of pull columns to left */
  pull: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** Override last column's float-right behavior for incomplete row */
  end: PropTypes.bool,
  /** Mouse click event handler */
  onClick: PropTypes.func,
  children: PropTypes.node
  /* eslint-enable react/no-unused-prop-types */

};export default Column;