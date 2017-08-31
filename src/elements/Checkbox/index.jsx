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
  className,
  onChange,
  ...props
}) => {
  const labelClass = classNames(
    'Checkbox',
    /* eslint-disable quote-props */
    { 'Checkbox--disabled': isDisabled, 'Checkbox--checked': isChecked },
    /* eslint-enable quote-props */
    className.root
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
  if (type === 'dark') iconProps.color = '#fff'

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
          'Checkbox__box--checked': isChecked && type !== 'dark',
          'Checkbox__box--checked--disabled': isChecked && isDisabled,
          'Checkbox__box--checked-dark': isChecked && type === 'dark',
          'Checkbox__box--disabled': isDisabled,
          [`Checkbox__box--${size}`]: true,
        },
        className.box
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
        className.labelText
      )}>
        {props.children}
      </span>
    </label>
  )
}

Checkbox.propTypes = {
  /** Value for `htmlFor` of label and `id` of input attribute for accessibility  */
  id: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  /** Type of checkbox style */
  type: PropTypes.oneOf(['light', 'dark']),
  /** Checked status of checkbox */
  isChecked: PropTypes.bool,
  /** Disabled status of checkbox */
  isDisabled: PropTypes.bool,
  /** Customizing style for checkbox element */
  className: PropTypes.shape({
    /** Additional class on root element */
    root: PropTypes.string,
    /** Additional class on square box element */
    box: PropTypes.string,
    /** Additional class on checkbox label text element */
    labelText: PropTypes.string,
  }),
  /** Input change event handler */
  onChange: PropTypes.func,
  children: PropTypes.node,
}

Checkbox.defaultProps = {
  size: 'small',
  type: 'light',
  isChecked: false,
  isDisabled: false,
  className: {},
}

export default Checkbox
