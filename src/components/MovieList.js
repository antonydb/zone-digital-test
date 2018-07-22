// @flow
import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Filters from './Filters'
import Movie from './Movie'
import type {
  GenreType,
  GenreIdType,
  MovieType,
  PopularityType,
} from '../types'
import { compose, when } from '../fp'

type VoteAverageType = number

type Props = {
  movies: Array<MovieType>,
  genres: Array<GenreType>,
}

type State = {
  genreIds: Array<GenreIdType>,
  voteAverage: PopularityType,
}

const List = styled.ol`
  flex: 1;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const sortByPopularity = (data: Array<MovieType>) =>
  data.sort((a, b) => b.popularity - a.popularity)

export const filterByGenreIds = (genreIds: Array<GenreIdType>) => (
  data: Array<MovieType>
) => data.filter(item => genreIds.every(id => item.genre_ids.includes(id)))

export const filterByVoteAverage = (voteAverage: number) => (
  data: Array<MovieType>
) => data.filter(item => item.vote_average >= voteAverage)

class MovieList extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      voteAverage: 3,
      genreIds: [],
    }
  }

  onChange = (
    filters: { voteAverage: VoteAverageType } | { genreIds: Array<GenreIdType> }
  ) => {
    this.setState(filters)
  }

  render() {
    const { genres } = this.props
    let { movies } = this.props
    const { genreIds, voteAverage } = this.state
    const genresById = {}

    genres.forEach(({ id, name }) => {
      genresById[id] = name
    })

    movies = compose(
      sortByPopularity,
      when(genreIds.length > 0, filterByGenreIds(genreIds)),
      when(voteAverage !== null, filterByVoteAverage(voteAverage))
    )(movies)

    return (
      <Fragment>
        <Filters
          genres={genres}
          onChange={this.onChange}
          voteAverage={voteAverage}
        />
        <List>
          {movies.length > 0 ? (
            movies.map(movie => (
              <Movie key={movie.id} genresById={genresById} {...movie} />
            ))
          ) : (
            <p>No results</p>
          )}
        </List>
      </Fragment>
    )
  }
}

export default MovieList
