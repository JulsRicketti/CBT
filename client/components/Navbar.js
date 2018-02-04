import React from 'react'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'

export default class extends React.Component {

  constructor (props, context) {
    super(props, context)

    this.state = {}

    if (typeof localStorage !== 'undefined') {
      try {
        console.warn(localStorage.getItem('jwtToken'))
        this.state.isSignedIn = JSON.parse(localStorage.getItem('jwtToken')) || ''
      } catch (e) {
        // do nothing
      }
    }

  }

  handleLogout () {
    localStorage.removeItem('jwtToken')
    this.setState({isSignedIn : ''})
  }

  render () {
    const { pathname } = this.props

    console.warn('is Signed in? ',this.state.isSignedIn)
    return (
      <Segment inverted style={{ padding: 0, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999999 }}>
        <Menu inverted pointing secondary>
          <Menu.Item><Link href='/'>CBT</Link></Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item name=''/>
            <Link href='/challenges'><Menu.Item name='Chasasadsllenges' active={pathname === '/challenges'} /></Link>
            <Link href='/thought_record'><Menu.Item name='Thought Record' active={pathname === '/thought_record'} /></Link>
            {/* <Link href='/resources'><Menu.Item name='Resources' active={pathname === '/resources'} /></Link> */}
            <Menu.Item>
              <Link href='/new_thought'><Button primary compact><Icon className='plus' />New Thought</Button></Link>
            </Menu.Item>
            {this.state.isSignedIn ? <Menu.Item name='Logout' onClick={() => this.handleLogout()}/> : <Link href='/signin'><Menu.Item name='Sign In' active={pathname === '/signin'} /></Link>}
            {this.state.isSignedIn ? null : <Link href='/signup'><Menu.Item name='Sign Up' active={pathname === '/signup'} /></Link>}
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
