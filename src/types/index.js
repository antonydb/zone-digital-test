// @flow
export type PopularityType = number
export type GenreIdType = number

export type GenreType = {
  id: GenreIdType,
  name: string,
}

export type MovieType = {
  genre_ids: Array<GenreIdType>,
  id: number,
  popularity: PopularityType,
  poster_path: string,
  title: string,
  vote_average: number,
}

export type FilterType = {
  genreIds: Array<GenreIdType>,
}
