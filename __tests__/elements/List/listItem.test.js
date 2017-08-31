import React from 'react'
import { ListItem } from '../../../src'

describe('<ListItem />', () => {
  it('should render ListItem component', () => {
    const component = shallow(<ListItem>item 1</ListItem>)
    expect(component).toMatchSnapshot()
  })
})
