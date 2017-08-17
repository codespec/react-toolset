import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from '../style.scss'
const cls = cx.bind(style)

const Column = ({className, onClick, children, ...props}) => {
  const ColumnSizes = [
    'small',
    'medium',
    'large',
    'print'
  ]

  const columnClasses = [cls('column'), className]

  ColumnSizes.forEach((size) => {
    if (props[size]) {
      columnClasses.push(cls(`${size}-${props[size]}`))
    }
    if (props.offset && (typeof props.offset[size] !== 'undefined')) {
      columnClasses.push(cls(`${size}-offset-${props.offset[size]}`))
    }
    if (props.push && (typeof props.push[size] !== 'undefined')) {
      columnClasses.push(cls(`${size}-push-${props.push[size]}`))
    }
    if (props.pull && (typeof props.pull[size] !== 'undefined')) {
      columnClasses.push(cls(`${size}-pull-${props.pull[size]}`))
    }
    if (props.end) {
      columnClasses.push(cls('end'))
    }
  })

  return (
    <div className={cls(columnClasses.join(' '))} onClick={onClick}>
      {children}
    </div>
  )
}

/* eslint-disable react/no-unused-prop-types */
Column.propTypes = {
  /** Addtional classes on root of `Column` component */
  className: PropTypes.string,
  /** Number of columns when the browser width is up to 320px */
  small: PropTypes.number,
  /** Number of columns when the browser width is up to 768px */
  medium: PropTypes.number,
  /** Number of columns when the browser width is greater than 768px */
  large: PropTypes.number,
  /** A mapping of column offsets on various screen sizes. "Offset"ing a column adds space to the left of the column */
  offset: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** A mapping of push columns to right */
  push: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** A mapping of pull columns to left */
  pull: PropTypes.shape({
    small: PropTypes.number,
    medium: PropTypes.number,
    large: PropTypes.number,
    print: PropTypes.number
  }),
  /** Override last column's float-right behavior for incomplete row */
  end: PropTypes.bool,
  /** Mouse click event handler */
  onClick: PropTypes.func,
  children: PropTypes.node
}
/* eslint-enable react/no-unused-prop-types */

export default Column
