import React from 'react'
import Page from '../components/Page'
import { Form, Table, Button, Icon, Modal } from 'semantic-ui-react'


export default class Challenges extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      showNewChallengeForm: false,
      title:'',
      description: '',
      difficulty: 0
    }
  }

  renderChallenges () {

  }

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  renderForm () {
    const {
      title,
      description,
      difficulty,
      difficultyList
    } = this.state
    return (
      <Modal closeIcon trigger={<Button onClick={() => this.setState({showNewChallengeForm: true})}><Icon className='plus'/>New Challenge</Button>}>
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
            <Button>Create</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }

  render () {
    const { pathname } = this.props.url
    const { showNewChallengeForm } = this.state
    return (
      <Page pathname={pathname}>
        <h1>Challenges</h1>
        <h4>In order to overcome social anxiety one needs to challenge themselves to
          come in direct contact with their fears, register and observe how they felt,
          how they reacted and the results of their challenges.
        </h4>
        {this.renderForm()}
      </Page>
    )
  }
}