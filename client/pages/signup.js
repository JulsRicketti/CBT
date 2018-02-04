import React from 'react'
import Page from '../components/Page'
import Link from 'next/link'
import { Label, Form, Button, Divider, Header, Input } from 'semantic-ui-react'
import axios from 'axios'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      passwordConfirm: ''
    }
  }

  disableSignUpButton () {
    const { email, password, passwordConfirm } = this.state
    return (
      (!email.length || !password.length || !passwordConfirm.length) ||
      password !== passwordConfirm
    )
  }

  isPasswordDifferent () {
    const { password, passwordConfirm } = this.state
    return password !== passwordConfirm
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
          <Button onClick={(evt) => this.handleSignUpButton(evt)} disabled={this.disableSignUpButton()}>Sign Up</Button>
          <Link href='/signin'>Already a member? Sign in here!</Link>
        </Form>
      </Page>
    )
  }
}