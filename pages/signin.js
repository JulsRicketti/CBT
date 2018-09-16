import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import Link from 'next/link'
import Router from 'next/router'
import authenticate from '../lib/authenticate'
import { Form, Button, Divider, Header } from 'semantic-ui-react'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  user: { setLoggedInUser }
} = actions


class SignIn extends React.Component {

  static propTypes = {
    user: PropTypes.object,
    logInUser: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  static async getInitialProps (props) {
    console.warn(props)
  }

  handleChangeForms (target, value) {
    const obj = {}
    obj[target] = value
    this.setState(obj)
  }

  handleSignInButton (evt) {
    evt.preventDefault()

    const { email, password } = this.state

    authenticate(email, password)
    .then(user => {
      this.props.logInUser(user.data)
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
          <Button onClick={(evt) => this.handleSignInButton(evt)}>Sign In</Button>
          <Link href='/signup'>New to the app? Sign up here!</Link>
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

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(SignIn)