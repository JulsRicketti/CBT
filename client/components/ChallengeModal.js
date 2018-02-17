import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  challenge: { setNewChallenge }
} = actions
class ChallengeModal extends React.Component {

  static propTypes = {
    user: PropTypes.object.isRequired
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
    const { user, addChallenge } = this.props

    axios.post('http://localhost:3001/api/challenges', {
      title, description, difficulty, status: 'incomplete', userId: user.userId},
      {params: { access_token: this.props.user.id }}
    )
      .then(challenge => {
        console.warn('success!', challenge)
        this.props.addChallenge(challenge)
      })

    this.closeModal()
  }

  closeModal () {
    this.setState({ showNewChallengeForm: false })
  }

  showModal () {
    this.setState({showNewChallengeForm: true})
    $(this.modal).modal('show')
  }

  render() {
    console.warn('user (challengeModal)', this.props.user)
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
    addChallenge (challenge) {
      dispatch(setNewChallenge(challenge))
    }

  }
}

export default withRedux(createStore, null, mapDispatchToProps)(ChallengeModal)