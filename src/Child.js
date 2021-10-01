import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

// all i do is receive the color from the parent
class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div onClick={()=>this.props.handleColorChange(getRandomColor())} // now that the function takes in an argument, must be a function that invokes handlecolorchange
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
