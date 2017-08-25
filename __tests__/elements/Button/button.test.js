import React from 'react'
import { Button } from '../../../index.js'

describe('<Button />', () => {
  test('it should render Button component', () => {
    const component = shallow(<Button>Button Test</Button>)
    expect(component).toMatchSnapshot()
  })

  test('it should render button element by default', () => {
    const component = shallow(<Button>Default Button Test</Button>)
    expect(component.find('button').length).toBe(1)
  })

  test('it should render link element when link property has value', () => {
    const component = shallow(<Button link='http://test.com'>Link Button Test</Button>)
    expect(component.find('a').length).toBe(1)
  })

  test('it should render div elemnt when tag property has div value', () => {
    const component = shallow(<Button tag='div'>Custom Tag Button Test</Button>)
    expect(component.find('div').length).toBe(1)
  })

  test('it should have flat button due to isFlat property', () => {
    const component = shallow(<Button isFlat={true}>Flat Button</Button>)
    expect(component.find('.Button-is-flat').length).not.toBe(0)
  })
})
