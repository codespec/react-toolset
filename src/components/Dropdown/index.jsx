import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import Icon from '../../icons/Icon'
import style from './style.scss'

const classNames = cx.bind(style)

export default class Dropdown extends Component {
  static propTypes = {
    children: PropTypes.node,
    /** Addtional class for styling */
    className: PropTypes.shape({
      /** Dropdown root element style */
      root: PropTypes.string,
      /** Dropdown label button style */
      menuButton: PropTypes.string,
      /** Dropdown lable style when it is open */
      isOpen: PropTypes.string,
      /** Addtional class for icon */
      icon: PropTypes.string,
      /** Menu item style */
      menu: PropTypes.string,
    }),
    /** Dropdown list maximum height */
    maxHeight: PropTypes.number,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    /** Trigger open menu on mouseover */
    openOnMouseOver: PropTypes.bool,
    /** Dropdown style */
    type: PropTypes.oneOf(['default', 'light', 'dark', 'primary', 'secondary']),
    /** Object to define Icon component */
    icon: PropTypes.shape({
      type: PropTypes.string,
      name: PropTypes.string,
    }),
    hasLabel: PropTypes.bool,
  }

  static defaultProps = {
    className: {},
    maxHeight: 250,
    onBlur: () => {},
    onFocus: () => {},
    type: 'default',
    openOnMouseOver: false,
    icon: {
      type: 'materialDesign',
      name: 'MdArrowDropDown',
    },
    hasLabel: true,
  }

  constructor (props) {
    super(props)
    this.state = {
      current: -1,
      isFocused: false,
      isOpened: false,
      length: this.getItems(props.children).length,
      lastMouseDownEvent: {},
    }
  }

  componentDidMount () {
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('mousedown', this.getLastMouseDownEvent)
    }
  }

  componentWillReceiveProps (nextProps) {
    const length = this.getItems(nextProps.children).length
    this.setState({
      current: Math.max(-1, Math.min(this.state.current, length - 1)),
      length,
    })
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined' && window.removeEventListener) {
      window.removeEventListener('mousedown', this.getLastMouseDownEvent)
    }
  }

  onFocus = (e) => {
    clearTimeout(this.blurTimer)
    this.setState({ isFocused: true })
    this.props.onFocus(e)
  }

  onClick = () => {
    this.setState({ isOpen: !this.state.isOpen })
  }

  onSelect = (element, e) => {
    if (element.props.onSelect) {
      if (element.props.onSelect.call(element, e, element) === false) this.close()
    }
  }

  getLastMouseDownEvent = (e) => {
    this.setState({ lastMouseDownEvent: e || {} })
  }

  getItems (children) {
    return Children.toArray(children).filter(child => child.type === Option)
  }

  render () {
    /* eslint-disable */
    const { className, maxHeight, type, icon, hasLabel, children } = this.props
    const { current, isOpen } = this.state
    /* eslint-enable */

    let optionsCount = 0

    const options = Children.toArray(children).map((child, i) => {
      const index = optionsCount
      switch (child.type) {
        case 'option':
          optionsCount++
          return (<li
            key={i}
            className={classNames('Dropdown__option', {
              'Dropdown__option-current': index === current,
            })}
            onMouseOver={() => this.setState({ current: -1 })}
            onMouseOut={() => (index === current) && this.setState({ current: -1 })}
            /* eslint-disable */
            onClick={(e) => this.onSelect(child, e)}
            /* eslint-enable */>
            {child.props.children}
          </li>)
        case 'divider':
          return <li key={i} className={classNames('Dropdown__divider', className)} />
        default:
          return null
      }
    })

    return (
      <div
        tabIndex="0"
        className={classNames('Dropdown', className.root, isOpen && 'Dropdown-open')}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onMouseOver={this.onMouseOver}
        onMouseOut={this.onMouseOut}
        onClick={this.onClick}>
        <span
          className={classNames(
            'Dropdown__button',
            `Button-${type}`,
            `Dropdown__button-${type}`,
            className.menuButton,
            isOpen && 'Dropdown-open',
            isOpen && className.isOpen
          )}>
          <span className={classNames('Dropdown__label')}>
            {Children.toArray(children).filter(child => (
              child.type !== 'option' && child.type !== 'divider'
            ))}
            <Icon
              type={icon.type}
              name={icon.name}
              size={28}
              className={classNames('Dropdown__icon', className.icon)} />
          </span>
          { isOpen &&
            <div
              className={classNames('Dropdown__container', className.menu)}
              style={{ display: isOpen ? undefined : 'none', maxHeight }}>
              <ul className={classNames('Dropdown__list')}>
                {options}
              </ul>
            </div>
          }
        </span>
      </div>
    )
  }
}
