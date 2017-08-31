import React from 'react'
import { Checkbox } from '../../../src'

describe('<Checkbox />', () => {
  it('should render Checkbox component', () => {
    const component = shallow(<Checkbox id='testCheckbox'>Checkbox Test</Checkbox>)
    expect(component).toMatchSnapshot()
  })

  it('should have primary related class when the type is primary', () => {
    const props = {
      id: 'primaryCheckbox',
      type: 'dark',
      onChange: jest.fn(),
    }
    const component = mount(<Checkbox {...props}>Primary Test</Checkbox>)
    component.find('input').simulate('change')
    expect(component.props().onChange).toHaveBeenCalled()
    component.setProps({ isChecked: true })
    expect(component.find('Icon').length).toBe(1)
    expect(component.find('.Checkbox__box--checked-dark').length).toBeGreaterThan(0)
  })

  it('should have custom classes', () => {
    const props = {
      id: 'customClass',
      className: {
        root: 'customRoot',
        box: 'customBox',
        labelText: 'customLabel'
      }
    }
    const component = mount(<Checkbox {...props}>Custom Classes</Checkbox>)
    expect(component.find('label.customRoot').length).not.toBe(0)
    expect(component.find('.Checkbox__box.customBox').length).not.toBe(0)
    expect(component.find('.Checkbox__label.customLabel').length).not.toBe(0)
  })

  it('should have size classes', () => {
    const props = {
      id: 'largeCheckbox',
      size: 'large'
    }
    const component = mount(<Checkbox {...props}>Size Test</Checkbox>)
    expect(component.find('.Checkbox__box--large').length).not.toBe(0)
    expect(component.find('.Checkbox__label--large').length).not.toBe(0)
  })
})
