import React from 'react'

class BackgroundCircle extends React.Component {
  constructor(props) {
    super(props)

    this.click = this.click.bind(this)
  }

  click() {
    const { clickButton, id } = this.props
    clickButton(id)
  }

  render() {
    const { cx, cy, fill, id } = this.props

    const opacityTime = Math.floor(Math.random() * 20).toString() + "s"
    return (
      <svg>
        <circle
          cx={cx}
          cy={cy}
          r="30"
          fill="#bada55">

          <animate 
            attributeType="CSS" 
            attributeName="opacity" 
            from="1" to="1"
            dur={opacityTime}
            values="1; 0; 1"
            repeatCount="indefinite" />

        </circle>

        <svg>
          <circle
            onClick={this.click}
            key={id}
            fill={fill}
            cx={cx}
            cy={cy}
            r="20" />
        </svg>
      </svg>



    )
  }
}


module.exports = {
  BackgroundCircle: BackgroundCircle
} 