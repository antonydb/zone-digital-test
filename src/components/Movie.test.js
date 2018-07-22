import React from 'react'
import { shallow } from 'enzyme'
import { MoviePosterImage } from './Movie'
import { IMAGE_URL_PATH } from '../config'

it('has the correct image src', () => {
  const wrapper = shallow(<MoviePosterImage src="/example.jpg" alt={''} />)
  expect(wrapper.props().src).toBe(`${IMAGE_URL_PATH}/w200/example.jpg`)
})
