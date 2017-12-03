import React from 'react'
import Page from '../components/Page'

export default class Resources extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <h1>Resources</h1>
      </Page>
    )
  }
}