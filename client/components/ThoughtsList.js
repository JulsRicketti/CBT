import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'semantic-ui-react'

export default class ThoughtsList extends React.Component {
  static propTypes = {
    thoughts: PropTypes.array.isRequired
  }
  render () {
    const { thoughts } = this.props
    return (
      <div>
        {thoughts.map(x => x.date)}
      </div>
    )
  }
}