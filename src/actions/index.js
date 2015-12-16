export const ADD_POINTS = 'ADD_POINTS'
export const REMOVE_POINTS = 'REMOVE_POINTS'
export const RESTART = 'RESTART'

import { range } from 'd3'


export function addPoints(count) {
  return {
    type: ADD_POINTS,
    points: range(count).map(() => range(3).map(Math.random))
  }
}

export function removePoints(count) {
  return { type: REMOVE_POINTS, count  }
}

export function restart() {
  return { type: RESTART  }
}
