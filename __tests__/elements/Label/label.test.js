import React from 'react'
import { Label } from '../../../src'

describe('<Label />', () => {
  it('should render Label component', () => {
    const component = shallow(<Label>My Label</Label>)

    expect(component).toMatchSnapshot()
  })

  it('should render star when the label is marked as required', () => {
    const component = shallow(<Label required={true}>Required Label</Label>)

    expect(component.hasClass(`Label--isRequired`)).toEqual(true)
  })
})
