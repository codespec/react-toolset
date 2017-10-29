import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'

const classNames = cx.bind(style)

const Label = (props) => {
  const { htmlFor, required, children, ...rest } = props

  return (
    <label className={classNames('Label', { 'Label--isRequired': required })} htmlFor={htmlFor} {...rest}>
      {children}
    </label>
  )
}

Label.propTypes = {
  /** Set Label for other component */
  htmlFor: PropTypes.string,
  /** Specify whether it is required field */
  required: PropTypes.bool,
  /** Label name or sub-component attached to this label */
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  htmlFor: '',
  required: false,
}

export default Label
