export const ADD_TO_COUNTER = 'ADD_TO_COUNTER'

export function addToCounter(count) {
  return { type: ADD_TO_COUNTER, count }
}
