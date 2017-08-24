import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from '../style.scss'

const classNames = cx.bind(style)

const Row = (props) => {
  const RowSizes = [
    'small',
    'medium',
    'large',
  ]

  const rowClasses = [classNames('row'), props.className]

  if (props.collapse) {
    if (props.collapse === true) {
      rowClasses.push(classNames('collapse'))
    } else {
      RowSizes.forEach((size) => {
        if (props.collapse[size]) {
          rowClasses.push(classNames(`${size}-collapse`))
        }
      })
    }
  }

  if (props.uncollapse) {
    RowSizes.forEach((size) => {
      if (props.uncollapse[size]) {
        rowClasses.push(classNames(`${size}-uncollapse`))
      }
    })
  }

  if (props.className) {
    rowClasses.push(props.className)
  }

  return (
    <div className={classNames(rowClasses.join(' '))} onClick={props.onClick}>
      {props.children}
    </div>
  )
}

Row.propTypes = {
  /** A mapping of screen sizes that should remove the gutter between columns */
  collapse: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      small: PropTypes.bool,
      medium: PropTypes.bool,
      large: PropTypes.bool,
    }),
  ]),
  /** A mapping of screen sizes that should force the gutter to appear between columns */
  uncollapse: PropTypes.shape({
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
  }),
  children: PropTypes.node,
  /** Addtional classes to the root of `Row` component */
  className: PropTypes.string,
  /** Mouse click event handler */
  onClick: PropTypes.func,
}

export default Row
