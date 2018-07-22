// @flow
import React, { Component } from 'react'

type Props = {
  onChange: Function,
}

type State = {
  checked: boolean,
}

class Checkbox extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      checked: false,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { checked } = event.currentTarget
    const { onChange, ...rest } = this.props
    this.setState({ checked })
    onChange({ checked, ...rest })
  }

  render() {
    return (
      <input
        {...this.props}
        type="checkbox"
        onChange={this.handleChange}
        checked={this.state.checked}
      />
    )
  }
}

export default Checkbox
