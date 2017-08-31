var _this = this;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import { form as formCls } from '../../styles';

var classNames = cx.bind(formCls);

var Input = function Input(_ref) {
  var id = _ref.id,
      label = _ref.label,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['id', 'label', 'className']);

  return React.createElement(
    'div',
    { className: classNames('form-fields-container', className.root) },
    label && React.createElement(
      'label',
      { htmlFor: id, className: classNames('label', className.label) },
      label
    ),
    React.createElement('input', Object.assign({
      id: id,
      className: classNames('input', className.input)
    }, props, {
      ref: function ref(element) {
        _this.input = element;
      } }))
  );
};

Input.propTypes = {
  /** Input id to be used in lable accessibility */
  id: PropTypes.string.isRequired,
  /** String for placeholder in input */
  placeholder: PropTypes.string,
  /** Add lable string above the input */
  label: PropTypes.string,
  /** Customizing style for lable and input elements */
  className: PropTypes.shape({
    /** Additional class to the root element */
    root: PropTypes.string,
    /** Style for lable element */
    label: PropTypes.string,
    /** Style for input element */
    input: PropTypes.string
  })
};

Input.defaultProps = {
  className: {}
};

export default Input;