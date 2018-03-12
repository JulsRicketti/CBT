import React from 'react'
import PropTypes from 'prop-types'
import { ClipLoader } from 'react-spinners';
import Page from '../components/Page'
import { Form, Segment, Tab, Button, Icon, Modal, Divider, Label, Grid } from 'semantic-ui-react'
import axios from 'axios'
import withRedux from 'next-redux-wrapper'
import { createStore, actions } from '../store'
import ChallengeModal from '../components/ChallengeModal'
import Config from '../config/config'

const {
  challenge: { setNewChallenge },
  user: { setLoggedInUser, setAccessToken }
} = actions
class Challenges extends React.Component {

  static propTypes = {
    user: PropTypes.string.isRequired,
    accessToken: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      challenges: []
    }
  }

  componentWillMount() {
    if (typeof localStorage !== 'undefined') {
      this.props.setLoggedInUser(localStorage.getItem('loggedInUserId'), localStorage.getItem('accessToken'))
    }
  }

  componentDidMount () {
    console.table(this.props)
    if (!this.props.accessToken) return
    axios.get(`${Config.serverUrl}/api/challenges`, {params: { access_token: this.props.accessToken }})
      .then(res => {
        console.log('Challenges', res)
        this.setState({ challenges: res.data })
      })
      .catch(err => console.log(err))
  }

  renderChallenges (status) {
    const { challenges } = this.state
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
    const { pathname } = this.props.url
    const { showNewChallengeForm } = this.state

    const panes = [
      {menuItem: 'Incomplete Challenges', render: () => this.renderChallenges('incomplete') },
      {menuItem: 'Complete Challenges', render: () => this.renderChallenges('complete') }
    ]

    if (this.props.user) {
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
        <ChallengeModal user={this.props.user} accessToken={this.props.accessToken}/>
        <Divider/>
        <Tab panes={panes}/>
      </Page>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user:  state.user.loggedInUser,
    accessToken: state.user.accessToken
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedInUser: (userId, accessToken) => {
      console.log('setLoggedInUser', this)
      // TODO: automatically set up the logged in user
      dispatch(setLoggedInUser(userId))
      dispatch(setAccessToken(accessToken))
    }
  }
}

export default withRedux(createStore, mapStateToProps, mapDispatchToProps)(Challenges)