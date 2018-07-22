import React from 'react'
import { shallow } from 'enzyme'
import RangeSlider from './RangeSlider'

let onChangeSpy
let wrapper
beforeEach(() => {
  onChangeSpy = jest.fn()
  wrapper = shallow(
    <RangeSlider
      name="average"
      min={0}
      max={10}
      step={1}
      value={3}
      onChange={onChangeSpy}
    />
  )
})

afterEach(() => {
  onChangeSpy.mockClear()
})

it('has correct initial state', () => {
  expect(wrapper.state()).toEqual({
    value: 3,
  })
})

it('assigns props correctly', () => {
  expect(wrapper.find('input').props()).toEqual({
    name: 'average',
    value: 3,
    min: 0,
    max: 10,
    step: 1,
    type: 'range',
    onChange: wrapper.instance().handleChange,
  })
})

it('calls onChange', () => {
  const event = { currentTarget: { name: 'average', value: 4 } }
  wrapper.find('input').simulate('change', event)
  expect(onChangeSpy).toHaveBeenCalledWith({
    average: 4,
  })
})

it('updates state', () => {
  const event = { currentTarget: { name: 'average', value: 4 } }
  wrapper.find('input').simulate('change', event)
  expect(wrapper.state()).toEqual({
    value: 4,
  })
})
