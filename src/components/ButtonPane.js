import React, { Component, PropTypes } from 'react'

import './ButtonPane.scss'

class ButtonPane extends Component {

  static propTypes = {
    addPoints: PropTypes.func.isRequired,
    removePoints: PropTypes.func.isRequired,
    restart: PropTypes.func.isRequired
  }

  handleMore = () => {
    this.props.addPoints(5)
  }

  handleLess = () => {
    this.props.removePoints(5)
  }

  handleRestart = () => {
    this.props.restart()
  }

  render() {
    return (
      <div className="ButtonPane">
        <button className="ButtonPane__button" onClick={ this.handleMore }>More</button>
        <button className="ButtonPane__button" onClick={ this.handleLess }>Less</button>
        <button className="ButtonPane__button" onClick={ this.handleRestart }>Clear</button>
      </div>
    )
  }
}


export default ButtonPane
