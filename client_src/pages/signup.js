import React from 'react'
import Page from '../components/Page'
import Link from 'next/link'
import { Form, Button, Divider, Header } from 'semantic-ui-react'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  handleSignUpButton (evt) {
    evt.preventDefault()
  }

  render () {
    const { email, password, passwordConfirm } = this.state
    return (
      <Page>
        <Header>Sign Up</Header>
        <Form>
          <Form.Input
            label='Email'
            type='email'
            value={email}
            onChange={(evt) => this.handleChangeForms('email', evt.target.value)}
          />
          <Form.Input
            label='Password'
            type='password'
            value={password}
            onChange={(evt) => this.handleChangeForms('password', evt.target.value)}
          />
          <Form.Input
            label='Confirm Password'
            type='password'
            value={passwordConfirm}
            onChange={(evt) => this.handleChangeForms('passwordConfirm', evt.target.value)}
          />
          <Divider />
          <Button onClick={(evt) => this.handleSignUpButton(evt)}>Sign Up</Button>
          <Link href='/signin'>Already a member? Sign in here!</Link>
        </Form>
      </Page>
    )
  }
}