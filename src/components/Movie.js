// @flow
import React from 'react'
import styled from 'styled-components'
import { IMAGE_URL_PATH } from '../config'
import { H3 } from './Headings'
import type { GenreIdType, MovieType } from '../types'

type Props = MovieType & {
  genresById: Array<GenreIdType>,
}

const MovieListItem = styled.li`
  display: flex;
  padding: 1em;
  margin: 0;
  border-color: #ddd;
  border-style: solid;
  border-width: 0 0 1px;
`

const Image = styled.img`
  height: 200px;
  width: 120px;
  margin-right: 1em;
`

const MovieDetails = styled.div`
  flex: 1;
`

const Label = styled.label`
  display: inline-block;
  position: relative;
  margin: 0 0.5em 0.5em 0;
  padding: 0.5em 1em;
  background-color: #eee;
  border: 1px solid #ddd;
  border-radius: 2px;
  font-size: 0.875em;

  @media (max-width: 619px) {
    font-size: 0.75em;
  }
`

type MoviePosterImageProps = {
  src: string,
  alt: string,
  width?: 200,
}

export const MoviePosterImage = ({
  src,
  alt,
  width = 200,
}: MoviePosterImageProps) => (
  <Image src={`${IMAGE_URL_PATH}/w200${src}`} alt={alt} />
)

const MovieItem = ({
  genresById,
  genre_ids,
  id,
  poster_path,
  title,
}: Props) => (
  <MovieListItem>
    <MoviePosterImage src={poster_path} alt={title} />
    <MovieDetails>
      <H3>{title}</H3>
      {genre_ids.map(id => <Label key={id}>{genresById[id]}</Label>)}
    </MovieDetails>
  </MovieListItem>
)

export default MovieItem
