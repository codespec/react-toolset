import React from 'react'
import { List } from '../../../index.js'

describe('<List />', () => {
  test('it should render List component', () => {
    const component = shallow(<List><li>list test</li></List>)
    expect(component).toMatchSnapshot()
  })

  test('it should render ordered list when the type is instruction', () => {
    const component = shallow(<List type='instruction'><li>list item</li></List>)
    expect(component.find('ol').length).toBeGreaterThan(0)
  })
})
