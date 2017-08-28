import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'

const classNames = cx.bind(style)

const List = ({ type, className, children, ...props }) => {
  if (type === 'instruction') {
    return (
      <ol className={classNames('List', `List-${type}`, className)} {...props}>
        {children}
      </ol>
    )
  }
  return (
    <ul className={classNames('List', `List-${type}`, className)} {...props}>
      {children}
    </ul>
  )
}

List.propTypes = {
  type: PropTypes.oneOf(['vertical', 'instruction', 'bullet', 'horizontal', 'pipe']),
  className: PropTypes.string,
  children: PropTypes.node,
}

List.defaultProps = {
  type: 'vertical',
  children: <div />,
}

export default List
