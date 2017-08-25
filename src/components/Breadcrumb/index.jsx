import React, { Children } from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import List from '../../elements/List'
import ListItem from '../../elements/List/ListItem'
import style from './style.scss'

const classNames = cx.bind(style)

const Breadcrumb = ({ className, children }) => (
  <List type="horizontal" className={classNames('Breadcrumb', className)}>
    {Children.map(children, (child, i) => <ListItem key={i}>{child}</ListItem>)}
  </List>
)

Breadcrumb.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Breadcrumb
