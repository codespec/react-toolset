function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import Icon from '../../icons/Icon';
import style from './style.css';

var classNames = cx.bind(style);

var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      size = _ref.size,
      type = _ref.type,
      isChecked = _ref.isChecked,
      isDisabled = _ref.isDisabled,
      className = _ref.className,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, ['id', 'size', 'type', 'isChecked', 'isDisabled', 'className', 'onChange']);

  var labelClass = classNames('Checkbox',
  /* eslint-disable quote-props */
  { 'Checkbox--disabled': isDisabled, 'Checkbox--checked': isChecked },
  /* eslint-enable quote-props */
  className.root);

  var iconSizeMap = {
    small: 14,
    medium: 20,
    large: 32,
    xlarge: 45
  };

  var iconProps = {
    name: 'GoCheck',
    type: 'githubOcticons',
    size: iconSizeMap[size]
  };
  if (type === 'dark') iconProps.color = '#fff';

  return React.createElement(
    'label',
    { htmlFor: id, className: labelClass },
    React.createElement('input', {
      className: classNames('Checkbox__native'),
      type: 'checkbox',
      id: id,
      checked: isChecked,
      onChange: onChange,
      disabled: isDisabled
    }),
    React.createElement(
      'span',
      { className: classNames('Checkbox__box', _defineProperty({
          'Checkbox__box--checked': isChecked && type !== 'dark',
          'Checkbox__box--checked--disabled': isChecked && isDisabled,
          'Checkbox__box--checked-dark': isChecked && type === 'dark',
          'Checkbox__box--disabled': isDisabled
        }, 'Checkbox__box--' + size, true), className.box) },
      isChecked && React.createElement(
        'span',
        { className: classNames('Checkbox__checkmark', _defineProperty({}, 'Checkbox__checkmark--' + size, true)) },
        React.createElement(Icon, iconProps)
      )
    ),
    React.createElement(
      'span',
      { className: classNames('Checkbox__label', _defineProperty({
          'Checkbox__label--disabled': isDisabled
        }, 'Checkbox__label--' + size, true), className.labelText) },
      props.children
    )
  );
};

Checkbox.propTypes = {
  /** Value for `htmlFor` of label and `id` of input attribute for accessibility  */
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  /** Type of checkbox style */
  type: PropTypes.oneOf(['light', 'dark']),
  /** Checked status of checkbox */
  isChecked: PropTypes.bool,
  /** Disabled status of checkbox */
  isDisabled: PropTypes.bool,
  /** Customizing style for checkbox element */
  className: PropTypes.shape({
    /** Additional class on root element */
    root: PropTypes.string,
    /** Additional class on square box element */
    box: PropTypes.string,
    /** Additional class on checkbox label text element */
    labelText: PropTypes.string
  }),
  /** Input change event handler */
  onChange: PropTypes.func,
  children: PropTypes.node
};

Checkbox.defaultProps = {
  size: 'small',
  type: 'light',
  isChecked: false,
  isDisabled: false,
  className: {}
};

export default Checkbox;