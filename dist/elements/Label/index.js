function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from './style.css';

var classNames = cx.bind(style);

var Label = function Label(props) {
  console.log(props);

  var labelTo = props.labelTo,
      required = props.required,
      children = props.children,
      rest = _objectWithoutProperties(props, ['labelTo', 'required', 'children']);

  return React.createElement(
    'label',
    Object.assign({ className: classNames('Label', { 'Label--isRequired': required }), htmlFor: labelTo }, rest),
    children
  );
};

Label.propTypes = {
  /** Set Label for attribute by component id */
  labelTo: PropTypes.string,
  /** Specify whether it is required field */
  required: PropTypes.bool,
  /** Label name or sub-component attached to this label */
  children: PropTypes.node.isRequired
};

Label.defaultProps = {
  labelTo: '',
  required: false
};

export default Label;