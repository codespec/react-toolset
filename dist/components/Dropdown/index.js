var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import Icon from '../../icons/Icon';
import Option from './Option';
import Divider from './Divider';
import style from './style.css';

var classNames = cx.bind(style);

var Dropdown = function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    _classCallCheck(this, Dropdown);

    var _this = _possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));

    _this.onFocus = function (e) {
      clearTimeout(_this.blurTimer);
      _this.setState({ isFocused: true });
      _this.props.onFocus(e);
    };

    _this.getLastMouseDownEvent = function (e) {
      _this.setState({ lastMouseDownEvent: e || {} });
    };

    _this.state = {
      current: -1,
      isFocused: false,
      isOpened: false,
      length: _this.getItems(props.children).length,
      lastMouseDownEvent: {}
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener('mousedown', this.getLastMouseDownEvent);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var length = this.getItems(nextProps.children).length;
      this.setState({
        current: Math.max(-1, Math.min(this.state.current, length - 1)),
        length: length
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (typeof window !== 'undefined' && window.removeEventListener) {
        window.removeEventListener('mousedown', this.getLastMouseDownEvent);
      }
    }
  }, {
    key: 'getItems',
    value: function getItems(children) {
      return Children.toArray(children).filter(function (child) {
        return child.type === Option;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      /* eslint-disable */
      var _props = this.props,
          className = _props.className,
          maxHeight = _props.maxHeight,
          type = _props.type,
          icon = _props.icon,
          hasLabel = _props.hasLabel,
          children = _props.children;
      var _state = this.state,
          current = _state.current,
          isOpen = _state.isOpen;
      /* eslint-enable */

      return React.createElement(
        'div',
        {
          tabIndex: '0',
          className: classNames(className.root, isOpen && 'Dropdown-open'),
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onMouseOver: this.onMouseOver,
          onMouseOut: this.onMouseOut,
          onClick: this.onClock },
        React.createElement(
          'span',
          {
            className: classNames('Dropdown__button', 'Button-' + type, 'Dropdown__button-' + type, className.menuButton, isOpen && 'Dropdown-open', isOpen && className.isOpen, hasLabel && 'Dropdown-has-label') },
          React.createElement(
            'span',
            { className: classNames('Dropdown__label') },
            Children.toArray(children).filter(function (child) {
              return child.type !== Option && child.type !== Divider;
            })
          ),
          React.createElement(Icon, {
            type: icon.type,
            name: icon.name,
            size: 18,
            className: classNames('Dropdown__icon', className.icon) }),
          children
        )
      );
    }
  }]);

  return Dropdown;
}(Component);

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.shape({
    root: PropTypes.string,
    menuButton: PropTypes.string,
    isOpen: PropTypes.string,
    icon: PropTypes.string
  }),
  maxHeight: PropTypes.number,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  openOnMouseOver: PropTypes.bool,
  type: PropTypes.oneOf(['light', 'dark']),
  icon: PropTypes.shape({
    type: PropTypes.string,
    name: PropTypes.string
  }),
  hasLabel: PropTypes.bool
};
Dropdown.defaultProps = {
  className: {},
  maxHeight: 250,
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  type: 'light',
  openOnMouseOver: false,
  icon: {
    type: 'materialDesign',
    name: 'MdArrowDropDown'
  },
  hasLabel: true
};
export default Dropdown;