import React from 'react'
import { Menu, Segment, Icon, Button } from 'semantic-ui-react'
import Link from 'next/link'

export default class extends React.Component {

	render () {
		const { pathname } = this.props
		return (
			<Segment inverted style={{ padding: 0, position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999999 }}>
				<Menu inverted pointing secondary>
					<Menu.Item><Link href='/'>CBT</Link></Menu.Item>

					<Menu.Menu position='right'>
						<Menu.Item name=''/>
						<Link href='/challenges'><Menu.Item name='Challenges' active={pathname === '/challenges'} /></Link>
						<Link href='/thought_record'><Menu.Item name='Thought Record' active={pathname === '/thought_record'} /></Link>
						<Link href='/resources'><Menu.Item name='Resources' active={pathname === '/resources'} /></Link>
						<Menu.Item>
							<Link href='/new_thought'><Button primary compact><Icon className='plus' />New Thought</Button></Link>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</Segment>
    )
  }
}
