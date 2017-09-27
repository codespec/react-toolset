import React from 'react'
import sinon from 'sinon';
import { Pagination } from '../../../src'

describe('<Pagination />', () => {
  const props = {
    itemsPerPage: 10,
    totalItems: 124,
    onChange: sinon.spy(),
  }

  it('renders Pagination component', () => {
    const component = mount(<Pagination {...props} />)

    expect(component).toBeTruthy()
    expect(component.find('.Pagination').length).toEqual(1)
  })

  it('renders Pagination component with specific link items', () => {
    const newProps = Object.assign({}, props, { maxPaginationSize: 9 })
    const component = mount(<Pagination {...newProps} />)

    expect(component.find('.PaginationLink').length).toEqual(newProps.maxPaginationSize)
  })

  it('renders Pagination component with clicking first link', () => {
    const newProps = Object.assign({}, props, { currentPage: 2 })
    const component = mount(<Pagination {...newProps} />)

    component.find('.PaginationLink').first().find('a').simulate('click')
    expect(newProps.onChange.called)
    expect(component.find('.Pagination__caret--left').find('span').length).toEqual(1)
  })

  it('renders Pagination component with clicking last link', () => {
    const currentPage = Math.ceil(props.totalItems / props.itemsPerPage) - 1
    const newProps = Object.assign({}, props, { currentPage })
    const component = mount(<Pagination {...newProps} />)

    component.find('.PaginationLink').last().find('a').simulate('click')
    expect(component.find('.Pagination__caret--right').find('span').length).toEqual(1)
  })
})
