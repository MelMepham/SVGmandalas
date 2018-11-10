
import React from 'react'
import createId from 'incremental-id'

var BackgroundCircle = require('./BackgroundCircle').BackgroundCircle

import { HashRouter as Router, Route } from 'react-router-dom'

class Mandala extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sixArray: [1, 2, 3, 4, 5, 6],
      baseLayerCircles: []
    }
    this.clickButton = this.clickButton.bind(this)
    this.createCircles = this.createCircles.bind(this)
  }

  componentDidMount() {
    this.createCircles()
  }

  clickButton(id) {
    let newCircles = this.state.baseLayerCircles.map(circle => {
      if (circle.id === id) {
        circle.fill = "#bada55"
      }
      return circle
    })
    this.setState({ baseLayerCircles: newCircles })
  }

  createCircles() {
    let circles = []
    let cx = 30
    let cy = 0

    this.state.sixArray.map(i => {
      cy = i === 1 ? 30 : cy + 60
      this.state.sixArray.map(() => {
        let circle = {
          id: createId(),
          cx: cx,
          cy: cy,
          fill: "#FFD080"
        }
        circles.push(circle)
        cx = cx === 330 ? cx = 30 : cx = cx + 60
      })
    })
    this.setState({ baseLayerCircles: circles })
  }

  render() {
    const opacityTime = Math.floor(Math.random() * 20).toString() + "s"

    return (
      <div>
        <svg height="360" width="360">

            {this.state.baseLayerCircles.map(circle => {
              return <BackgroundCircle
                key={circle.id}
                id={circle.id}
                fill={circle.fill}
                cx={circle.cx}
                cy={circle.cy}
                clickButton={this.clickButton}
              />
            })
            }
        </svg>
      </div>

    )
  }
}

export default Mandala

