import React from 'react'
import Page from '../components/Page'
import { Form, Tab, Button, Icon, Modal, Divider } from 'semantic-ui-react'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'
class Challenges extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      showNewChallengeForm: false,
      title: '',
      description: '',
      difficulty: 0
    }
  }

  componentDidMount () {
    
    axios.get('http://localhost:3001/api/challenges', {params: { access_token: this.props.user.id }})
      .then(res => {
        console.warn('hereeee', res)
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
    const { setTitle, setDescription, setDifficulty } = this.props

    setTitle(title)
    setDescription(description)
    setDifficulty(difficulty)
    this.closeModal()
  }

  closeModal () {
    this.setState({ showNewChallengeForm: false })
  }

  renderModalForm () {
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

  renderChallenges (status) {
    return (
      <Tab.Pane>{name}</Tab.Pane>
    )
  }

  showModal () {
    this.setState({showNewChallengeForm: true})
    $(this.modal).modal('show')
  }

  render () {
    const { pathname } = this.props.url
    const { showNewChallengeForm } = this.state
    // TODO: create a different function for each status!
    const panes = [
      {menuItem: 'Incompleted Challenges', render: () => this.renderChallenges('incomplete') },
      {menuItem: 'Completed Challenges', render: () => this.renderChallenges('complete') }
    ]
    return (
      <Page pathname={pathname}>
        <h1>Challenges</h1>
        <h4>In order to overcome social anxiety one needs to challenge themselves to
          come in direct contact with their fears, register and observe how they felt,
          how they reacted and the results of their challenges.
        </h4>
        {this.renderModalForm()}
        <Divider/>
        <Tab panes={panes}/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(Challenges)