import React from 'react';
import PropTypes from 'prop-types';
import './PaginationLink.css';
import Icon from '../../icons/Icon';

var PaginationLink = function PaginationLink(props) {
  var label = props.label,
      isClickable = props.isClickable,
      isPageBreak = props.isPageBreak,
      onClick = props.onClick;

  var content = isPageBreak ? React.createElement(Icon, { type: 'materialDesign', name: 'MdKeyboardControl', size: 15 }) : label;
  var clickable = !isPageBreak && isClickable;

  var onLabelClick = function onLabelClick() {
    onClick(label);
  };

  return React.createElement(
    'li',
    { className: 'PaginationLink' },
    clickable ? React.createElement(
      'a',
      { onClick: onLabelClick },
      content
    ) : React.createElement(
      'span',
      null,
      content
    )
  );
};

PaginationLink.propTypes = {
  label: PropTypes.number,
  isClickable: PropTypes.bool,
  isPageBreak: PropTypes.bool,
  onClick: PropTypes.func
};

export default PaginationLink;