import React from 'react'
import { Button } from '../../../index.js'

describe('<Button />', () => {
  it('should render Button component', () => {
    const component = shallow(<Button>Button Test</Button>)
    expect(component).toMatchSnapshot()
  })

  it('should render link element when link property has value', () => {
    const component = shallow(<Button link='http://test.com'>Link Button Test</Button>)
    expect(component.find('a').length).toBe(1)
  })

  it('should render div elemnt when tag property has div value', () => {
    const component = shallow(<Button tag='div'>Custom Tag Button Test</Button>)
    expect(component.find('div').length).toBe(1)
  })
})
