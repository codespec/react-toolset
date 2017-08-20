import React from 'react'
import PropTypes from 'prop-types'
/* eslint-disable no-unused-vars */
import * as FontAwesome from 'react-icons/lib/fa'
import * as MaterialDesign from 'react-icons/lib/md'
import * as Typicons from 'react-icons/lib/ti'
import * as GithubOcticons from 'react-icons/lib/go'
/* eslint-enable no-unused-vars */
import cx from 'classnames/bind'

const cls = cx.bind()

const Icon = ({type, name, size, color, className, ...props}) => {
  const fontLibMap = {
    fontAwesome: FontAwesome,
    materialDesign: MaterialDesign,
    typicons: Typicons,
    githubOcticons: GithubOcticons
  }

  return React.createElement(fontLibMap[type][name], {
    size,
    color,
    className: cls(className),
    ...props
  })
}

Icon.propTypes = {
  /** Which icon sets from react-icons */
  type: PropTypes.oneOf(['fontAwesome', 'materialDesign', 'typicons', 'githubOcticons']),
  /** Icon name from the icon set */
  name: PropTypes.string.isRequired,
  /** Size of icon with pixel unit */
  size: PropTypes.number,
  /** Hex code of icon color */
  color: PropTypes.string,
  className: PropTypes.string
}

Icon.defaultProps = {
  type: 'fontAwesome',
  name: 'FaCheck',
  size: 18,
  color: '#00142b'
}

export default Icon
