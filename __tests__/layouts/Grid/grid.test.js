import React from 'react'
import { Row, Column } from '../../../index.js'

describe('<Row />', () => {
  it('should render Row component', () => {
    const component = shallow(<Row><Column>column</Column></Row>)
    expect(component).toMatchSnapshot()
  })

  it('should call onClick method', () => {
    const onClick = jest.fn()
    const component = shallow(<Row onClick={onClick}>row</Row>)
    component.find('div').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should not have gutter with collapse', () => {
    const props = {
      collapse: true
    }
    const component = mount(<Row {...props}>row</Row>)
    expect(component.props().collapse).toBe(true)
  })

  it('should have gutter with uncollapse', () => {
    const props = {
      uncollapse: {
        small: true,
        medium: true,
        large: true
      }
    }
    const component = mount(<Row {...props}>row</Row>)
    expect(component.props().uncollapse.small).toBe(true)
  })

  it('should render children element', () => {
    const component = mount(<Row><p>row paragraph</p></Row>)
    expect(component.find('p').length).toBeGreaterThan(0)
  })
})

describe('<Column />', () => {
  it('should render Column component', () => {
    const component = shallow(<Column>column</Column>)
    expect(component).toMatchSnapshot()
  })

  it('should call onClock method', () => {
    const onClick = jest.fn()
    const component = shallow(<Column onClick={onClick}>column</Column>)
    component.find('div').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  it('should have correct value for size', () => {
    const props = {
      small: 12,
      medium: 6,
      large: 2
    }
    const component = mount(<Column {...props}>column</Column>)
    expect(component.props().small).toBe(12)
    expect(component.props().medium).toBe(6)
    expect(component.props().large).toBe(2)
  })
})
