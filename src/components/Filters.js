// @flow
import React from 'react'
import { Subscribe } from 'unstated'
import styled from 'styled-components'
import type { GenreType } from '../types'
import { AppContainer } from './App'
import ByGenre from './ByGenre'
import RangeSlider from './RangeSlider'
import { H3 } from './Headings'
import Button from './Button'
import CrossIcon from './CrossIcon'

type Props = {
  genres: Array<GenreType>,
  onChange: Function,
  voteAverage: number,
}

const StyledFilters = styled.div`
  position: relative;
  padding: 1em;
  border-right: 1px solid #ddd;

  @media (max-width: 619px) {
    display: ${props => (props.show ? 'block' : 'none')};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: white;
  }
`

const CloseButton = styled(Button)`
  position: absolute;
  top: 1em;
  right: 1em;

  @media (min-width: 620px) {
    display: none;
  }
`

const Filters = ({ genres, onChange, voteAverage }: Props) => (
  <Subscribe to={[AppContainer]}>
    {({ toggleFilters, state }) => (
      <StyledFilters show={state.showFilters}>
        <CloseButton onClick={toggleFilters}>
          <CrossIcon width={24} height={24} />
        </CloseButton>
        <form>
          <H3>Filter your results:</H3>
          <label htmlFor="voteAverage">Rating:</label>{' '}
          <RangeSlider
            id="voteAverage"
            name="voteAverage"
            value={voteAverage}
            min={0}
            max={10}
            step={0.5}
            onChange={onChange}
          />
          <ByGenre genres={genres} onChange={onChange} />
        </form>
      </StyledFilters>
    )}
  </Subscribe>
)

export default Filters
