// @flow
import React, { Component, Fragment } from 'react'
import type { PopularityType } from '../types'

type Props = {
  id: string,
  min: number,
  max: number,
  name: string,
  step: number,
  onChange: Function,
  value: PopularityType,
}

type State = {
  value: PopularityType,
}

class RangeSlider extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      value: props.value,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { name, value }: { name: string, value: string } = event.currentTarget
    this.setState({ value: Number(value) })
    this.props.onChange({ [name]: Number(value) })
  }

  render() {
    const { id, min, max, name, step } = this.props
    const { value } = this.state

    return (
      <Fragment>
        {value}
        <div>
          <input
            id={id}
            type="range"
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={this.handleChange}
          />
        </div>
      </Fragment>
    )
  }
}
export default RangeSlider
