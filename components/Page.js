import React from 'react'
import Navbar from './Navbar'

export default class extends React.PureComponent {
  render () {
    const { pathname } = this.props
    return (
      <div id='page'>
        <Navbar pathname={pathname}/>
        {this.props.children}
      </div>
    )
  }
}
