import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import ButtonPane from '../components/ButtonPane'
import BubbleChart from '../components/BubbleChart'



import './App.scss'


export default class App extends Component {

  render() {
    let { appState } = this.props;
    let { addPoints, removePoints, restart } = this.props;
    return (
      <div className="App">
        <div>Hello, bubbles!</div>

        <ButtonPane {...{ addPoints, removePoints, restart }} />

        <BubbleChart width={ 400 } height={ 400 }
                     points={ appState.points }/>
      </div>
    )
  }

}


function mapStateToProps(state) {
  return {
    appState: state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
