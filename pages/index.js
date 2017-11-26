import React from 'react'
import Page from '../components/Page'
import Dashboard from '../components/Dashboard'

export default class extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page>
        <Dashboard />
      </Page>
    )
  }
}
