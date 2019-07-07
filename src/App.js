import React from 'react'
import axios from 'axios'
import CreateNewLink from './components/CreateNewLink'
import './App.css'
import AllLinks from './components/AllLinks'

import config from './config.json'

const LINKS_URL = `//${config.SERVE_HOSTNAME}:${config.SERVE_PORT}/api/links`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      targetUrl: '',
      newLink: {},
      display: 'create'
    }
  }
  componentDidMount = async () => {
    this.fetchData()
  }
  fetchData = async () => {
    const { data } = await axios.get(LINKS_URL)
    this.setState({ data })
  }
  toggleDisplay = str => {
    this.setState({ display: str })
  }
  copyToClipboard = url => {
    const el = document.createElement('textarea')
    el.value = url
    el.setAttribute('readonly', '')
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)
  }

  render() {
    return (
      <div>
        <header>
          <h1>Short Link Generator!</h1>
        </header>
        <nav>
          <div
            className='nav-item'
            onClick={() => this.toggleDisplay('create')}
          >
            Create
          </div>
          <div className='nav-item' onClick={() => this.toggleDisplay('view')}>
            View
          </div>
        </nav>
        {this.state.display === 'create' ? (
          <CreateNewLink
            LINKS_URL={LINKS_URL}
            fetchData={this.fetchData}
            copyToClipboard={this.copyToClipboard}
          />
        ) : (
          <AllLinks
            data={this.state.data}
            copyToClipboard={this.copyToClipboard}
          />
        )}
      </div>
    )
  }
}

export default App
