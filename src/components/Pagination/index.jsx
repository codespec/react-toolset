import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from './style.scss'
import PaginationLink from './PaginationLink'
import numberInRange from '../../utils/numberInRange'
import Icon from '../../icons/Icon'

const classNames = cx.bind(style)

class Pagination extends React.Component {
  static propTypes = {
    /** Current selected pagination number */
    currentPage: PropTypes.number,
    /** Specify how manys items showed in one page */
    itemsPerPage: PropTypes.number.isRequired,
    /** Specify the total items */
    totalItems: PropTypes.number.isRequired,
    /** Number of elements in pagination component */
    maxPaginationSize: numberInRange(5, 20),
    /** Action to be performed on page change */
    onChange: PropTypes.func.isRequired,
    /** Set font size to the pagination */
    fontSize: PropTypes.string,
    /** Custom caret icon for pagination */
    caretIcon: PropTypes.shape({
      type: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      size: PropTypes.number,
    }),
  }

  static defaultProps = {
    currentPage: 1,
    maxPaginationSize: 7,
    fontSize: 'medium',
  }

  constructor (props) {
    super(props)

    const { currentPage, itemsPerPage, totalItems, maxPaginationSize } = props
    this.state = {
      currentPage,
      totalPages: Math.ceil(totalItems / itemsPerPage),
      maxPaginationSize,
    }
  }

  onClick (page) {
    let currentPage = page;

    currentPage = Math.max(1, currentPage)
    currentPage = Math.min(this.state.totalPages, currentPage)
    this.changePage(currentPage)
    this.props.onChange(currentPage)
  }

  getCaretIcon (side, isDisable) {
    let iconName = side.toLowerCase() === 'left' ?
      'GoTriangleLeft' : 'GoTriangleRight'
    let iconType = 'githubOcticons'
    let iconSize = 16
    const color = isDisable ? '#9999a5' : '#0098ee'

    if (this.props.caretIcon) {
      const { type, left, right, size } = this.props.caretIcon
      iconName = side.toLowerCase() === 'left' ?
        left : right
      iconType = type || iconType
      iconSize = size || iconSize
    }

    return (
      <Icon type={iconType} name={iconName} size={iconSize} color={color} />
    )
  }

  changePage (page) {
    this.setState({
      currentPage: page,
    })
  }

  // This function will return the pagination list
  calculateSteps () {
    let steps = [];
    const { currentPage, totalPages, maxPaginationSize } = this.state
    const pivot = Math.floor(maxPaginationSize / 2)
    let leftLength = Math.min(pivot, currentPage - 1)
    let rightLength = maxPaginationSize - leftLength - 1

    if ((totalPages - currentPage) < pivot) {
      rightLength = totalPages - currentPage
      leftLength = maxPaginationSize - rightLength - 1
    }

    if (maxPaginationSize >= totalPages) {
      for (let i = 0; i < totalPages; i += 1) {
        steps.push(i + 1)
      }
    } else {
      steps = this.calculatePreviousSteps(leftLength, currentPage)
        .concat(currentPage, this.calculateFollowingSteps(rightLength, currentPage, totalPages))
    }
    return steps
  }

  calculatePreviousSteps (leftLength, currentPage) {
    const res = []

    if ((currentPage - 1) > leftLength) {
      for (let i = 0; i < leftLength; i += 1) {
        if (i === leftLength - 1) {
          res.unshift(1)
        } else if (i === leftLength - 2) {
          res.unshift('ellipsis')
        } else {
          res.unshift(currentPage - i - 1)
        }
      }
    } else {
      for (let i = 0; i < leftLength; i += 1) {
        res.push(i + 1)
      }
    }
    return res;
  }

  calculateFollowingSteps (rightLength, currentPage, totalPages) {
    const res = []

    if ((totalPages - currentPage) > rightLength) {
      for (let i = 0; i < rightLength; i += 1) {
        if (i === rightLength - 1) {
          res.push(totalPages)
        } else if (i === rightLength - 2) {
          res.push('ellipsis')
        } else {
          res.push(currentPage + i + 1)
        }
      }
    } else {
      for (let i = 0; i < rightLength; i += 1) {
        res.push(currentPage + i + 1)
      }
    }
    return res;
  }

  renderPagination () {
    const { currentPage, totalPages } = this.state
    if (currentPage < 1) {
      this.changePage(1)
    } else if (currentPage > totalPages) {
      this.changePage(totalPages)
    }

    const paginations = []
    const steps = this.calculateSteps();

    for (let i = 0; i < steps.length; i += 1) {
      const label = steps[i];
      let isClickable = true;

      if (currentPage === steps[i]) {
        isClickable = false;
      }
      if (label === 'ellipsis') {
        paginations.push(<PaginationLink isPageBreak={true} key={i} />)
      } else {
        paginations.push(
          <PaginationLink
            label={label}
            isClickable={isClickable}
            onClick={(page) => { this.onClick(page) }}
            key={i} />
        )
      }
    }

    return paginations;
  }

  renderLeftCaret () {
    const isDisabled = this.state.currentPage <= 1
    const iconElement = this.getCaretIcon('left', isDisabled)

    return (
      <li className={classNames('Pagination__caret', 'Pagination__caret--left')}>
        { isDisabled
          ? <span>{iconElement}</span>
          : <a onClick={() => {
            this.onClick(this.state.currentPage - 1)
          }}>
            {iconElement}
          </a> }
      </li>
    )
  }

  renderRightCaret () {
    const isDisabled = this.state.currentPage >= this.state.totalPages
    const iconElement = this.getCaretIcon('right', isDisabled)

    return (
      <li className={classNames('Pagination__caret', 'Pagination__caret--right')}>
        { isDisabled
          ? <span>{iconElement}</span>
          : <a onClick={() => {
            this.onClick(this.state.currentPage + 1)
          }}>
            {iconElement}
          </a>
        }
      </li>
    )
  }

  render () {
    return (
      <div className={classNames(
        'Pagination',
        `Pagination--${this.props.fontSize}`)}>
        <ul className={classNames('Pagination__list')}>
          {this.renderLeftCaret()}
          {this.renderPagination()}
          {this.renderRightCaret()}
        </ul>
      </div>
    )
  }
}

export default Pagination
