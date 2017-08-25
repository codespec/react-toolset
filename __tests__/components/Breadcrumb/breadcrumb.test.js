import React from 'react'
import { Breadcrumb } from '../../../index'

describe('<Breadcrumb />', () => {
  test('it should render Breadcrumb component', () => {
    const component = mount(<Breadcrumb><a href="/">Home</a>You are here</Breadcrumb>)
    expect(component).toMatchSnapshot()
  })

  test('it should render correct number of Icon component', () => {
    const component = mount(<Breadcrumb><a href="/">Home</a>You are here</Breadcrumb>)
    expect(component.find('Icon').length).toBe(1)
  })
})
