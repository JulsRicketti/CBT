import React from 'react'
import PropTypes from 'prop-types'
import Page from '../components/Page'
import ThoughtsList from '../components/ThoughtsList'
import { getThoughts } from '../api'
import Link from 'next/link'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'

const {
  user: { setLoggedInUser, setAccessToken },
  thought: { setThoughts, setCurrentThought }
} = actions

class ThoughtRecord extends React.Component {
  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    thoughts: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      thoughts: props.thoughts
    }
  }

  componentDidMount () {
    const { setLoggedInUser, setThoughts, thoughts } = this.props
    if (typeof localStorage !== 'undefined') {
      setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))

      if(!thoughts || !thoughts.length) {
        getThoughts(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
        .then(res => {
          console.log('thoughts after promise', res)
          this.setState({thoughts: res})
          setThoughts(res)
        })
    }
    }
  }

  render () {
    const { thoughts } = this.state
    const { pathname } = this.props.url
    const noThoughtsMessage = (
      <div>
        <h4>No thoughts currently registered</h4>
        <p>For registering an uncomfortable thought or feeling, go to the <Link href='/new_thought'>New Thought section</Link>.</p>
      </div>
    )
    return (
      <Page pathname={pathname}>
        <h1>Thought Record</h1>
        {
          thoughts.length
            ? <ThoughtsList thoughts={thoughts}/>
            : noThoughtsMessage
        }
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:  state.user.loggedInUser,
    accessToken: state.user.accessToken,
    thoughts: state.thought.thoughts,
    accessToken: state.user.accessToken,
    challenges: state.challenge.challenges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: (userId, accessToken) => {
      dispatch(setLoggedInUser(userId))
      dispatch(setAccessToken(accessToken))
    },
    setThoughts: (thoughts) => {
      dispatch(setThoughts(thoughts))
    }
  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(ThoughtRecord)