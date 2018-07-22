import React from 'react'
import { shallow } from 'enzyme'
import FetchMoviesAndGenres from './FetchMoviesAndGenres'
import * as api from '../api'

let children
const mockMovieData = {
  results: [
    {
      id: 1,
      title: 'A New Hope',
    },
    {
      id: 2,
      title: 'The Empire Strikes Back',
    },
  ],
}
const mockGenreData = {
  genres: [
    {
      id: 1,
      name: 'action',
    },
    {
      id: 2,
      name: 'adventure',
    },
  ],
}

beforeEach(() => {
  children = jest.fn()
  jest
    .spyOn(api, 'getMoviesNowPlaying')
    .mockImplementation(() => Promise.resolve(mockMovieData))

  jest
    .spyOn(api, 'getMoviesGenres')
    .mockImplementation(() => Promise.resolve(mockGenreData))
})

afterEach(() => {
  api.getMoviesNowPlaying.mockClear()
  api.getMoviesGenres.mockClear()
  children.mockClear()
})

it('has correct intial state', async () => {
  const wrapper = shallow(<FetchMoviesAndGenres children={children} />)
  const actual = wrapper.state()
  const expected = {
    movies: null,
    genres: null,
    fetching: true,
  }
  expect(expected).toEqual(actual)
})

it('updates state on mount with fetched data', async () => {
  const wrapper = shallow(<FetchMoviesAndGenres children={children} />)
  await wrapper.instance().componentDidMount()
  const actual = wrapper.state()
  const expected = {
    fetching: false,
    movies: mockMovieData.results,
    ...mockGenreData,
  }
  expect(actual).toEqual(expected)
})

it('renders children with correct props', async () => {
  const wrapper = shallow(<FetchMoviesAndGenres children={children} />)
  await wrapper.instance().componentDidMount()
  expect(children).toHaveBeenCalledWith({
    fetching: false,
    movies: mockMovieData.results,
    ...mockGenreData,
  })
})
