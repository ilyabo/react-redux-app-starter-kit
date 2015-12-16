import React, { Component, PropTypes } from 'react'
import { scale } from 'd3';

import './BubbleChart.scss'

export default class BubbleChart extends Component {

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired
  }

  render() {
    let { width, height, points } = this.props
    let x = scale.linear().domain([0, 1]).range([0, width]),
        y = scale.linear().domain([0, 1]).range([height, 0]),
        r = scale.sqrt().domain([0, 1]).range([0, 20])

    return (
      <svg className="BubbleChart" width={ width } height={ height }>
        { points.map((d, i) =>
          <circle className="BubbleChart__circle"
                  key={ i }
                  cx={ x(d[0]) } cy={ y(d[1]) }
                  r={ r(d[2]) }/>)}
      </svg>
    )
  }

}

