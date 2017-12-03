import React from 'react'
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
import { feelingList } from '../lib'

export default class NewThought extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      currentStep: 'feelingDescription', // TODO: change back to situationDescription
      situationDescription : {
        date: '',
        where: '',
        what: '',
        expectation: '',
        situation: ''
      },
      feelingDescription: {
        negativeThought: '',
        emotionStrength: 0
      },
      deconstruction: {

      }
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
      situation
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
        value={situation}
        onChange={(evt) => this.handleChangeForms('situation', evt.target.value)}/>
      </Form>
    )
  }

  renderSituationDescriptionForm () {
    const { feelingDescription } = this.state
    const { negativeThought, emotionStrength } = feelingDescription
    return (
      <Form>
        <Form.Input
        label={`Strengh of emotion: ${emotionStrength}% `}
        min={0}
        max={100}
        value={emotionStrength}
        onChange={(evt) => this.handleChangeForms('emotionStrength', evt.target.value)}
        type='range'
        />
        <Form.Input
        label='Immediate Negative or Autormatic thought'
        value={negativeThought}
        onChange={(evt) => this.handleChangeForms('negativeThought', evt.target.value)}
        />
        <Form.Group>
          <label>What are the feelings generated by this situation?</label>
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
    return (
      <h3>Deconstruction Form</h3>
    )
  }

  onClickPrevious () {
    const { currentStep } = this.state
    const next = currentStep === 'feelingDescription'
    ? 'situationDescription' :
    'feelingDescription'
    this.setState({currentStep: next})
  }

  onClickNext () {
    const { currentStep } = this.state
    const next = currentStep === 'feelingDescription'
    ? 'deconstruction' :
    'feelingDescription'
    this.setState({currentStep: next})
  }

  renderButtons () {
    const { currentStep } = this.state
    const showNext = currentStep === 'situationDescription' || currentStep === 'feelingDescription'
    const showPrevious = currentStep === 'feelingDescription' || currentStep === 'deconstruction'
    return (
      <div>
        {showPrevious ? <Button onClick={()=>this.onClickPrevious()}>Previous</Button> : null}
        {showNext ? <Button onClick={()=>this.onClickNext()}>Next</Button> : null}
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