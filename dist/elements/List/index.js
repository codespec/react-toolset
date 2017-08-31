function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from './style.css';

var classNames = cx.bind(style);

var List = function List(_ref) {
  var type = _ref.type,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ['type', 'className', 'children']);

  if (type === 'instruction') {
    return React.createElement(
      'ol',
      Object.assign({ className: classNames('List', 'List-' + type, className) }, props),
      children
    );
  }
  return React.createElement(
    'ul',
    Object.assign({ className: classNames('List', 'List-' + type, className) }, props),
    children
  );
};

List.propTypes = {
  type: PropTypes.oneOf(['vertical', 'instruction', 'bullet', 'horizontal', 'pipe']),
  className: PropTypes.string,
  children: PropTypes.node
};

List.defaultProps = {
  type: 'vertical',
  children: React.createElement('div', null)
};

export default List;