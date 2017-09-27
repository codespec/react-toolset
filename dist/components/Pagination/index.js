var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames/bind';
import style from './style.css';
import PaginationLink from './PaginationLink';
import numberInRange from '../../utils/numberInRange';
import Icon from '../../icons/Icon';

var classNames = cx.bind(style);

var Pagination = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination(props) {
    _classCallCheck(this, Pagination);

    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    var currentPage = props.currentPage,
        itemsPerPage = props.itemsPerPage,
        totalItems = props.totalItems,
        maxPaginationSize = props.maxPaginationSize;

    _this.state = {
      currentPage: currentPage,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      maxPaginationSize: maxPaginationSize
    };
    return _this;
  }

  _createClass(Pagination, [{
    key: 'onClick',
    value: function onClick(page) {
      var currentPage = page;

      currentPage = Math.max(1, currentPage);
      currentPage = Math.min(this.state.totalPages, currentPage);
      this.changePage(currentPage);
      this.props.onChange(currentPage);
    }
  }, {
    key: 'getCaretIcon',
    value: function getCaretIcon(side, isDisable) {
      var iconName = side.toLowerCase() === 'left' ? 'GoTriangleLeft' : 'GoTriangleRight';
      var iconType = 'githubOcticons';
      var iconSize = 16;
      var color = isDisable ? '#9999a5' : '#0098ee';

      if (this.props.caretIcon) {
        var _props$caretIcon = this.props.caretIcon,
            type = _props$caretIcon.type,
            left = _props$caretIcon.left,
            right = _props$caretIcon.right,
            size = _props$caretIcon.size;

        iconName = side.toLowerCase() === 'left' ? left : right;
        iconType = type || iconType;
        iconSize = size || iconSize;
      }

      return React.createElement(Icon, { type: iconType, name: iconName, size: iconSize, color: color });
    }
  }, {
    key: 'changePage',
    value: function changePage(page) {
      this.setState({
        currentPage: page
      });
    }

    // This function will return the pagination list

  }, {
    key: 'calculateSteps',
    value: function calculateSteps() {
      var steps = [];
      var _state = this.state,
          currentPage = _state.currentPage,
          totalPages = _state.totalPages,
          maxPaginationSize = _state.maxPaginationSize;

      var pivot = Math.floor(maxPaginationSize / 2);
      var leftLength = Math.min(pivot, currentPage - 1);
      var rightLength = maxPaginationSize - leftLength - 1;

      if (totalPages - currentPage < pivot) {
        rightLength = totalPages - currentPage;
        leftLength = maxPaginationSize - rightLength - 1;
      }

      if (maxPaginationSize >= totalPages) {
        for (var i = 0; i < totalPages; i += 1) {
          steps.push(i + 1);
        }
      } else {
        steps = this.calculatePreviousSteps(leftLength, currentPage).concat(currentPage, this.calculateFollowingSteps(rightLength, currentPage, totalPages));
      }
      return steps;
    }
  }, {
    key: 'calculatePreviousSteps',
    value: function calculatePreviousSteps(leftLength, currentPage) {
      var res = [];

      if (currentPage - 1 > leftLength) {
        for (var i = 0; i < leftLength; i += 1) {
          if (i === leftLength - 1) {
            res.unshift(1);
          } else if (i === leftLength - 2) {
            res.unshift('ellipsis');
          } else {
            res.unshift(currentPage - i - 1);
          }
        }
      } else {
        for (var _i = 0; _i < leftLength; _i += 1) {
          res.push(_i + 1);
        }
      }
      return res;
    }
  }, {
    key: 'calculateFollowingSteps',
    value: function calculateFollowingSteps(rightLength, currentPage, totalPages) {
      var res = [];

      if (totalPages - currentPage > rightLength) {
        for (var i = 0; i < rightLength; i += 1) {
          if (i === rightLength - 1) {
            res.push(totalPages);
          } else if (i === rightLength - 2) {
            res.push('ellipsis');
          } else {
            res.push(currentPage + i + 1);
          }
        }
      } else {
        for (var _i2 = 0; _i2 < rightLength; _i2 += 1) {
          res.push(currentPage + _i2 + 1);
        }
      }
      return res;
    }
  }, {
    key: 'renderPagination',
    value: function renderPagination() {
      var _this2 = this;

      var _state2 = this.state,
          currentPage = _state2.currentPage,
          totalPages = _state2.totalPages;

      if (currentPage < 1) {
        this.changePage(1);
      } else if (currentPage > totalPages) {
        this.changePage(totalPages);
      }

      var paginations = [];
      var steps = this.calculateSteps();

      for (var i = 0; i < steps.length; i += 1) {
        var label = steps[i];
        var isClickable = true;

        if (currentPage === steps[i]) {
          isClickable = false;
        }
        if (label === 'ellipsis') {
          paginations.push(React.createElement(PaginationLink, { isPageBreak: true, key: i }));
        } else {
          paginations.push(React.createElement(PaginationLink, {
            label: label,
            isClickable: isClickable,
            onClick: function onClick(page) {
              _this2.onClick(page);
            },
            key: i }));
        }
      }

      return paginations;
    }
  }, {
    key: 'renderLeftCaret',
    value: function renderLeftCaret() {
      var _this3 = this;

      var isDisabled = this.state.currentPage <= 1;
      var iconElement = this.getCaretIcon('left', isDisabled);

      return React.createElement(
        'li',
        { className: classNames('Pagination__caret', 'Pagination__caret--left') },
        isDisabled ? React.createElement(
          'span',
          null,
          iconElement
        ) : React.createElement(
          'a',
          { onClick: function onClick() {
              _this3.onClick(_this3.state.currentPage - 1);
            } },
          iconElement
        )
      );
    }
  }, {
    key: 'renderRightCaret',
    value: function renderRightCaret() {
      var _this4 = this;

      var isDisabled = this.state.currentPage >= this.state.totalPages;
      var iconElement = this.getCaretIcon('right', isDisabled);

      return React.createElement(
        'li',
        { className: classNames('Pagination__caret', 'Pagination__caret--right') },
        isDisabled ? React.createElement(
          'span',
          null,
          iconElement
        ) : React.createElement(
          'a',
          { onClick: function onClick() {
              _this4.onClick(_this4.state.currentPage + 1);
            } },
          iconElement
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: classNames('Pagination', 'Pagination--' + this.props.fontSize) },
        React.createElement(
          'ul',
          { className: classNames('Pagination__list') },
          this.renderLeftCaret(),
          this.renderPagination(),
          this.renderRightCaret()
        )
      );
    }
  }]);

  return Pagination;
}(React.Component);

Pagination.propTypes = {
  /** Current selected pagination number */
  currentPage: PropTypes.number,
  /** Specify how manys items showed in one page */
  itemsPerPage: PropTypes.number.isRequired,
  /** Specify the total items */
  totalItems: PropTypes.number.isRequired,
  /** Number of elements in pagination component */
  maxPaginationSize: numberInRange(5, 20),
  /** Action to be performed on page change */
  onChange: PropTypes.func.isRequired,
  /** Set font size to the pagination */
  fontSize: PropTypes.string,
  /** Custom caret icon for pagination */
  caretIcon: PropTypes.shape({
    type: PropTypes.string,
    left: PropTypes.string,
    right: PropTypes.string,
    size: PropTypes.number
  })
};
Pagination.defaultProps = {
  currentPage: 1,
  maxPaginationSize: 7,
  fontSize: 'medium'
};


export default Pagination;