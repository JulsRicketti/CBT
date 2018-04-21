import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import {
  Transition,
  Divider,
  Icon,
  Step,
  Form,
  Button,
  Checkbox
} from 'semantic-ui-react'
import Link from 'next/link'
import Router from 'next/router'
import { createThought, updateThought } from '../api'
import { feelingList, thinkingErrors } from '../lib'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  user: { setLoggedInUser, setAccessToken },
  thought: { setThoughts, setCurrentThought }
} = actions

class NewThought extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    setLoggedInUser: PropTypes.func.isRequired,
    thoughts: PropTypes.array.isRequired,
    setNewThought: PropTypes.func.isRequired,
    setUpdatedThought: PropTypes.func.isRequired,
    currentThought: PropTypes.object.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      currentStep: 'situationDescription',
      isUpdating: Object.keys(props.currentThought).length > 0,
      situationDescription : {
        date: '',
        where: '',
        what: '',
        expectation: '',
        reality: ''
      },
      feelingDescription: {
        automaticThought: '',
        strengthInitial: 0
      },
      deconstruction: {
        supportingEvidence: '',
        nonSupportingEvidence: '',
        thinkingErrors: [],
        newBelief: '',
        strengthFinal: 0
      }
    }
  }

  componentDidMount () {
    const { setLoggedInUser } = this.props
    if (typeof localStorage !== 'undefined') {
      console.table({userId: localStorage.getItem('loggedInUserId'), accessToken: localStorage.getItem('accessToken')})
      setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
    }
  }
  
  onClickStep(step) {
    this.setState({ currentStep: step })
  }

  isCurrentStep(step) {
    return step === this.state.currentStep
  }

  renderSteps () {
    const { currentStep } = this.state
    return (
      <Step.Group>
        <Step
        link={!this.isCurrentStep('situationDescription')}
        active={this.isCurrentStep('situationDescription')}
        onClick={() => this.onClickStep('situationDescription')}>
          <Step.Content>Situation Description</Step.Content>
        </Step>
        <Step
        link={!this.isCurrentStep('feelingDescription')}
        active={this.isCurrentStep('feelingDescription')}
        onClick={() => this.onClickStep('feelingDescription')}>
          <Step.Content>Feeling Description</Step.Content>
        </Step>
        <Step
        link={!this.isCurrentStep('deconstruction')}
        active={this.isCurrentStep('deconstruction')}
        onClick={() => this.onClickStep('deconstruction')}>
          <Step.Content>Deconstruction</Step.Content>
        </Step>
      </Step.Group>
    )
  }

  renderForms () {
    const { currentStep } = this.state

    switch(currentStep) {
      case 'situationDescription':
        return this.renderThoughtDescriptionForm()
      case 'feelingDescription':
        return this.renderSituationDescriptionForm()
      case 'deconstruction':
        return this.renderDeconstructionForm()
    }
  }

  handleChangeForms (target, value) {
    // TODO: fix handling of thinking errors!
    // grab the current array, and push the new value in
    // then set the state
    const { currentStep } = this.state
    const obj = Object.assign({}, this.state)
    obj[currentStep][target] = value
    this.setState(obj)
  }

  renderThoughtDescriptionForm () {
    const { situationDescription } = this.state
    const {
      date,
      where,
      what,
      expectation,
      reality
    } = situationDescription
    return (
      <Form>
        <Form.Input
        type='date'
        value={date}
        onChange={(evt) => this.handleChangeForms('date', evt.target.value)}/>
        <Form.Input
        type='text'
        label='Where were you?'
        value={where}
        onChange={(evt) => this.handleChangeForms('where', evt.target.value)}/>
        <Form.Input
        type='text'
        label='What were you doing?'
        value={what}
        onChange={(evt) => this.handleChangeForms('what', evt.target.value)}/>
        <Form.TextArea
        type='text'
        label='What had you expected to happen?'
        value={expectation}
        onChange={(evt) => this.handleChangeForms('expectation', evt.target.value)}/>
        <Form.TextArea
        type='text'
        label='What happened?'
        value={reality}
        onChange={(evt) => this.handleChangeForms('reality', evt.target.value)}/>
      </Form>
    )
  }

  renderSituationDescriptionForm () {
    const { feelingDescription } = this.state
    const { automaticThought, strengthInitial } = feelingDescription
    return (
      <Form>
        <Form.Input
        label={`Strengh of emotion: ${strengthInitial}% `}
        min={0}
        max={100}
        value={strengthInitial}
        onChange={(evt) => this.handleChangeForms('strengthInitial', evt.target.value)}
        type='range'
        />
        <Form.Input
        label='Immediate Negative or Autormatic thought'
        value={automaticThought}
        onChange={(evt) => this.handleChangeForms('automaticThought', evt.target.value)}
        />
        <Form.Group>
          <label>What are the feelings generated by this reality?</label>
          <Divider hidden/>
          { feelingList.map((emotion, index) => 
            <Form.Input
            key={index}
            control={Checkbox}
            label={emotion}
            checked={!!feelingDescription[emotion]}
            onChange={(evt) => this.handleChangeForms(`${emotion}`, !feelingDescription[emotion])}
            />
          ) }
        </Form.Group>
        {this.emotionJustification()}
      </Form>
    )
  }

  emotionJustification () {
    const { feelingDescription } = this.state
    const selectedFeelings = feelingList.filter(x => !!feelingDescription[x])
    return (
        selectedFeelings.map((feeling, key) => 
            <Form.TextArea key={key} label={`Describe what caused you to feel ${feeling.toLowerCase()}`}/>
        )
    )
  }

  renderDeconstructionForm () {
    const { deconstruction } = this.state
    const {
      supportingEvidence,
      nonSupportingEvidence,
      newBelief,
      strengthFinal
    } = deconstruction
    // TODO: add the thinkingErrors description on hover for each one!
    return (
      <Form>
        <Form.TextArea
        label='Evidence that supports the negative feeling.'
        value={supportingEvidence}
        onChange={(evt) => this.handleChangeForms('supportingEvidence', evt.target.value)}
        />
        <Form.TextArea
        label='Evidence that does NOT support the negative feeling.'
        value={nonSupportingEvidence}
        onChange={(evt) => this.handleChangeForms('nonSupportingEvidence', evt.target.value)}
        />
        <Divider hidden/>
          <h4>
            Thinking errors:
            <a href='https://www.psychologytoday.com/blog/what-mentally-strong-people-dont-do/201501/10-thinking-errors-will-crush-your-mental-strength'>
            <Icon className='info circle'/>
            </a>
          </h4>
          { thinkingErrors.map((thought, index) => 
            <Form.Input
            key={index}
            control={Checkbox}
            label={thought.name}
            checked={!!deconstruction[thought.name]}
            onChange={(evt) => this.handleChangeForms(`${thought.name}`, !deconstruction[thought.name])}
            />
          ) }
        <Form.TextArea
          label=' Weighing up the evidence for and against as well as the thinking errors, what do you believe now?'
          value={newBelief}
          onChange={(evt) => this.handleChangeForms('newBelief', evt.target.value)}
          />
        <Form.Input
          label={`New strengh of emotion: ${strengthFinal}% `}
          min={0}
          max={100}
          value={strengthFinal}
          onChange={(evt) => this.handleChangeForms('strengthFinal', evt.target.value)}
          type='range'
          />
      </Form>
    )
  }

  onClickPrevious () {
    const { user, accessToken, currentThought } = this.props
    const { currentStep, feelingDescription, deconstruction } = this.state
    console.warn('desconstruction', deconstruction)
    const next = currentStep === 'feelingDescription'
    ? 'situationDescription' :
    'feelingDescription'

    const updateObject = currentStep === 'feelingDescription' ? {...feelingDescription} : {...deconstruction}

    // TODO: fix the acquiring of the thoughtId
    updateThought(user, accessToken, currentThought.id, updateObject)

    // this.setState({currentStep: next})
  }

  onClickNext () {
    const { user, accessToken, setNewThought, thoughts, setUpdatedThought, currentThought } = this.props
    const { currentStep, situationDescription, feelingDescription } = this.state
    const next = currentStep === 'feelingDescription'
    ? 'deconstruction' :
    'feelingDescription'

    if (next === 'feelingDescription') {
      const { date, where, what, expectation, reality } = situationDescription
      createThought(user, accessToken, date, where, what, expectation, reality)
        .then((newThought) => {
          setNewThought(thoughts, newThought)
        })
    } else {
      const { strengthInitial, automaticThought} = feelingDescription
      updateThought(user, accessToken, currentThought.id, feelingDescription)
        .then((updatedThought) => {
          setUpdatedThought(thoughts, updatedThought)
        })
    }
    this.setState({currentStep: next})
  }

  onClickFinish () {
    const { user, accessToken, setNewThought, thoughts, setUpdatedThought, currentThought } = this.props
    const { deconstruction } = this.state
  
    updateThought(user, accessToken, currentThought.id, deconstruction)
        .then((updatedThought) => {
          setUpdatedThought(thoughts, updatedThought, true) // now that this is finished, redirect!
        })
  }

  renderButtons () {
    const { currentStep } = this.state
    const showNext = currentStep === 'situationDescription' || currentStep === 'feelingDescription'
    const showPrevious = currentStep === 'feelingDescription' || currentStep === 'deconstruction'
    return (
      <div>
        {showPrevious ? <Button onClick={() => this.onClickPrevious()}>Previous</Button> : null}
        {showNext ? <Button onClick={() => this.onClickNext()}>Next</Button> : null}
        {currentStep === 'deconstruction' ? <Button color='black' onClick={() => this.onClickFinish()}>Finish</Button> : null}
      </div>
    )
  }

  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <h3>On each step carefully think of what you are about to write and
          reflect on what has been written.
        </h3>
        {this.renderSteps()}
        {this.renderForms()}
        <Divider hidden/>
        {this.renderButtons()}
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:  state.user.loggedInUser,
    accessToken: state.user.accessToken,
    thoughts: state.thought.thoughts,
    currentThought: state.thought.currentThought
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: (userId, accessToken) => {
      dispatch(setLoggedInUser(userId))
      dispatch(setAccessToken(accessToken))
    },
    setNewThought: (thoughtsList, newThought) => {
      dispatch(setCurrentThought(newThought))
      dispatch(setThoughts(thoughtsList.concat(newThought)))
    },
    setUpdatedThought: (thoughtsList, updatedThought, redirect = false) => {
      const updatedThoughtList = thoughtsList.map(x => {
        let thought = {...x}
        if (thought.id === updatedThought.id) {
          thought = updatedThought
        }
        return thought
      })
      dispatch(setThoughts(updatedThoughtList))

      if (redirect) {
        Router.push('/')
      }
    }
  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(NewThought)