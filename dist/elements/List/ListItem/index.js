import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from '../style.css'

const classNames = cx.bind(style)

const ListItem = ({ className, children }) => (
  React.createElement("li", {className: classNames(className)}, children)
)

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ListItem.defaultProps = {
  children: React.createElement("div", null),
}

export default ListItem
