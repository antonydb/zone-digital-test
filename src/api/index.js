// &flow
import { API_HOST, API_KEY } from '../config'

const fetchApi = (path: string) =>
  fetch(`${API_HOST}${path}?api_key=${API_KEY}`, {
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())

// https://developers.themoviedb.org/3/movies/get-now-playing
export const getMoviesNowPlaying = () => fetchApi('/movie/now_playing')

// https://developers.themoviedb.org/3/genres/get-movie-list
export const getMoviesGenres = () => fetchApi('/genre/movie/list')
