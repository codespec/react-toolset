import React from 'react'
import { ListItem } from '../../../index.js'

describe('<ListItem />', () => {
  test('it should render ListItem component', () => {
    const component = shallow(<ListItem>item 1</ListItem>)
    expect(component).toMatchSnapshot()
  })
})
