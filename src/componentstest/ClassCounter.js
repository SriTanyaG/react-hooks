import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment = ()=> {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
    return (
      <div>
        <button onClick={this.increment}>Clicked {this.state.count} time</button>
      </div>
    )
  }
}

export default ClassCounter
