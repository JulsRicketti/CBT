import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners';
import Page from '../components/Page'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid } from 'semantic-ui-react'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'
import ChallengeModal from '../components/ChallengeModal'
import Config from '../config/config'
import { getChallenges, removeChallenge } from '../api'

const {
  challenge: { setChallenges },
  user: { setLoggedInUser, setAccessToken }
} = actions
class Challenges extends React.Component {

  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired,
    challenges: PropTypes.array.isRequired
  }

  constructor (props) {
    super(props)
  }

  componentWillMount () {
    const { challenges, setChallenges, setLoggedInUser } = this.props

    if (challenges.length) return
    if (typeof localStorage !== 'undefined') {
      setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
      getChallenges(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
        .then(res => setChallenges(res))
    }
  }

  removeChallenge (evt, challengeId) {
    evt.preventDefault()

    const {user, accessToken, challenges, setChallenges} = this.props
    removeChallenge(user, accessToken, challengeId, challenges)
      .then(remainingChallenges => {
        setChallenges(remainingChallenges)
      })

  }

  renderChallenges (status, challenges) {
    const label = (
      status === 'complete'
        ? <Label color='teal' tag>{status}</Label>
        : <Label color='red' tag>{status}</Label>
    )

    return (
      <div>
      {
        challenges.filter (x => x.status === status)
        .map((challenge, key) => {
          return (
            <Tab.Pane key={key}>
              <Segment>
                <Grid columns='equal'>
                  <Grid.Column> {challenge.title} </Grid.Column>
                  <Grid.Column> {challenge.description} </Grid.Column>
                  <Grid.Column floated='left'> {label} </Grid.Column>
                  <Grid.Column>
                    <Button icon negative circular onClick={(evt) => this.removeChallenge(evt, challenge.id)}><Icon name='remove'/></Button>
                  </Grid.Column>
                </Grid>
              </Segment>
            </Tab.Pane>
          )
        })
      }
      </div>
    )
  }

  render () {
    const { challenges, user, accessToken, url } = this.props
    const { pathname } = url

    const panes = [
      {menuItem: 'Incomplete Challenges', render: () => this.renderChallenges('incomplete', challenges) },
      {menuItem: 'Complete Challenges', render: () => this.renderChallenges('complete', challenges) }
    ]

    if (!user) {
      return (
        <Page>
          <Grid centered>
            <ClipLoader />
          </Grid>
        </Page>
      )
    }

    return (
      <Page pathname={pathname}>
        <h1>Challenges</h1>
        <h4>In order to overcome social anxiety one needs to challenge themselves to
          come in direct contact with their fears, register and observe how they felt,
          how they reacted and the results of their challenges.
        </h4>
        <ChallengeModal user={user} accessToken={accessToken} challenges={challenges}/>
        <Divider/>
        <Tab panes={panes}/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:  state.user.loggedInUser,
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
    setChallenges: (challenges) => {
      dispatch(setChallenges(challenges))
    }
  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(Challenges)