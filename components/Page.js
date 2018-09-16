import React from 'react'
import Navbar from './Navbar'
import { Container } from 'semantic-ui-react'

export default class extends React.PureComponent {
  render () {
    const { pathname } = this.props
    return (
      <div id='page'>
        <Navbar pathname={pathname}/>
        <Container>
          {this.props.children}
        </Container>
      </div>
    )
  }
}
