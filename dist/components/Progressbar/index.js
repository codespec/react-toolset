function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from './style.css';
import numberInRange from '../../utils/numberInRange';

var classNames = cx.bind(style);

var Progressbar = function Progressbar(_ref) {
  var _ref$percentage = _ref.percentage,
      percentage = _ref$percentage === undefined ? 0 : _ref$percentage,
      props = _objectWithoutProperties(_ref, ['percentage']);

  var showPercentageNum = props.showPercentageNum,
      className = props.className,
      isFlat = props.isFlat,
      color = props.color,
      size = props.size,
      rest = _objectWithoutProperties(props, ['showPercentageNum', 'className', 'isFlat', 'color', 'size']);

  var progressBarWidth = percentage > 100 ? 100 : percentage;
  var percentageLabel = showPercentageNum ? percentage + '%' : null;

  return React.createElement(
    'div',
    Object.assign({ className: classNames('Progressbar', { 'Progressbar--flat': isFlat }) }, rest),
    React.createElement(
      'div',
      {
        style: { width: progressBarWidth + '%' },
        className: classNames('Progressbar__progress', { 'Progressbar__progress--flat': isFlat }, 'Progressbar__progress--' + color, 'Progressbar__progress--' + size, className) },
      percentageLabel
    )
  );
};

Progressbar.propTypes = {
  /** Custom class to percentage. Valid range is \[0, 100\] */
  percentage: numberInRange(0, 100),
  /** Set showing percentage text in progressbar */
  showPercentageNum: PropTypes.bool,
  /** Set flat corner to progressbar */
  isFlat: PropTypes.bool,
  /** Set predefined colors to progressbar */
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
  /** Set predefined sizes to progressbar */
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  className: PropTypes.string
};

Progressbar.defaultProps = {
  percentage: 0,
  showPercentageNum: false,
  isFlat: false,
  color: 'primary',
  size: 'normal'
};

export default Progressbar;