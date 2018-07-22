import {
  sortByPopularity,
  filterByGenreIds,
  filterByVoteAverage,
} from './MovieList'

let onChangeSpy

beforeEach(() => {
  onChangeSpy = jest.fn()
})

afterEach(() => {
  onChangeSpy.mockClear()
})

it('sorts by popularity', () => {
  const popularity1 = {
    id: 1,
    popularity: 88.8,
  }
  const popularity2 = {
    id: 2,
    popularity: 48.4,
  }
  const popularity3 = {
    id: 3,
    popularity: 22.8,
  }
  const popularity4 = {
    id: 4,
    popularity: 99.8,
  }
  const fakePopularityData = [
    popularity1,
    popularity2,
    popularity3,
    popularity4,
  ]
  const actual = sortByPopularity(fakePopularityData)
  const expected = [popularity4, popularity1, popularity2, popularity3]
  expect(expected).toEqual(actual)
})

it('filters by genre id', () => {
  const genreIds = [1, 2]
  const data = [
    { id: 1, genre_ids: [1, 2] },
    { id: 2, genre_ids: [1] },
    { id: 3, genre_ids: [2] },
    { id: 4, genre_ids: [1, 2] },
  ]
  const actual = filterByGenreIds(genreIds)(data)
  const expected = [{ id: 1, genre_ids: [1, 2] }, { id: 4, genre_ids: [1, 2] }]
  expect(expected).toEqual(actual)
})

it('filters by vote average', () => {
  const voteAverage = 5.5
  const data = [
    { id: 1, vote_average: 4 },
    { id: 2, vote_average: 2.4 },
    { id: 3, vote_average: 9 },
    { id: 4, vote_average: 8.5 },
  ]
  const actual = filterByVoteAverage(voteAverage)(data)
  const expected = [{ id: 3, vote_average: 9 }, { id: 4, vote_average: 8.5 }]
  expect(expected).toEqual(actual)
})
