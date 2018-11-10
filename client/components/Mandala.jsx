
import React from 'react'
import { render } from 'react-dom'
// import Bubble from './Bubble'

import { HashRouter as Router, Route } from 'react-router-dom'

class Mandala extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fourArray: [1, 2, 3, 4],
      sixArray: [1, 2, 3, 4, 5, 6]
    }
    this.HandleClick = this.HandleClick.bind(this)
    this.createCircles = this.createCircles.bind(this)
  }

  componentDidMount() {
  }

  HandleClick(){
    console.log('hello')

  }

  createCircles() {
    let circles = []
    let cx = 30
    let cy = 0

    this.state.sixArray.map(i => {
      cy = i === 1 ? 30 : cy + 60
      this.state.sixArray.map(() => {
          circles.push(<circle key={Math.random(1000)} cx={cx} cy={cy} r="25" fill="#FFD080"></circle>)
          cx = cx === 330 ? cx = 30 : cx = cx + 60
        })
    })
    return circles
  }

  render() {
    return (
      <div>
        <svg className="background box" height="360" width="360">
          {this.createCircles()}
        </svg>
      </div>

    )
  }
}

export default Mandala

