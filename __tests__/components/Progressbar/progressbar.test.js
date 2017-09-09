import React from 'react'
import { Progressbar } from '../../../src'

describe('<Progressbar />', () => {
  const size = 'large'
  const color = 'error'

  it('renders Progressbar component', () => {
    const component = mount(<Progressbar />)

    expect(component).toBeTruthy()
    expect(component.find('.Progressbar').length).toEqual(1)
  })

  it('render specific width Progressbar', () => {
    const percentage = 20
    const expectedText = `${percentage}%`
    const component = shallow(<Progressbar percentage={percentage} showPercentageNum={true} />)

    expect(component.find('.Progressbar__progress').text()).toEqual(expectedText)
  })

  it('should limit the width of Progressbar width from 0 to 100', () => {
    const percentage = 110

    spyOn(console, 'error')
    const component = shallow(<Progressbar percentage={percentage} showPercentageNum={true} />)

    expect(console.error).toBeCalled()
  })

  it('render Progressbar with error color', () => {
    const component = shallow(<Progressbar percentage={30} showPercentageNum={true} color={color} />)

    expect(component.find('.Progressbar__progress').hasClass(`Progressbar__progress--${color}`)).toEqual(true)
    expect(component.find('.Progressbar__progress').hasClass(`Progressbar__progress--${size}`)).toEqual(false)
  })

  it('render Progressbar with large size', () => {
    const component = shallow(<Progressbar percentage={30} showPercentageNum={true} size={size} />)

    expect(component.find('.Progressbar__progress').hasClass(`Progressbar__progress--${color}`)).toEqual(false)
    expect(component.find('.Progressbar__progress').hasClass(`Progressbar__progress--${size}`)).toEqual(true)
  })
})
