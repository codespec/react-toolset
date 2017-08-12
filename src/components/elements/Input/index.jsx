import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import { form as formCls } from '../../../styles'
const classNames = cx.bind(formCls)

const Input = ({id, label, className, cls, ...props}) => (
  <div className={classNames('form-fields-container', className)}>
    {label && (<label htmlFor={id} className={classNames('label', cls.label)}>
      {label}
    </label>)}
    <input
      id={id}
      className={classNames('input', cls.input)}
      {...props}
      ref={(element) => { this.input = element }} />
  </div>
)

Input.propTypes = {
  /** Input id to be used in lable accessibility */
  id: PropTypes.string.isRequired,
  /** String for placeholder in input */
  placeholder: PropTypes.string,
  /** Add lable string above the input */
  label: PropTypes.string,
  /** Additional class to the root element */
  className: PropTypes.string,
  /** Customizing style for lable and input elements */
  cls: PropTypes.shape({
    /** Style for lable element */
    label: PropTypes.string,
    /** Style for input element */
    input: PropTypes.string
  })
}

Input.defaultProps = {
  cls: {}
}

export default Input
