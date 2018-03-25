import React from 'react'
import PropTypes from 'prop-types'
import Config from '../config/config'
import Page from '../components/Page'
import axios from 'axios'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  challenge: { setChallenges }
} = actions
class ChallengeModal extends React.Component {

  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    
    this.state = {
      showNewChallengeForm: false,
      title: '',
      description: '',
      difficulty: 0
    }
  }

  resetForms () {
    this.setState({
      title: '',
      description: '',
      difficulty: 0
    })
  }

  disableCreateButton () {
    const { title, description, difficulty } = this.state
    return !title || !description || !difficulty
  }

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  handleCreateButton (evt) {
    evt.preventDefault()
    const { title, description, difficulty } = this.state
    const { user, accessToken, challenges, addChallenge } = this.props

    axios.post(`${Config.serverUrl}/challenges`, {
      title, description, difficulty, status: 'incomplete', userId: user},
      {params: { access_token: accessToken }}
    )
      .then(newChallenge => {
        addChallenge(challenges, newChallenge.data)
      })

    this.closeModal()
  }

  closeModal () {
    this.resetForms()
    this.setState({ showNewChallengeForm: false })
  }

  showModal () {
    this.setState({showNewChallengeForm: true})
    $(this.modal).modal('show')
  }

  render() {
    const {
      title,
      description,
      difficulty,
      showNewChallengeForm
    } = this.state

    return (
      <Modal closeIcon onClose={() => this.closeModal()} open={showNewChallengeForm} trigger={<Button onClick={() => this.setState({showNewChallengeForm: true})}><Icon className='plus'/>New Challenge</Button>}>
        <Modal.Header>New Challenge</Modal.Header>
        <Modal.Content>
          <Form>
            <Form.Input
              label='Challenge title'
              value={title}
              onChange={(evt) => this.handleChangeForms('title', evt.target.value)}
            />
            <Form.TextArea
              label='Challenge description'
              value={description}
              onChange={(evt) => this.handleChangeForms('description', evt.target.value)}
            />
            <Form.Input
              label='Difficulty'
              type='number'
              min={1}
              max={10}
              placeholder='Select difficulty'
              value={difficulty}
              onChange={(evt) => this.handleChangeForms('difficulty', evt.target.value)}
            />
            <Button onClick={(evt) => this.handleCreateButton(evt)} disabled={this.disableCreateButton()}>Create</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addChallenge (challengesList, newChallenge) {
      dispatch(setChallenges(challengesList.concat(newChallenge)))
    }

  }
}

export default withRedux(createStore, null, mapDispatchToProps)(ChallengeModal)