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

  componentDidMount () {
    const { challenges, setChallenges, setLoggedInUser } = this.props

    if (challenges.length) return
    if (typeof localStorage !== 'undefined') {
      setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
      getChallenges(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
        .then(res => setChallenges(res))
    }
  }

  shouldComponentUpdate (nextProps) {
    return (
      this.props.user !== nextProps.user ||
      this.props.accessToken !== nextProps.accessToken ||
      this.props.challenges !== nextProps.challenges
    )
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
    const { user, accessToken } = this.props
    return (
      <div>
      {
        challenges.filter (x => x.status === status)
        .map((challenge, key) => {
          return (
            <Tab.Pane key={key}>
              <Segment>
                <Grid columns='equal'>
                  <Grid.Column> <h3>{challenge.difficulty}</h3> </Grid.Column>
                  <Grid.Column> <h4>{challenge.title}</h4> </Grid.Column>
                  <Grid.Column> {challenge.description} </Grid.Column>
                  <Grid.Column>
                    <Button.Group>
                      <ChallengeModal
                        user={user}
                        accessToken={accessToken}
                        challenges={challenges}
                        isUpdating={true}
                        challengeId={challenge.id}
                        difficulty={challenge.difficulty}
                        status={challenge.status}
                        title={challenge.title}
                        description={challenge.description}
                      />
                      <Button icon negative onClick={(evt) => this.removeChallenge(evt, challenge.id)}><Icon name='remove'/></Button>
                      {
                        status === 'incomplete'
                          ? <Button>Complete</Button>
                          : null
                      }
                    </Button.Group>
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
          how they reacted and the results of their challenges. Generally speaking, something
          you tend to avoid.
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