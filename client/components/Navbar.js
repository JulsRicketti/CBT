import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'
import Router from 'next/router'
import { actions } from '../store'
import { connect } from 'react-redux'
import unauthenticate from '../lib/unauthenticate'

const {
  challenge: { setChallenges },
  user: { setLoggedInUser }
} = actions

class Navbar extends React.Component {
  static propTypes = {
    user: PropTypes.string,
    setLoggedInUser: PropTypes.func.isRequired,
    unsetLoggedInUser: PropTypes.func.isRequired
  }

  componentDidMount () {
    if (typeof localStorage !== 'undefined') {
      this.props.setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
    }
  }

  handleLogout () {
    unauthenticate()
    this.props.unsetLoggedInUser()
  }

  render () {
    const { pathname, user } = this.props

    return (
      <Segment inverted style={{ padding: 0, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999999 }}>
        <Menu inverted pointing secondary>
          <Menu.Item><Link href='/'>CBT</Link></Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name=''/>
            {user ? <Link href='/challenges'><Menu.Item name='Challenges' active={pathname === '/challenges'} /></Link> : null}
            {user ? <Link href='/thoughtRecord'><Menu.Item name='Thought Record' active={pathname === '/thoughtRecord'} /></Link> : null}
            {
              user 
                ?<Menu.Item>
                  <Link href='/newThought'><Button primary compact><Icon className='plus' />New Thought</Button></Link>
                </Menu.Item>
                : null
            }
            {user ? <Menu.Item name='Logout' onClick={() => this.handleLogout()}/> : <Link href='/signin'><Menu.Item name='Sign In' active={pathname === '/signin'} /></Link>}
            {user ? null : <Link href='/signup'><Menu.Item name='Sign Up' active={pathname === '/signup'} /></Link>}
          </Menu.Menu>
        </Menu>
      </Segment>
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
    setLoggedInUser (user) {
      dispatch(setLoggedInUser(user))
    },
    unsetLoggedInUser () {
      dispatch(setChallenges([]))
      dispatch(setLoggedInUser(null))
      Router.push('/') // go to the home page
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)