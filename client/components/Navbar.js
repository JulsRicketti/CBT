import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'
import { actions } from '../store'
import { connect } from 'react-redux'

const {
  user: { setLoggedInUser }
} = actions

class Navbar extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  componentWillMount () {
    if (typeof localStorage !== 'undefined') {
      try {
        console.warn(localStorage.getItem('jwtToken'))
        this.props.unsetLoggedInUser()
      } catch (e) {
        // do nothing
      }
    }
  }

  handleLogout () {
    localStorage.removeItem('jwtToken')
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
            <Link href='/challenges'><Menu.Item name='Challenges' active={pathname === '/challenges'} /></Link>
            <Link href='/thought_record'><Menu.Item name='Thought Record' active={pathname === '/thought_record'} /></Link>
            <Menu.Item>
              <Link href='/new_thought'><Button primary compact><Icon className='plus' />New Thought</Button></Link>
            </Menu.Item>
            {this.props.user ? <Menu.Item name='Logout' onClick={() => this.handleLogout()}/> : <Link href='/signin'><Menu.Item name='Sign In' active={pathname === '/signin'} /></Link>}
            {this.props.user ? null : <Link href='/signup'><Menu.Item name='Sign Up' active={pathname === '/signup'} /></Link>}
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
    setLoggedInUser () {
      // TODO: automatically set up the logged in user
    },
    unsetLoggedInUser () {
      dispatch(setLoggedInUser(null))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)