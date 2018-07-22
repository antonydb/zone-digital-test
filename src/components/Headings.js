import styled from 'styled-components'

const Heading = styled.span`
  margin: 0 0 ${props => (props.mb !== undefined ? props.mb : '1em')};
  padding: 0;
`

export const H1 = Heading.withComponent('h1')
export const H2 = Heading.withComponent('h2')
export const H3 = Heading.withComponent('h3')
export const H4 = Heading.withComponent('h4')
