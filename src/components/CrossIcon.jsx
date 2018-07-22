/* eslint-disable max-len */
import React from 'react'

type Props = {
  width: number,
  height: number,
  fill?: string,
}

const CrossIcon = (props: Props) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path
      d="M53.6 50.2l35.3-35.3c1.1-1.1 1.1-2.8 0-3.9s-2.8-1.1-3.9 0L49.8 46.4 14.4 11.1c-1.1-1.1-2.8-1.1-3.9 0s-1.1 2.8 0
      3.9l35.3 35.3-35.2 35.3c-1.1 1.1-1.1 2.8 0 3.9.5.5 1.2.8 1.9.8s1.4-.3 1.9-.8l35.3-35.3L85 89.5c.5.5 1.2.8 1.9.8s1.4-.3
      1.9-.8c1.1-1.1 1.1-2.8 0-3.9L53.6 50.2z"
    />
  </svg>
)

export default CrossIcon
