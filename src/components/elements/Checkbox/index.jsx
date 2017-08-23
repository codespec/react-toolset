import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import Icon from '../../icons/Icon'
import style from './style.scss'

const classNames = cx.bind(style)

const Checkbox = ({
  id,
  size,
  type,
  isChecked,
  isDisabled,
  cls,
  onChange,
  ...props
}) => {
  const labelClass = classNames(
    'Checkbox',
    /* eslint-disable quote-props */
    { 'Checkbox--disabled': isDisabled, 'Checkbox--checked': isChecked },
    /* eslint-enable quote-props */
    cls.root,
  )

  const iconSizeMap = {
    small: 14,
    medium: 20,
    large: 32,
    xlarge: 45,
  }

  const iconProps = {
    name: 'GoCheck',
    type: 'githubOcticons',
    size: iconSizeMap[size],
  }
  if (type === 'primary') iconProps.color = '#fff'

  return (
    <label htmlFor={id} className={labelClass}>
      <input
        className={classNames('Checkbox__native')}
        type="checkbox"
        id={id}
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <span className={classNames(
        'Checkbox__box',
        {
          'Checkbox__box--checked': isChecked && type !== 'primary',
          'Checkbox__box--checked--disabled': isChecked && isDisabled,
          'Checkbox__box--checked-primary': isChecked && type === 'primary',
          'Checkbox__box--disabled': isDisabled,
          [`Checkbox__box--${size}`]: true,
        },
        cls.box
      )}>
        { isChecked && <span className={classNames(
          'Checkbox__checkmark',
          {
            [`Checkbox__checkmark--${size}`]: true,
          }
        )} >
          <Icon {...iconProps} />
        </span>}
      </span>
      <span className={classNames(
        'Checkbox__label',
        {
          'Checkbox__label--disabled': isDisabled,
          [`Checkbox__label--${size}`]: true,
        },
        cls.labelText,
      )}>
        {props.children}
      </span>
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  type: PropTypes.oneOf(['default', 'primary']),
  isChecked: PropTypes.bool,
  isDisabled: PropTypes.bool,
  cls: PropTypes.shape({
    root: PropTypes.string,
    box: PropTypes.string,
    labelText: PropTypes.string,
  }),
  onChange: PropTypes.func,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  size: 'small',
  type: 'default',
  isChecked: false,
  isDisabled: false,
  cls: {},
}

export default Checkbox
