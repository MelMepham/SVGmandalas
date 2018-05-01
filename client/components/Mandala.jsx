
import React from 'react'
import { render } from 'react-dom'

import {HashRouter as Router, Route} from 'react-router-dom'

class Mandala extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    sixArray: [1, 2, 3, 4, 5, 6]
    }
  }

  componentDidMount() {
  }


  render() {
    return (
      <div>
        <svg className="background box" height="400" width="400">
          <circle cx="200" cy="200" r="30" fill="#FFD080" opacity="0.4">
            <animate
              attributeType="XML"
              attributeName="r"
              dur="5s"
              values="0; 50; 0"
              repeatCount="indefinite" />
          </circle>
          <circle cx="200" cy="200" r="60" fill="#74C7FF" opacity="0.3"/>
        </svg>
      </div>

    )
  }
}

  export default Mandala
