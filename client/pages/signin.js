import React from 'react'
import Page from '../components/Page'
import Link from 'next/link'
import axios from 'axios'
import { Form, Button, Divider, Header } from 'semantic-ui-react'

export default class SignIn extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  handleSignUpButton (evt) {
    evt.preventDefault()
    const { email, password } = this.state

    axios.post('http://localhost:3001/api/users/login', { email, password })
    .then(res => {
      const token = res.data.id
      localStorage.setItem('jwtToken', token)
      console.warn('successfully logged in!')
    })
  }

  render () {
    const { email, password } = this.state
    return (
      <Page>
        <Header>Sign In</Header>
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
          <Divider />
          <Button onClick={(evt) => this.handleSignUpButton(evt)}>Sign In</Button>
          <Link href='/signup'>New to the app? Sign up here!</Link>
        </Form>
      </Page>
    )
  }
}