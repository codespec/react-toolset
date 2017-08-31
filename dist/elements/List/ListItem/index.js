import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from '../style.css';

var classNames = cx.bind(style);

var ListItem = function ListItem(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement(
    'li',
    { className: classNames(className) },
    children
  );
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

ListItem.defaultProps = {
  children: React.createElement('div', null)
};

export default ListItem;