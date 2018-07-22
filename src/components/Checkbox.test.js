import React from 'react'
import { shallow } from 'enzyme'
import Checkbox from './Checkbox'

let onChangeSpy
beforeEach(() => {
  onChangeSpy = jest.fn()
})

afterEach(() => {
  onChangeSpy.mockClear()
})

it('has correct initial state', async () => {
  const wrapper = shallow(<Checkbox onChange={onChangeSpy} />)
  const actual = wrapper.state()
  const expected = {
    checked: false,
  }
  expect(expected).toEqual(actual)
})

it('calls onChange when clicked', async () => {
  const wrapper = shallow(<Checkbox onChange={onChangeSpy} />)
  const event = { currentTarget: { checked: true } }
  wrapper.simulate('change', event)
  expect(onChangeSpy).toHaveBeenCalledTimes(1)
  expect(onChangeSpy).toHaveBeenCalledWith({
    checked: event.currentTarget.checked,
  })
})

it('updates state when clicked', async () => {
  const wrapper = shallow(<Checkbox onChange={onChangeSpy} />)
  const event = { currentTarget: { checked: true } }
  wrapper.simulate('change', event)
  expect(wrapper.state()).toEqual({ checked: true })
})
