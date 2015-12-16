import createReducer from './createReducer'
import {
  ADD_TO_COUNTER
} from '../actions'



export default createReducer(

  {
    counter: 0
  },

  {

    [ ADD_TO_COUNTER ] (state, action) {

      return {
        ...state,
        counter: state.counter + action.count
      }

    }
  }
)