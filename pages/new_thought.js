import React from 'react'
import Page from '../components/Page'
import { Divider, Icon, Step, Form, Button } from 'semantic-ui-react'

export default class NewThought extends React.Component {
  
  constructor (props) {
    super(props)

    this.state = {
      currentStep: 1,
    }
  }
  
  onClickStep(stepNumber) {
    this.setState({ currentStep: stepNumber })
  }

  isCurrentStep(stepNumber) {
    return stepNumber === this.state.currentStep
  }

  renderSteps () {
    const { currentStep } = this.state
    return (
      <Step.Group>
        <Step link={!this.isCurrentStep(1)} active={this.isCurrentStep(1)} onClick={() => this.onClickStep(1)}>
          <Step.Content>Situation Description</Step.Content>
        </Step>
        <Step link={!this.isCurrentStep(2)} active={this.isCurrentStep(2)} onClick={() => this.onClickStep(2)}>
          <Step.Content>Feeling Description</Step.Content>
        </Step>
        <Step link={!this.isCurrentStep(3)} active={this.isCurrentStep(3)} onClick={() => this.onClickStep(3)}>
          <Step.Content>Deconstruction</Step.Content>
        </Step>
      </Step.Group>
    )
  }

  renderForms () {
    const { currentStep } = this.state

    switch(currentStep) {
      case 1:
        return this.renderThoughtDescriptionForm()
      case 2:
        return this.renderSituationDescriptionForm()
      case 3:
        return this.renderDeconstructionForm()
    }
  }

  renderThoughtDescriptionForm () {
    return (
      <Form>
        <Form.Input type='date'/>
        <Form.Input type='text' label='Where were you?'/>
        <Form.Input type='text' label='What were you doing?'/>
        <Form.TextArea type='text' label='What happened?' />
      </Form>
    )
  }

  renderSituationDescriptionForm () {
    return (
      <h3>Feeling Description Form</h3>
    )
  }

  renderDeconstructionForm () {
    return (
      <h3>Deconstruction Form</h3>
    )
  }

  onClickPrevious () {
    const { currentStep } = this.state
    this.setState({currentStep: currentStep - 1})
  }

  onClickNext () {
    const { currentStep } = this.state
    this.setState({currentStep: currentStep + 1})
  }

  renderButtons () {
    const { currentStep } = this.state
    const showNext = currentStep === 1 || currentStep === 2
    const showPrevious = currentStep === 2 || currentStep === 3
    return (
      <div>
        {showPrevious ? <Button onClick={()=>this.onClickPrevious()}>Previous</Button> : null}
        {showNext ? <Button onClick={()=>this.onClickNext()}>Next</Button> : null}
      </div>
    )
  }

  render () {
    return (
      <Page>
        {this.renderSteps()}
        {this.renderForms()}
        <Divider hidden/>
        {this.renderButtons()}
      </Page>
    )

  }
}