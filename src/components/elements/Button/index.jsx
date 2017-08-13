import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import '../../../styles/bumblebee.scss'
import { button as buttonCls } from '../../../styles'
const cls = cx.bind(buttonCls)

const Button = ({role, size, tag, isStretched, isSelected, link, className, children, ...props}) => {
  const tagName = link ? 'a' : (tag || 'button')

  return React.createElement(tagName, {
    href: (link || null),
    className: cls('Button', `Button-${role}`, `Button-${size}`, { 'Button-is-stretched': isStretched }, { 'Button-is-selected': isSelected }, className),
    ...props
  }, children)
}

Button.propTypes = {
  role: PropTypes.oneOf(['primary', 'secondary', 'default']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  tag: PropTypes.oneOf(['button', 'div', 'a']),
  /** Whether the button takes up the full width of its container */
  isStretched: PropTypes.bool,
  /** Whether to apply a depressed styling to the button to make it look on or selected */
  isSelected: PropTypes.bool,
  /** Value of href to apply to the button if and `<a>` element is being used for the button */
  link: PropTypes.string,
  /** Name of extra class to apply to the root element */
  className: PropTypes.string,
  /** Button label. */
  children: PropTypes.node.isRequired
}

Button.defaultProps = {
  role: 'default',
  size: 'medium',
  tag: 'button',
  isStretched: false
}

export default Button
