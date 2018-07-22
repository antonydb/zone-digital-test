// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'
import type { GenreType } from '../types'

const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: 0;
`

const UnstyledList = styled.ol`
  padding: 0;
  margin: 0;
  list-style: none;
`

const Legend = styled.legend`
  padding: 1em 0;
`

type Props = {
  genres: Array<GenreType>,
  onChange: Function,
}

type State = {
  selectedValues: Set<number>,
}

class ByGenre extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      selectedValues: new Set(),
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = ({ checked, value }: { checked: boolean, value: string }) => {
    this.setState(prevState => {
      const { selectedValues } = prevState

      if (checked) {
        selectedValues.add(Number(value))
      } else {
        selectedValues.delete(Number(value))
      }

      this.props.onChange({ genreIds: Array.from(selectedValues) })
      return { selectedValues }
    })
  }

  render() {
    const { genres } = this.props

    return (
      <Fieldset className="Fieldset">
        <Legend id="genre-label">Select genre(s):</Legend>
        <UnstyledList className="u-noStyling Genre-list">
          {genres.map(({ id, name }: GenreType) => (
            <li className="Genre-listItem" key={id}>
              <Checkbox
                key={id}
                id={`name${id}`}
                value={id}
                name={name}
                onChange={this.handleChange}
              />
              <label htmlFor={`name${id}`}>{name}</label>
            </li>
          ))}
        </UnstyledList>
      </Fieldset>
    )
  }
}

export default ByGenre
