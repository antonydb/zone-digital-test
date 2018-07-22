import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Cannot find root element')
}

render(<App />, rootElement)

registerServiceWorker()
