import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'

import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

class ThoughtRecord extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    thoughts: PropTypes.array.isRequired
  }

  render () {
    const { pathname } = this.props.url
    return (
      <Page pathname={pathname}>
        <h1>Thought Record</h1>
      </Page>
    )
  }
}

mapStateToProps = (state) => {
  return {
    thoughts: state.thought.thoughts,
    accessToken: state.user.accessToken,
    challenges: state.challenge.challenges
  }
}

mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withRedux(createStore, mapStateToProps, null)(ThoughtRecord)