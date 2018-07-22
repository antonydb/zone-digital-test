// @flow
import styled from 'styled-components'

const Button = styled.button.attrs({
  type: 'button',
})`
  display: inline-block;
  width: 40px;
  height: 40px;
  touch-action: manipulation;
  background-color: white;
  border: 1px solid #ddd;
`

export default Button
