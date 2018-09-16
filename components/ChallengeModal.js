import React from 'react'
import PropTypes from 'prop-types'
import { createChallenge, updateChallenge } from '../api'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  challenge: { setChallenges }
} = actions
class ChallengeModal extends React.Component {

  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    isUpdating: PropTypes.bool,
    challenges: PropTypes.array,
    challengeId: PropTypes.number,
    difficulty: PropTypes.number,
    status: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
  }

  constructor (props) {
    super(props)
    
    this.state = {
      showNewChallengeForm: false,
      title: props.title || '',
      description: props.description || '',
      difficulty: props.difficulty || 0,
      challengeId: props.challengeId || ''
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
    const { user, accessToken, challenges, addChallenge, updateChallenges, challengeId, status, isUpdating } = this.props

    if (isUpdating) {

      updateChallenge(user, accessToken, challengeId, {title, description, difficulty, status})
        .then(updatedChallenge => {
          updateChallenges(challenges, updatedChallenge)
        })
    } else {
      createChallenge(user, accessToken, title, description, difficulty)
        .then(newChallenge => {
          addChallenge(challenges, newChallenge)
        })
    }

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

    const { isUpdating } = this.props

    const modalTrigger = (
      isUpdating
        ? <Button onClick={() => this.setState({showNewChallengeForm: true})}>Update</Button>
        : <Button onClick={() => this.setState({showNewChallengeForm: true})}><Icon className='plus'/>New Challenge</Button>
    )

    const modalHeader = (
      isUpdating
        ? 'Update Challenge'
        : 'New Challenge'
    )

    return (
      <Modal closeIcon onClose={() => this.closeModal()} open={showNewChallengeForm} trigger={modalTrigger}>
        <Modal.Header>{modalHeader}</Modal.Header>
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
              onFocus={(evt) => evt.target.select()}
              onChange={(evt) => this.handleChangeForms('difficulty', evt.target.value)}
            />
            <Button onClick={(evt) => this.handleCreateButton(evt)} disabled={this.disableCreateButton()}>{isUpdating ? 'Update': 'Create'}</Button>
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
    },
    updateChallenges (challengeList, updatedChallenge) {
      const updatedChallengeList = challengeList.map(x => {
        let challenge = {...x}
        if (challenge.id === updatedChallenge.id) {
          challenge = updatedChallenge
        }
        return challenge
      })
      dispatch(setChallenges(updatedChallengeList))
    }

  }
}

export default withRedux(createStore, null, mapDispatchToProps)(ChallengeModal)