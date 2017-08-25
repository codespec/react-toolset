import React from 'react'
import { Row, Column } from '../../../index.js'

describe('<Row />', () => {
  test('it should render Row component', () => {
    const component = shallow(<Row><Column>column</Column></Row>)
    expect(component).toMatchSnapshot()
  })

  test('it should call onClick method', () => {
    const onClick = jest.fn()
    const component = shallow(<Row onClick={onClick}>row</Row>)
    component.find('div').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  test('it should not have gutter with collapse', () => {
    const props = {
      collapse: true
    }
    const component = mount(<Row {...props}>row</Row>)
    expect(component.props().collapse).toBe(true)
  })

  test('it should have correct classes for collapse', () => {
    const collapseProps = {
      collapse: true
    }
    const sizeCollapseProps = {
      collapse: {
        small: true,
        medium: false,
        large: false
      }
    }
    let component = mount(<Row {...collapseProps}>row</Row>)
    expect(component.find('.collapse').length).not.toBe(0)

    component = mount(<Row {...sizeCollapseProps}>row</Row>)
    expect(component.find('.small-collapse').length).not.toBe(0)
    expect(component.find('.medium-collapse').length).toBe(0)
    expect(component.find('.large-collapse').length).toBe(0)
  })

  test('it should have correct classes for uncollapse', () => {
    const props = {
      uncollapse: {
        small: true,
        medium: true,
        large: false
      }
    }
    const component = mount(<Row {...props}>Row</Row>)
    expect(component.find('.small-uncollapse').length).not.toBe(0)
    expect(component.find('.medium-uncollapse').length).not.toBe(0)
    expect(component.find('.large-uncollapse').length).toBe(0)
  })

  test('it should have gutter with uncollapse', () => {
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

  test('it should have custom classes', () => {
    const component = mount(<Row className='custom-class'>Row</Row>)
    expect(component.find('.custom-class').length).not.toBe(0)
  })

  test('it should render children element', () => {
    const component = mount(<Row><p>row paragraph</p></Row>)
    expect(component.find('p').length).toBeGreaterThan(0)
  })
})

describe('<Column />', () => {
  test('it should render Column component', () => {
    const component = shallow(<Column>column</Column>)
    expect(component).toMatchSnapshot()
  })

  test('it should call onClock method', () => {
    const onClick = jest.fn()
    const component = shallow(<Column onClick={onClick}>column</Column>)
    component.find('div').simulate('click')
    expect(onClick).toHaveBeenCalled()
  })

  test('it should have correct value for size', () => {
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
