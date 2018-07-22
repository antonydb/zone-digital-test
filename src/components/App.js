// @flow
import React from 'react'
import { Provider, Subscribe, Container } from 'unstated'
import styled, { injectGlobal } from 'styled-components'
import MovieList from './MovieList'
import { H2 } from './Headings'
import FetchMoviesAndGenres from './FetchMoviesAndGenres'
import Loading from './Loading'
import Button from './Button'
import ControlsIcon from './ControlsIcon'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 1;
  top: 0;
  left: 0;
  padding: 1em;
  background-color: white;
  border-bottom: 1px solid #eee;
`

const Content = styled.div`
  display: flex;
  flex: 1;

  &[aria-busy='true'] {
    justify-content: center;
    align-items: center;
  }
`

const FilterButton = styled(Button)`
  margin-left: auto;

  @media (min-width: 620px) {
    display: none;
  }
`

export type State = {
  showFilters: boolean,
}

export class AppContainer extends Container<State> {
  state = {
    showFilters: false,
  }

  toggleFilters = () => {
    this.setState(prevState => ({ showFilters: !prevState.showFilters }))
  }
}

const App = () => (
  <Provider>
    <Subscribe to={[AppContainer]}>
      {({ toggleFilters }) => (
        <Main>
          <Header>
            <H2 mb={0}>Movies</H2>
            <FilterButton onClick={toggleFilters}>
              <ControlsIcon width={24} height={24} />
            </FilterButton>
          </Header>
          <FetchMoviesAndGenres>
            {({ fetching, movies, genres }) => (
              <Content aria-busy={String(fetching)}>
                {fetching ? (
                  <Loading />
                ) : (
                  <MovieList movies={movies} genres={genres} />
                )}
              </Content>
            )}
          </FetchMoviesAndGenres>
        </Main>
      )}
    </Subscribe>
  </Provider>
)

export default App
