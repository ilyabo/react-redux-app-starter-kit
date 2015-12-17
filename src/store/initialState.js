import { range } from 'd3'

export default {
  points: range(50).map(() => range(3).map(Math.random))
}