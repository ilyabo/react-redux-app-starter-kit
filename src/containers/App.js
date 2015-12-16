import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions'
import Counter from '../components/Counter'



import './App.scss'


export default class App extends Component {

  render() {
    let { appState, addToCounter } = this.props;
    return (
      <div className="App">
        <div>Hello, world!</div>
        <Counter
          counter={ appState.counter  }
          addToCounter={ addToCounter }/>
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
