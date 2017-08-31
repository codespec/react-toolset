function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import * as FontAwesome from 'react-icons/lib/fa';
import * as MaterialDesign from 'react-icons/lib/md';
import * as Typicons from 'react-icons/lib/ti';
import * as GithubOcticons from 'react-icons/lib/go';
import cx from 'classnames/bind';
import style from './style.css';

var classNames = cx.bind(style);

var Icon = function Icon(_ref) {
  var type = _ref.type,
      name = _ref.name,
      size = _ref.size,
      color = _ref.color,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ['type', 'name', 'size', 'color', 'className']);

  var fontLibMap = {
    fontAwesome: FontAwesome,
    materialDesign: MaterialDesign,
    typicons: Typicons,
    githubOcticons: GithubOcticons
  };

  return React.createElement(fontLibMap[type][name], Object.assign({
    size: size,
    color: color,
    className: classNames(className)
  }, props));
};

Icon.propTypes = {
  /** Which icon sets from react-icons */
  type: PropTypes.oneOf(['fontAwesome', 'materialDesign', 'typicons', 'githubOcticons']),
  /** Icon name from the icon set */
  name: PropTypes.string.isRequired,
  /** Size of icon with pixel unit */
  size: PropTypes.number,
  /** Hex code of icon color */
  color: PropTypes.string,
  className: PropTypes.string
};

Icon.defaultProps = {
  type: 'fontAwesome',
  name: 'FaCheck',
  size: 18,
  color: '#00142b'
};

export default Icon;