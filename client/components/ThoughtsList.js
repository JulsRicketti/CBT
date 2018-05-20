import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button, Icon } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import ViewThoughtModal from './ViewThoughtModal'
import { removeThought } from '../api'
import { createStore, actions } from '../store'

const {
  thought: { setThoughts }
} = actions

class ThoughtsList extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    thoughts: PropTypes.array.isRequired
  }

  removeThought (thoughtId) {
    const { user, accessToken, thoughts, setThoughts } = this.props

    removeThought(user, accessToken, thoughtId, thoughts)
      .then((remainingThoughts) => { setThoughts(remainingThoughts) })
  }

  handleEdit (thoughtId) {
    console.log('handle edit', thoughtId)
    // set the state and then go to the new thought page
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
                    <ViewThoughtModal thought={thought}/>
                    <Button onClick={() => this.handleEdit(thought.id)}>Edit</Button>
                    <Button icon negative title='Remove' onClick={() => this.removeThought(thought.id)}><Icon name='remove'/></Button>
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

const mapDispatchToProps = (dispatch) => {
  return {
   setThoughts (thoughts) {
     dispatch(setThoughts(thoughts))
   }
  }
}

export default withRedux(createStore, null, mapDispatchToProps)(ThoughtsList)