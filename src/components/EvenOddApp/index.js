import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: Math.round(Math.random() * 100),
    }))
  }

  isCheck = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {count} = this.state
    const even = this.isCheck()
    return (
      <div className="bg-card">
        <h1>Count {count}</h1>
        <p>Count is {even}</p>
        <button type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="note">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
