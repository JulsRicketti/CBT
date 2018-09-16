import React from 'react'
import Page from '../components/Page'
import Dashboard from '../components/Dashboard'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

class Main extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <Dashboard />
      </Page>
    )
  }
}

export default withRedux(createStore, null, null)(Main)