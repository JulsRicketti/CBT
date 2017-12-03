import React from 'react'
import Page from '../components/Page'

export default class ThoughtRecord extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <h1>Thought Record</h1>
      </Page>
    )
  }
}