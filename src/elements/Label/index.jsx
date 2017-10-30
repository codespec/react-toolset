import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'

const classNames = cx.bind(style)

const Label = (props) => {
  console.log(props);
  const { labelTo, required, children, ...rest } = props

  return (
    <label className={classNames('Label', { 'Label--isRequired': required })} htmlFor={labelTo} {...rest}>
      {children}
    </label>
  )
}

Label.propTypes = {
  /** Set Label for attribute by component id */
  labelTo: PropTypes.string,
  /** Specify whether it is required field */
  required: PropTypes.bool,
  /** Label name or sub-component attached to this label */
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  labelTo: '',
  required: false,
}

export default Label
