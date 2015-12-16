import {
  ADD_POINTS,
  REMOVE_POINTS,
  RESTART
} from '../actions'

import { range } from 'd3'

export default createReducer(

  {
    counter: 0,
    points: range(50).map(() => range(3).map(Math.random))
  },

  {

    [ ADD_POINTS ] (state, action) {

      let { points } = state;
      return {
        ...state,
        points: points.concat(action.points)
      }

    },

    [ REMOVE_POINTS ] (state, action) {

      let { points } = state;
      return {
        ...state,
        points: points.slice(points, - action.count)
      }

    },

    [ RESTART ] (state, action) {

      return {
        ...state,
        points: []
      }

    }
  }
)


function createReducer(initialState, handlers) {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}