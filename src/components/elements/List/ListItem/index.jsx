import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import style from '../style.scss'

const cls = cx.bind(style)

const ListItem = ({ className, children }) => (
  <li className={cls(className)}>{children}</li>
)

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

ListItem.defaultProps = {
  children: <div />,
}

export default ListItem
