import React from 'react'
import { Breadcrumb } from '../../../index'

describe('<Breadcrumb />', () => {
  test('it should render Breadcrumb component', () => {
    const component = mount(<Breadcrumb><a href="/">Home</a>You are here</Breadcrumb>)
    expect(component).toMatchSnapshot()
  })
})
