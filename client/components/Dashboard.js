import React from 'react'
import { Button } from 'semantic-ui-react'
import Link from 'next/link'
import { getUserObject } from '../api'

export default class Test extends React.Component {

  handleTestClick () {
    console.table(getUserObject(1))
  }

  render () {
    return (
      <div>
        <h1>Cognitive Behavioural Therapy</h1>
        <h3>Sometimes all it takes is understanding your own thought process.</h3>
        <p>TODO: summary of previous activities and perhaps achievements</p>
        <Link href='/new_thought'><Button className='primary'>New Thought</Button></Link>
        <Button onClick={() => this.handleTestClick()}>test button</Button>
      </div>
    )
  }
}