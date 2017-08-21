import React from 'react'
import { Input } from '../../../index.js'

describe('<Input />', () => {
  it('should render Input component', () => {
    const component = shallow(<Input id='test-input' />)
    expect(component).toMatchSnapshot()
  })

  it('should render label when the label property has value', () => {
    const component = shallow(<Input label='Test Label' id='test-label' />)
    expect(component.find('label').length).toBe(1)
  })
})
