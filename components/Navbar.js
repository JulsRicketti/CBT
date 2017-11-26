import React from 'react'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'

export default class extends React.Component {
	constructor (props, context) {
		super(props, context)

		this.state = {
			activeItem: null
		}
	}
	
	handleItemClick (evt, { name }) {
		this.setState({ activeItem: name })
	}

	render () {
		const { pathname } = this.props
		const { activeItem } = this.state

		return (
			<Segment inverted style={{ padding: 0, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999999 }}>
				<Menu inverted pointing secondary>
					<Menu.Item><Link href='/'>CBT</Link></Menu.Item>

					<Menu.Menu position='right'>
						<Menu.Item name=''/>
						<Link href='/signin'><Menu.Item name='Thought Record' active={pathname === '/signin'} onClick={(evt, opts) => this.handleItemClick(evt, opts)} /></Link>
						<Link href='/signin'><Menu.Item name='History' active={pathname === '/signin'} onClick={(evt, opts) => this.handleItemClick(evt, opts)} /></Link>
						<Link href='/signin'><Menu.Item name='Resources' active={pathname === '/signin'} onClick={(evt, opts) => this.handleItemClick(evt, opts)} /></Link>
						<Menu.Item>
							<Link href='/new_thought'><Button primary compact><Icon className='plus' />New Thought</Button></Link>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
    )
  }
}
