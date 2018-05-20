import React from 'react'
import PropTypes from 'prop-types'
import { createChallenge, updateChallenge } from '../api'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid, Header } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

export default class ViewThoughtModal extends React.Component {
  static propTypes = {
    thought: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)
    
    this.state = {
      showViewThoughtModal: false
    }
  }

  closeModal () {
    this.setState({ showViewThoughtModal: false })
  }

  displayField (field) {

    if (Array.isArray(field)) {
      console.warn('hello!', field)
    }
    // TODO: when something hasn't been completed yet, link to the new thought page to complete it!
    return field ? field : <span>Not yet completed</span>
  }

  render() {
    const { thought } = this.props
    const modalTrigger = <Button onClick={() => this.setState({showViewThoughtModal: true})}>View</Button>
    console.warn(thought)
    return (
      <Modal closeIcon onClose={() => this.closeModal()} trigger={modalTrigger}>
        <Modal.Header>View Thought</Modal.Header>

        <Modal.Content>
          <Button><Icon name='print'/> Print</Button>
          <Header as='h4'>Date: {new Date(thought.date).toDateString()}</Header>
          <Header as='h3'>Situation Description</Header>

          <p><strong>What happened?</strong></p>
          <p>{this.displayField(thought.what)}</p>

          <p><strong>Where did it happen?</strong></p>
          <p>{this.displayField(thought.where)}</p>

          <p><strong>What did you expect would happen?</strong></p>
          <p>{this.displayField(thought.expectation)}</p>

          <p><strong>What actually happened?</strong></p>
          <p>{this.displayField(thought.reality)}</p>

          <Header as='h3'>Feeling Description</Header>
          <p><strong>Initial strenght of negative feeling</strong></p>
          <p>{this.displayField(thought.strengthInitial)}</p>

          <p><strong>Immediate negative or automatic thoughts</strong></p>
          <p>{this.displayField(thought.automaticThought)}</p>

          <p>TODO: handle negative feelings generated</p>

          <Header as='h3'>Deconstruction</Header>
          <p><strong>Evidence that supports the negative feeling</strong></p>
          <p>{this.displayField(thought.supportingEvidence)}</p>

          <p><strong>Evidence that does NOT support the negative feeling</strong></p>
          <p>{this.displayField(thought.nonSupportingEvidence)}</p>

          <p><strong>Thinking Errors</strong></p>
          <p>{this.displayField(thought.thinkingErrors)}</p>

          <p><strong>New belief after reflection</strong></p>
          <p>{this.displayField(thought.newBelief)}</p>

          <p><strong>New strength of emotion</strong></p>
          <p>{this.displayField(thought.strengthFinal)}</p>

        </Modal.Content>
      </Modal>
    )
  }
}