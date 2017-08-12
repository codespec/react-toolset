import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames/bind'
import { util as utilCls } from '../../../../styles'
import Row from '../Row'
import Column from '../Column'

const CenteredRow = ({children, elmId}) => (
  <Row>
    <Column medium={12} className={cx(utilCls['util-tc'])}>
      {children}
    </Column>
  </Row>
)

CenteredRow.propTypes = {
  /** Arbitrary content to render in the centered row */
  children: PropTypes.node
}

export default CenteredRow
