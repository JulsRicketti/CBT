import React from 'react'
import Page from '../components/Page'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

class ThoughtRecord extends React.Component {
  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <h1>Thought Record</h1>
      </Page>
    )
  }
}

export default withRedux(createStore, null, null)(ThoughtRecord)