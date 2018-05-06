import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'

export default class ThoughtsList extends React.Component {
  static propTypes = {
    thoughts: PropTypes.array.isRequired
  }

  render () {
    const { thoughts } = this.props

    return (
      <Table celled striped compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Situation</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            thoughts.map((thought, key) => {
              const date = new Date(thought.date).toDateString()

              return (
                <Table.Row key={key}>
                  <Table.Cell><strong>{date}</strong></Table.Cell>
                  <Table.Cell>{thought.what}</Table.Cell>
                  <Table.Cell>
                    <Button>View</Button>
                    <Button>Edit</Button>
                    <Button icon negative title='Remove'><Icon name='remove'/></Button>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    )
  }
}