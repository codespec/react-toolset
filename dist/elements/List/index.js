import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.css'

const classNames = cx.bind(style)

const List = ({ type, className, children, ...props }) => {
  if (type === 'instruction') {
    return (
      React.createElement("ol", React.__spread({className: classNames('List', `List-${type}`, className)},  props), 
        children
      )
    )
  }
  return (
    React.createElement("ul", React.__spread({className: classNames('List', `List-${type}`, className)},  props), 
      children
    )
  )
}

List.propTypes = {
  type: PropTypes.oneOf(['vertical', 'instruction', 'bullet', 'horizontal', 'pipe']),
  className: PropTypes.string,
  children: PropTypes.node,
}

List.defaultProps = {
  type: 'vertical',
  children: React.createElement("div", null),
}

export default List
