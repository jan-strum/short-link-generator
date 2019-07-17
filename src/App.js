import React from 'react'
import axios from 'axios'
import Header from './components/Header'
import CreateNewLink from './components/CreateNewLink'
import AllLinks from './components/AllLinks'
import './App.css'

import config from './config.json'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: [],
      display: 'create',
      currentClipboard: ''
    }

    this.BASE_URL = `//${config.SERVE_HOSTNAME}:${config.SERVE_PORT}`
    this.LINKS_URL = `${this.BASE_URL}/api/links`
  }

  componentDidMount = async () => {
    this.getData()
  }
  getData = async () => {
    const { data } = await axios.get(this.LINKS_URL)
    this.setState({ data })
  }
  toggleDisplay = str => {
    this.setState({ display: str })
  }
  copyToClipboard = shortLink => {
    const el = document.createElement('textarea')
    el.value = shortLink
    el.setAttribute('readonly', '')
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    document.body.removeChild(el)

    this.setState({ currentClipboard: shortLink })
  }

  render() {
    return (
      <div>
        <Header
          toggleDisplay={this.toggleDisplay}
          display={this.state.display}
        />
        {this.state.display === 'create' ? (
          <CreateNewLink
            BASE_URL={this.BASE_URL}
            LINKS_URL={this.LINKS_URL}
            getData={this.getData}
            currentClipboard={this.state.currentClipboard}
            copyToClipboard={this.copyToClipboard}
          />
        ) : (
          <AllLinks
            BASE_URL={this.BASE_URL}
            data={this.state.data}
            currentClipboard={this.state.currentClipboard}
            copyToClipboard={this.copyToClipboard}
          />
        )}
      </div>
    )
  }
}

export default App
