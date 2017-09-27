import React from 'react'
import PropTypes from 'prop-types'
import './PaginationLink.scss'
import Icon from '../../icons/Icon'

const PaginationLink = (props) => {
  const { label, isClickable, isPageBreak, onClick } = props;
  const content = isPageBreak ?
    <Icon type="materialDesign" name="MdKeyboardControl" size={15} /> : label
  const clickable = !isPageBreak && isClickable

  const onLabelClick = () => {
    onClick(label);
  }

  return (
    <li className="PaginationLink">
      { clickable
        ? <a onClick={onLabelClick}>{content}</a>
        : <span>{content}</span> }
    </li>
  )
}

PaginationLink.propTypes = {
  label: PropTypes.number,
  isClickable: PropTypes.bool,
  isPageBreak: PropTypes.bool,
  onClick: PropTypes.func,
}

export default PaginationLink
