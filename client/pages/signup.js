import React from 'react'
import Page from '../components/Page'
import Config from '../config/config'
import Link from 'next/link'
import Router from 'next/router'
import { Label, Form, Button, Divider, Header, Input } from 'semantic-ui-react'
import axios from 'axios'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'
import authenticate from '../lib/authenticate';

const {
  user: { setLoggedInUser }
} = actions

class SignUp extends React.Component {
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

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  handleSignUpButton (evt) {
    evt.preventDefault()
    const { email, password } = this.state

    // user creation
    axios.post(`${Config.serverUrl}/api/users`, { email, password })
      .then(res => {
        authenticate(email, password)
        .then(user => {
          window.USER = user
          this.props.logInUser(user.data)
        })
      })

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

const mapStateToProps = (state) => {
  return {
    user: state.user.loggedInUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
     logInUser (user) {
      dispatch(setLoggedInUser(user))
      Router.push('/')
    }
  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(SignUp)