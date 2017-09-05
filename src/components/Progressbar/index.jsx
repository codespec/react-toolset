import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'
import numberInRange from '../../utils/numberInRange'

const classNames = cx.bind(style)

const Progressbar = ({ percentage = 0, ...props }) => {
  const { showPercentageNum, className, isFlat, color, size, ...rest } = props
  const progressBarWidth = percentage > 100 ? 100 : percentage
  const percentageLabel = showPercentageNum ? `${percentage}%` : null

  return (
    <div className={classNames('Progressbar', { 'Progressbar--flat': isFlat })} {...rest}>
      <div
        style={{ width: `${progressBarWidth}%` }}
        className={classNames(
          'Progressbar__progress',
          { 'Progressbar__progress--flat': isFlat },
          `Progressbar__progress--${color}`,
          `Progressbar__progress--${size}`,
          className)}>
        {percentageLabel}
      </div>
    </div>
  )
}

Progressbar.propTypes = {
  /** Custom class to percentage. Valid range is \[0, 100\] */
  percentage: numberInRange(0, 100),
  /** Set showing percentage text in progressbar */
  showPercentageNum: PropTypes.bool,
  /** Set flat corner to progressbar */
  isFlat: PropTypes.bool,
  /** Set predefined colors to progressbar */
  color: PropTypes.oneOf(['primary', 'success', 'warning', 'error']),
  /** Set predefined sizes to progressbar */
  size: PropTypes.oneOf(['large', 'normal', 'small']),
  className: PropTypes.string,
}

Progressbar.defaultProps = {
  percentage: 0,
  showPercentageNum: false,
  isFlat: false,
  color: 'primary',
  size: 'normal',
}

export default Progressbar
