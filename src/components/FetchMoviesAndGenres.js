// @flow
import { Component } from 'react'
import { getMoviesNowPlaying, getMoviesGenres } from '../api'

type Props = {
  children: Function,
}

type State = {
  genres: ?Array<{}>,
  movies: ?Array<{}>,
  fetching: boolean,
}

class FetchMoviesAndGenres extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      movies: null,
      genres: null,
      fetching: true,
    }
  }

  async componentDidMount() {
    const [movies, genres] = await Promise.all([
      getMoviesNowPlaying(),
      getMoviesGenres(),
    ])

    this.setState({
      fetching: false,
      movies: movies.results,
      genres: genres.genres,
    })
  }

  render() {
    const { fetching } = this.state

    return this.props.children({
      fetching,
      ...this.state,
    })
  }
}

export default FetchMoviesAndGenres
