import React, { Component, PropTypes } from 'react'

import './Counter.scss'

class Counter extends Component {

  static propTypes = {
    addToCounter: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired
  }

  render() {
    const { counter, addToCounter } = this.props
    return (
      <div className="Counter">
        <div className="Counter__label">Count:</div>
        <div className="Counter__value">{ counter }</div>
        <div className="Counter__buttons">
          <button className="Counter__button" onClick={ () => addToCounter(1) }>+</button>
          <button className="Counter__button" onClick={ () => addToCounter(-1) }>-</button>
        </div>
      </div>
    )
  }
}


export default Counter
