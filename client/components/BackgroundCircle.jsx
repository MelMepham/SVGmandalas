import React from 'react'

class BackgroundCircle extends React.Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click() {
    const { clickButton, id } = this.props
    console.log(id)
    clickButton(id)
  }

  render() {
    const { cx, cy, fill, id } = this.props
    return (
        <circle 
          onClick={this.click}
          key={id} 
          fill={fill} 
          cx={cx} 
          cy={cy} 
          r="25" />
    )
  }
}


module.exports = {
  BackgroundCircle: BackgroundCircle
} 