
import React from 'react'
import { render } from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'

import Mandala from './components/Mandala.jsx'

const App = (props) => {
  return (
    <Router>
      <Route path='/' component={Mandala} />
    </Router>
  )
}

  export default App
